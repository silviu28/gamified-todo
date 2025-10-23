import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { Link } from "react-router-native";

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
      <form { ... onSubmit }>
        <label>skill name: </label>
        <input onChange={e => setSkillName(e.target.value)} />
        <label>priority</label>
        <input onChange={e => setPriority(parseInt(e.target.value))} />
        <button type='submit'>+</button>
      </form>
    </View>
  );
};

export default AddSkillForm;