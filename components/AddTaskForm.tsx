import { Text } from "@react-navigation/elements";
import { FunctionComponent, useState } from "react";
import { Pressable, TextInput, View } from "react-native";

type AddTaskFormProps = {
  onSubmit: ({
    task: string,
    priority: Priority,
    frequency: Frequency
  }) => void,
};

type Frequency = 'one-time' | 'daily' | 'weekly' | 'monthly' | 'yearly';

type Priority = 'low' | 'average' | 'high';

const AddTaskForm: FunctionComponent<AddTaskFormProps> = ({ onSubmit }) => {
  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('low');
  const [frequency, setFrequency] = useState<Frequency>('one-time');

  return (
    // Use empty <Text /> tag to add a line break
    <View>
      <Text style={{ color: 'white' }}>task:</Text>
      <TextInput onChangeText={t => setTask(t)} style={{ backgroundColor: 'gray' }} />
      <Text />

      <Text style={{ color: 'white' }}>how rewarding should this task be?</Text>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <Pressable onPress={() => setPriority('low')}>
          <Text style={{ color: 'lime' }}>low</Text>
        </Pressable>
        <Pressable onPress={() => setPriority('average')}>
          <Text style={{ color: 'lime' }}>average</Text>
        </Pressable>
        <Pressable onPress={() => setPriority('high')}>
          <Text style={{ color: 'lime' }}>high</Text>
        </Pressable>
      </View>
      <Text style={{ color: 'white' }}>low - receive 10 pts</Text>
      <Text style={{ color: 'white' }}>average - receive 20 pts</Text>
      <Text style={{ color: 'white' }}>high - receive 30 pts</Text>

      <Text/>

      <Text style={{ color: 'white' }}>set a frequency for this task:</Text>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
        <Pressable onPress={() => setFrequency('one-time')}>
          <Text style={{ color: 'lime' }}>one-time</Text>
        </Pressable>
        <Pressable onPress={() => setFrequency('daily')}>
          <Text style={{ color: 'lime' }}>daily</Text>
        </Pressable>
        <Pressable onPress={() => setFrequency('weekly')}>
          <Text style={{ color: 'lime' }}>weekly</Text>
        </Pressable>
        <Pressable onPress={() => setFrequency('monthly')}>
          <Text style={{ color: 'lime' }}>monthly</Text>
        </Pressable>
        <Pressable onPress={() => setFrequency('yearly')}>
          <Text style={{ color: 'lime' }}>yearly</Text>
        </Pressable>
      </View>
      <Text style={{ color: 'white' }}>tasks will be automatically added to your list based on the frequency</Text>


      <Pressable onPress={() => onSubmit({ task, priority, frequency })}>
        <Text style={{ fontSize: 30, color: 'lime' }}>+</Text>
      </Pressable>
    </View>
  )
};

export default AddTaskForm;