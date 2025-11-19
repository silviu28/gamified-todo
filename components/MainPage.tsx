import { container, heading, highlight, padding, sub } from "@/constants/styles";
import { FC } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import TaskContainer from "./TaskContainer";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import { useNavigate } from "react-router-native";
import SkillContainer from "./SkillContainer";
import BottomBar from "./BottomBar";
import ToDoTask from "./ToDoTask";
import StatsContainer from "./StatsContainer";
import Modal from "./Modal";
import TierContainer from "./TierContainer";
import SettingsIcon from "./icons/SettingsIcon";
import GradientBackground from "./GradientBackground";
import CheckboxIcon from "./icons/CheckboxIcon";
import InfoIcon from "./icons/InfoIcon";
import UpArrowIcon from "./icons/UpArrowIcon";
import { dismissOrCompleteTask } from "@/app/tasksSlice";

const MainPage: FC = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const toDoTasks = useSelector((state: State) => state.tasks.tasksToDo);
  const skills = useSelector((state: State) => state.skills.skills);

  const allTasks = skills.flatMap(skill => skill.tasks);

  // toDoTasks.forEach(t => dispatch(dismissOrCompleteTask(t)));

  return (
    <GradientBackground>
      <View style={{ position: 'absolute', top: 60, right: 20, zIndex: 10,}}>
        <Pressable onPress={() => navigate("/settings")}>
          <SettingsIcon />
        </Pressable>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={[padding, { paddingBottom: 120 }]}
        showsVerticalScrollIndicator={false}>
        
        <View style={container}>
          <Text style={heading}>
            <CheckboxIcon /> Things to do
          </Text>
          <Text/>
          {toDoTasks.length > 0
            ? <FlatList
              data={toDoTasks}
              keyExtractor={(task) => task.name}
              renderItem={({ item }) => <ToDoTask task={item} />}
              scrollEnabled={false}
             />
            : <Text style={sub}>Nothing to do for now</Text>}
        </View>

        <View style={container}>
          <Text style={heading}>
            <InfoIcon /> Add tasks:
          </Text>
          <Text />
          <FlatList
            data={allTasks}
            keyExtractor={(task) => task.name}
            scrollEnabled={false}
            renderItem={({ item }) =>
              <TaskContainer task={item} assignable />}
          />
        </View>

        <View style={container}>
          <Text style={heading}>
            <UpArrowIcon /> Your skills:
          </Text>
          {skills.map(skill => 
            <SkillContainer key={skill.name} skill={skill} />)}
        </View>

        <StatsContainer />
        <TierContainer />

        <Text/>
      </ScrollView>

      <BottomBar>
        <Pressable onPress={() => navigate("/addTask")}>
          <Text style={highlight}>Revise tasks</Text>
        </Pressable>
        <Pressable onPress={() => navigate("/addSkill")}>
          <Text style={highlight}>Revise skills</Text>
        </Pressable>
      </BottomBar>

      <Modal isVisible>
        <Text style={sub}>Show this above</Text>
      </Modal>
    </GradientBackground>
  );
};

export default MainPage;