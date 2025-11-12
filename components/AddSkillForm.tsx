import { highlight, p, rowFlex, textInput } from "@/constants/styles";
import React, { FunctionComponent, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Selection from "./Selection";

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
          <Selection
            value={priority === 1}
            onSelect={() => setPriority(1)} 
            text="low"
          />
          <Selection
            value={priority === 2}
            onSelect={() => setPriority(2)} 
            text="average"
          />
          <Selection
            value={priority === 3}
            onSelect={() => setPriority(3)} 
            text="high"
          />
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