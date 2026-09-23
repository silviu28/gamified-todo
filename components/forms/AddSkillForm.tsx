import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Selection from "../atoms/Selection";
import { Theme } from "@/types";

const AddSkillForm = ({ style, onSubmit }: { style: Theme, onSubmit: (name: string, priority: number) => void }) => {
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
            style={style}
            value={priority === 1}
            onSelect={() => setPriority(1)} 
            text="low"
          />
          <Selection
            style={style}
            value={priority === 2}
            onSelect={() => setPriority(2)} 
            text="average"
          />
          <Selection
            style={style}
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