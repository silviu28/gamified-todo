import { FunctionComponent } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import AddTaskForm from "./AddTaskForm";
import { bgStyle, heading, highlight, padding } from "@/constants/styles";
import { useNavigate } from "react-router-native";
import { Frequency, Priority, Skill, Task } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import { addTask } from "@/app/tasksSlice";
import TaskContainer from "./TaskContainer";

const AddTaskPage: FunctionComponent = () => {
  const allTasks = useSelector((state: State) => state.tasks.allTasks);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addNewTask = (name: string, priority: Priority, frequency: Frequency, skill: Skill) => {
    const newTask: Task = {
      name,
      priority,
      frequency,  
      xp: 0,
      creationDate: new Date(),
      skill
    };
    console.log(newTask);
    dispatch(addTask(newTask));
    console.log(allTasks);
  };
  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>
          Now add some tasks that you need to do:
        </Text>
        <AddTaskForm onSubmit={addNewTask} />

        <FlatList
          data={allTasks}
          keyExtractor={task => task.name}
          renderItem={({ item }) => 
            <TaskContainer task={item} removable />}
        />

        <Pressable onPress={() => navigate('/main')}>
          <Text style={highlight}>done</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default AddTaskPage;