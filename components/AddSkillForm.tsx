import React, { FunctionComponent, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type AddSkillFormProps = {
  onSubmit: (data: {
    name: string,
    priority: number,
  }) => void,
}

const AddSkillForm: FunctionComponent<AddSkillFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [priority, setPriority] = useState<number>(0);

  return (
    <View>
      <View>
        <Text style={{ color: 'white' }}>skill name: </Text>
        <TextInput style={{ color: 'white', backgroundColor: 'gray' }} onChangeText={t => setName(t)} />
        <Text style={{ color: 'white' }}>priority (how important this skill is to you):</Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 10, }}>
          <Pressable onPress={() => setPriority(1)}>
            <Text style={{ color: 'lime' }}>low</Text>
          </Pressable>
          <Pressable onPress={() => setPriority(2)}>
            <Text style={{ color: 'lime' }}>medium</Text>
          </Pressable>
          <Pressable onPress={() => setPriority(3)}>
            <Text style={{ color: 'lime' }}>high</Text>
          </Pressable>
        </View>
        <Pressable onPress={() => onSubmit({ name, priority })}>
          <Text style={{ color: 'lime', fontSize: 30 }}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSkillForm;