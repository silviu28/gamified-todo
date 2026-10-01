import { Task } from "@/types";
import { Pressable } from "react-native";
import { Row, Info, Meta, ActionButton, ActionButtonText, Name } from ".";

const priorityLabel = (priority: number) =>
  priority === 1 ? "low" : priority === 2 ? "average" : "high";

const frequencyLabel = (frequency: number) =>
  `once every ${Math.floor(frequency / (24 * 1000 * 3600))} days`

const TaskContainer = ({
    accent,
    task,
    onAssign,
    onRemove
  }: {
    accent: string, 
    task: Task, 
    onAssign?: (task: Task) => void, 
    onRemove?: (task: Task) => void 
  }) => {

  return (
    <Row style={{ padding: 20 }}>
      <Info>
        <Name>{task.name}</Name>
        <Meta>
          {frequencyLabel(task.frequency)} · {priorityLabel(task.priority)} priority
        </Meta>
      </Info>
 
      {onRemove && (
        <Pressable onPress={() => onRemove(task)}>
          <ActionButton $variant="remove" $accent={accent}>
            <ActionButtonText $variant="remove">×</ActionButtonText>
          </ActionButton>
        </Pressable>
      )}
 
      {onAssign && (
        <ActionButton onPress={() => onAssign(task)} $variant="assign" $accent={accent}>
          <ActionButtonText $variant="assign">+</ActionButtonText>
        </ActionButton>
      )}
    </Row>

  );
};

export default TaskContainer;