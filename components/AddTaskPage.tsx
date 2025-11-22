import { FunctionComponent } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import AddTaskForm from "./AddTaskForm";
import { bgStyle, heading, highlight, padding } from "@/constants/styles";
import { useNavigate } from "react-router-native";
import { Frequency, Priority, Skill, Task } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import { addTask } from "@/app/skillsSlice";
import TaskContainer from "./TaskContainer";
import AnimatePage from "./AnimatePage";

const AddTaskPage: FunctionComponent = () => {
  const skills = useSelector((state: State) => state.skills.skills);
  const dispatch = useDispatch();

  const allTasks = skills.flatMap(skill => skill.tasks ?? []);

  const navigate = useNavigate();

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
    <AnimatePage>
      <ScrollView
        style={bgStyle}
        showsVerticalScrollIndicator={false}>
        <View style={padding}>
          <Text style={heading}>
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
            <Text style={highlight}>done</Text>
          </Pressable>
        </View>
      </ScrollView>
    </AnimatePage>
  )
};

export default AddTaskPage;