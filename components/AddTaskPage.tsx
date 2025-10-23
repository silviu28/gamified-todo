import { FunctionComponent, SyntheticEvent } from "react";
import { Text, View } from "react-native";
import AddTaskForm from "./AddTaskForm";

const addTask = (e: SyntheticEvent) => {
  e.preventDefault();
};

const AddTaskPage: FunctionComponent = () => {
  return (
    <View>
      <Text>
        Now add some tasks that you need to do
      </Text>
      <AddTaskForm onSubmit={addTask} />
    </View>
  )
};

export default AddTaskPage;