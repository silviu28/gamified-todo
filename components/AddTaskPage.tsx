import { FunctionComponent, useState } from "react";
import { Pressable, Text, View } from "react-native";
import AddTaskForm from "./AddTaskForm";
import { bgStyle, heading, padding } from "@/constants/styles";
import { useNavigate } from "react-router-native";
import { Task } from "@/types";

const AddTaskPage: FunctionComponent = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const navigate = useNavigate();

  const addTask = ({ task, priority, frequency }: Task) => {
    setTasks([...tasks, { task, priority, frequency }])
  };
  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>
          Now add some tasks that you need to do:
        </Text>
        <AddTaskForm onSubmit={addTask} />

        { tasks?.map(task => 
          <Text style={{ color: 'white' }} key={task.task+task.frequency+task.priority}>
            {task.task}, {task.frequency}, {task.priority}
          </Text>) }

        <Pressable onPress={() => navigate('/main')}>
          <Text style={{ color: 'lime' }}>done</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default AddTaskPage;