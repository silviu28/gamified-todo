import { FunctionComponent, useContext } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import AddTaskForm from "./AddTaskForm";
import { useNavigate } from "react-router-native";
import { Frequency, Priority, Skill, Task } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import { addTask } from "@/app/skillsSlice";
import TaskContainer from "./TaskContainer";
import FadeInWrapper from "./FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";

const AddTaskPage: FunctionComponent = () => {
  const style = useContext(ThemeContext);
  const skills = useSelector((state: State) => state.skills.skills);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allTasks = skills.flatMap(skill => skill.tasks ?? []);

  const addNewTask = (name: string, priority: Priority, frequency: Frequency, skill: Skill) => {
    let xp;
    switch (priority) {
      case "low":
        xp = 10;
        break;
      case "average":
        xp = 20;
        break;
      case "high":
        xp = 30;
        break;
      default:
        xp = 0;
        break;
    }
    const newTask: Task = {
      name,
      priority,
      frequency,  
      xp,
      creationDate: new Date(),
      skill
    };
    console.log(newTask);
    dispatch(addTask({ skill, task: newTask }));
    console.log(skills);
  };
  return (
    <FadeInWrapper>
      <ScrollView
        style={style.bg}
        showsVerticalScrollIndicator={false}>
        <View style={style.padding}>
          <Text style={style.heading}>
            Now add some tasks that you need to do:
          </Text>
          <AddTaskForm onSubmit={addNewTask} />

          <FlatList
            data={allTasks}
            scrollEnabled={false}
            keyExtractor={task => task.name}
            renderItem={({ item }) => 
              <TaskContainer task={item} removable />}
          />

          <Pressable onPress={() => navigate('/main')}>
            <Text style={style.highlight}>done</Text>
          </Pressable>
          <Pressable onPress={() => navigate('/suggest')}>
            <Text style={style.highlight}>need help?</Text>
          </Pressable>
        </View>
      </ScrollView>
    </FadeInWrapper>
  )
};

export default AddTaskPage;