import { FunctionComponent } from "react";
import { Pressable, Text, View } from "react-native";
import AddTaskForm from "./AddTaskForm";
import { bgStyle, heading, highlight, p, padding } from "@/constants/styles";
import { useNavigate } from "react-router-native";
import { Frequency, Priority, Task } from "@/types";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import { addTask } from "@/app/tasksSlice";

const AddTaskPage: FunctionComponent = () => {
  const allTasks = useSelector((state: State) => state.tasks.allTasks);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addNewTask = (name: string, priority: Priority, frequency: Frequency) => {
    const newTask: Task = {
      name,
      priority,
      frequency,  
      xp: 0
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

        { allTasks?.map(task => 
          <Text style={p} key={task.name}>
            {task.name}, {task.frequency}, {task.priority}
          </Text>) }
        

        <Pressable onPress={() => navigate('/main')}>
          <Text style={highlight}>done</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default AddTaskPage;