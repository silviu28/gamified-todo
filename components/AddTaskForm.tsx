import { State } from "@/app/store";
import { highlight, p, rowFlex, textInput } from "@/constants/styles";
import { Frequency, Priority } from "@/types";
import { Text } from "@react-navigation/elements";
import { FunctionComponent, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { useSelector } from "react-redux";

type AddTaskFormProps = {
  onSubmit: (
    task: string,
    priority: Priority,
    frequency: Frequency,
  ) => void,
};

const AddTaskForm: FunctionComponent<AddTaskFormProps> = ({ onSubmit }) => {
  const skills = useSelector((state: State) => state.skills.skills);

  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('low');
  const [frequency, setFrequency] = useState<Frequency>('one-time');

  return (
    // Use empty <Text /> tag to add a line break
    <View>
      <Text style={p}>task:</Text>
      <TextInput
        onChangeText={t => setTask(t)}
        style={textInput}
      />
      <Text />

      <Text style={p}>belonging to skill:</Text>
      <View style={rowFlex}>
        {skills.map(skill => 
          <Pressable key={skill.name}>
            <Text style={highlight}>{skill.name}</Text>
          </Pressable>)}
      </View>
      <Text />

      <Text style={p}>
        how rewarding should this task be?
      </Text>
      <View style={rowFlex}>
        <Pressable onPress={() => setPriority('low')}>
          <Text style={highlight}>low</Text>
        </Pressable>
        <Pressable onPress={() => setPriority('average')}>
          <Text style={highlight}>average</Text>
        </Pressable>
        <Pressable onPress={() => setPriority('high')}>
          <Text style={highlight}>high</Text>
        </Pressable>
      </View>
      <Text style={p}>low - receive 10 pts</Text>
      <Text style={p}>average - receive 20 pts</Text>
      <Text style={p}>high - receive 30 pts</Text>

      <Text/>

      <Text style={p}>set a frequency for this task:</Text>
      <View style={rowFlex}>
        <Pressable onPress={() => setFrequency('one-time')}>
          <Text style={highlight}>one-time</Text>
        </Pressable>
        <Pressable onPress={() => setFrequency('daily')}>
          <Text style={highlight}>daily</Text>
        </Pressable>
        <Pressable onPress={() => setFrequency('weekly')}>
          <Text style={highlight}>weekly</Text>
        </Pressable>
        <Pressable onPress={() => setFrequency('monthly')}>
          <Text style={highlight}>monthly</Text>
        </Pressable>
        <Pressable onPress={() => setFrequency('yearly')}>
          <Text style={highlight}>yearly</Text>
        </Pressable>
      </View>
      <Text style={p}>tasks will be automatically added to your list based on the frequency</Text>


      <Pressable onPress={() => onSubmit(task, priority, frequency)}>
        <Text style={[ highlight, { fontSize: 30 }]}>
          +
        </Text>
      </Pressable>
    </View>
  )
};

export default AddTaskForm;