import { Task, Theme } from "@/types";
import { Pressable, Text, View } from "react-native";

const TaskContainer = ({
    style,
    task,
    onAssign,
    onRemove
  }: {
    style: Theme, 
    task: Task, 
    onAssign?: (task: Task) => void, 
    onRemove?: (task: Task) => void 
  }) => {

  return (
    <View style={style.flexContainer}>
      <View style={[style.colFlex, { width: "80%" }]}>
        <Text style={style.p}>{task.name}</Text>
        <Text style={style.sub}>{task.frequency}, {task.priority}</Text>
      </View>
      <View style={style.colFlex}>
        {onAssign && (
          <Pressable onPress={() => onRemove(task)}>
            <Text style={style.raisedHighlight}>x</Text>
          </Pressable>
        )}
        {onRemove && (
          <Pressable onPress={() => onAssign(task)}>
            <Text style={style.raisedHighlight}>+</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default TaskContainer;