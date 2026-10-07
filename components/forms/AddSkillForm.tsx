import { useState } from "react";
import Selection from "../atoms/Selection";
import { Label } from "expo-router";
import { Form, NameInput, PriorityRow, AddButton, AddButtonText } from "../atoms";

const AddSkillForm = ({ theme, accent, onSubmit }: { theme: string, accent: string, onSubmit: (name: string, priority: number) => void }) => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState(1);
 
  const handleSubmit = () => {
    if (!name.trim()) return;
    onSubmit(name.trim(), priority);
    setName("");
    setPriority(1);
  };
 
  return (
    <Form>
      <Label>Skill name</Label>
      <NameInput
        $theme={theme}
        value={name}
        onChangeText={setName}
        placeholder="e.g. Drawing"
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
 
      <Label>Priority — how important this skill is to you</Label>
      <PriorityRow>
        <Selection theme={theme} accent={accent} value={priority === 1} onSelect={() => setPriority(1)} text="Low" />
        <Selection theme={theme} accent={accent} value={priority === 2} onSelect={() => setPriority(2)} text="Average" />
        <Selection theme={theme} accent={accent} value={priority === 3} onSelect={() => setPriority(3)} text="High" />
      </PriorityRow>
 
      <AddButton onPress={handleSubmit} $accent={accent}>
        <AddButtonText $theme={theme}>+</AddButtonText>
      </AddButton>
    </Form>
  );
};

export default AddSkillForm;