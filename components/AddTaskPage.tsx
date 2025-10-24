import { FunctionComponent } from "react";
import { GestureResponderEvent, Pressable, Text, View } from "react-native";
import AddTaskForm from "./AddTaskForm";
import { bgStyle, heading, padding } from "@/constants/styles";

const addTask = (e: GestureResponderEvent) => {
  e.preventDefault();
};

const AddTaskPage: FunctionComponent = () => {
  return (
    <View style={bgStyle}>
      <View style={padding}>
        <Text style={heading}>
          Now add some tasks that you need to do:
        </Text>
        <AddTaskForm onSubmit={addTask} />
        <Pressable>
          <Text style={{ color: 'lime' }}>done</Text>
        </Pressable>
      </View>
    </View>
  )
};

export default AddTaskPage;