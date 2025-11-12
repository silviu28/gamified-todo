import { bgStyle, container, heading, highlight, p, padding, sub } from "@/constants/styles";
import { FC } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import TaskContainer from "./TaskContainer";
import { useSelector } from "react-redux";
import { State } from "@/app/store";
import { useNavigate } from "react-router-native";
import SkillContainer from "./SkillContainer";
import BottomBar from "./BottomBar";
import ToDoTask from "./ToDoTask";
import StatsContainer from "./StatsContainer";
import Modal from "./Modal";
import TierContainer from "./TierContainer";
import SettingsIcon from "./icons/SettingsIcon";

const MainPage: FC = () => {
  const navigate = useNavigate();

  const toDoTasks = useSelector((state: State) => state.tasks.tasksToDo);
  const skills = useSelector((state: State) => state.skills.skills);

  const allTasks = skills.flatMap(skill => skill.tasks);

  return (
    <View style={bgStyle}>

      <View style={{ top: 100, left: "80%", position: "absolute" }}>
        <Pressable onPress={() => navigate("/settings")}>
          <SettingsIcon />
        </Pressable>
      </View>
      
      <View style={padding}>
      
      <View style={container}>
        <Text style={heading}>Things to do</Text>
        {toDoTasks.length > 0
          ? <FlatList
            data={toDoTasks}
            keyExtractor={task => task.name}
            renderItem={({ item }) =>
              <ToDoTask task={item} />
            }
            />
          : <Text style={sub}>Nothing to do for now</Text>}
      </View>

      <View style={container}>
        <Text style={heading}>Add tasks:</Text>
        <Text />
        <FlatList
          data={allTasks}
          keyExtractor={task => task.name}
          renderItem={({ item }) => 
            <TaskContainer task={item} assignable />}
        />
      </View>

      <View style={container}>
        <Text style={heading}>Your skills:</Text>
        {skills.map(skill =>
          <SkillContainer
            key={skill.name}
            skill={skill}
          />
        )}
      </View>

      <StatsContainer />

      <TierContainer />
      
      </View>
      <BottomBar>
        <Pressable onPress={() => navigate('/addTask')}>
          <Text style={highlight}>Revise tasks</Text>
        </Pressable>
        <Pressable onPress={() => navigate('/addSkill')}>
          <Text style={highlight}>Revise skills</Text>
        </Pressable>
      </BottomBar>

      <Modal isVisible>
        <Text style={p}>Show this above</Text>
      </Modal>
      
    </View>
  );
};

export default MainPage;