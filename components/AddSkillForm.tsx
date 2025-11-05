import { highlight, p, rowFlex, textInput } from "@/constants/styles";
import React, { FunctionComponent, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

type AddSkillFormProps = {
  onSubmit: (name: string, priority: number) => void,
}

const AddSkillForm: FunctionComponent<AddSkillFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState<string>('');
  const [priority, setPriority] = useState<number>(0);

  return (
    <View>
      <View>
        <Text style={p}>skill name: </Text>
        <TextInput style={textInput} onChangeText={t => setName(t)} />

        <Text style={p}>
          priority (how important this skill is to you):
        </Text>
        <View style={rowFlex}>
          <Pressable onPress={() => setPriority(1)}>
            <Text style={highlight}>low</Text>
          </Pressable>
          <Pressable onPress={() => setPriority(2)}>
            <Text style={highlight}>medium</Text>
          </Pressable>
          <Pressable onPress={() => setPriority(3)}>
            <Text style={highlight}>high</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => onSubmit(name, priority)}>
          <Text style={[highlight, { fontSize: 30 }]}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSkillForm;