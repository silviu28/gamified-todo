import { Task } from "@/types";
import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import ThemeContext from "@/app/context/ThemeContext";

const TaskContainer = ({ task, onAssign, onRemove }: { task: Task, onAssign?: (task: Task) => void, onRemove?: (task: Task) => void }) => {
  const style = useContext(ThemeContext);

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