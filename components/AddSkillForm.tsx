import React, { FC, useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Selection from "./Selection";
import ThemeContext from "@/app/context/ThemeContext";

type AddSkillFormProps = {
  onSubmit: (name: string, priority: number) => void,
}

const AddSkillForm: FC<AddSkillFormProps> = ({ onSubmit }) => {
  const style = useContext(ThemeContext);
  const [name, setName] = useState<string>('');
  const [priority, setPriority] = useState<number>(1);

  return (
    <View>
      <View>
        <Text style={style.p}>skill name: </Text>
        <TextInput style={style.textInput} onChangeText={t => setName(t)} />

        <Text style={style.p}>
          priority (how important this skill is to you):
        </Text>
        
        <View style={style.rowFlex}>
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
          <Text style={[style.highlight, { fontSize: 30 }]}>
            +
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AddSkillForm;