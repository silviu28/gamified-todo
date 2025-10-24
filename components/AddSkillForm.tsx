import React, { FunctionComponent, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type AddSkillFormProps = {
  onSubmit: (data: {
    skillName: string,
    priority: number,
  }) => void,
}

const AddSkillForm: FunctionComponent<AddSkillFormProps> = ({ onSubmit }) => {
  const [skillName, setSkillName] = useState<string>('');
  const [priority, setPriority] = useState<number>(0);

  return (
    <View>
      <View>
        <Text style={{ color: 'white' }}>skill name: </Text>
        <TextInput style={{ color: 'white', backgroundColor: 'gray' }} onChange={e => setSkillName(e.target.value)} />
        <Text style={{ color: 'white' }}>priority:</Text>
        <TextInput style={{ color: 'white', backgroundColor: 'gray' }}onChange={e => setPriority(parseInt(e.target.value))} />
        <Pressable onPress={() => onSubmit({skillName, priority})}>
          <Text style={{ color: 'lime', fontSize: 30 }}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSkillForm;