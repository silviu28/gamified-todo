import { bgStyle, container, heading, highlight, p, padding, rowFlex, sub } from "@/constants/styles";
import { FC } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import TaskContainer from "./TaskContainer";
import { useSelector } from "react-redux";
import { State } from "@/app/store";
import { useNavigate } from "react-router-native";
import SkillContainer from "./styled/SkillContainer";
import BottomBar from "./BottomBar";
import ToDoTask from "./ToDoTask";
import StatsContainer from "./StatsContainer";

const MainPage: FC = () => {
  const navigate = useNavigate();

  const toDoTasks = useSelector((state: State) => state.tasks.tasksToDo);
  const allTasks = useSelector((state: State) => state.tasks.allTasks);
  const skills = useSelector((state: State) => state.skills.skills);

  return (
    <View style={bgStyle}>
      <View style={padding}>
      
      <View style={[container, { minHeight: 100 }]}>
        <Text style={{ color: "white" }}>Things to do</Text>
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
      
      </View>
      <BottomBar>
        <Pressable onPress={() => navigate('/addTask')}>
          <Text style={highlight}>Revise tasks</Text>
        </Pressable>
        <Pressable onPress={() => navigate('/addSkill')}>
          <Text style={highlight}>Revise skills</Text>
        </Pressable>
      </BottomBar>
    </View>
  );
};

export default MainPage;