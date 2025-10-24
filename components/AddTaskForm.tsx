import { Text } from "@react-navigation/elements";
import { FunctionComponent, useState } from "react";
import { GestureResponderEvent, Pressable, TextInput, View } from "react-native";

type AddTaskFormProps = {
  onSubmit: (e: GestureResponderEvent) => void,
};

type Frequency = 'one-time' | 'daily' | 'weekly' | 'monthly' | 'yearly';

type Priority = 'low' | 'average' | 'high';

const AddTaskForm: FunctionComponent<AddTaskFormProps> = ({ onSubmit }) => {
  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('low');
  const [frequency, setFrequency] = useState<Frequency>('one-time');

  return (
    <View>
      <Text style={{ color: 'white' }}>task:</Text>
      <TextInput onChange={e => setTask(e.target.value)} style={{ backgroundColor: 'gray' }} />

      <Text style={{ color: 'white' }}>how rewarding should this task be?</Text>
      <Text style={{ color: 'white' }}>low - receive 10 pts</Text>
      <Text style={{ color: 'white' }}>average - receive 20 pts</Text>
      <Text style={{ color: 'white' }}>high - receive 30 pts</Text>
      <TextInput onChange={e => setPriority(e.target.value)} style={{ backgroundColor: 'gray' }} />

      <Text style={{ color: 'white' }}>set a frequency for this task:</Text>
      <TextInput onChange={e => setFrequency(e.target.value)} style={{ backgroundColor: 'gray' }} />

      <Pressable onPress={(e) => onSubmit(e)}>
        <Text style={{ fontSize: 30, color: 'lime' }}>+</Text>
      </Pressable>
    </View>
  )
};

export default AddTaskForm;