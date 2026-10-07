import { Frequency, Skill } from "@/types";
import { FunctionComponent, useState } from "react";
import { Pressable } from "react-native";
import Selection from "../atoms/Selection";
import { AddButton, AddButtonText, Form, HelperText, Label, NameInput, OptionRow, PointHint, PointHints } from "../atoms";

type AddTaskFormProps = {
  skills: Skill[],
  theme: string,
  accent: string,
  onSubmit: (
    task: string,
    priority: number,
    frequency: Frequency,
    skill: Skill
  ) => void,
};

const AddTaskForm: FunctionComponent<AddTaskFormProps> = ({ skills, theme, accent, onSubmit }) => {
  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState(1);
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [skill, setSkill] = useState<Skill>(skills[0]);
  const canSubmit = task.trim().length > 0 && !!skill;

  return (
    <Form>
      <Label $theme={theme}>Task</Label>
      <NameInput
        $theme={theme}
        value={task}
        onChangeText={setTask}
        placeholder="e.g. Practice for 20 minutes"
      />
 
      <Label $theme={theme}>Belonging to skill</Label>
      <OptionRow>
        {skills.map((sk) => (
          <Selection
            theme={theme}
            accent={accent}
            key={sk.name}
            value={sk === skill}
            onSelect={() => setSkill(sk)}
            text={sk.name}
          />
        ))}
      </OptionRow>
      {skills.length === 0 && (
        <HelperText>Add a skill first so you have something to link this task to.</HelperText>
      )}
 
      <Label $theme={theme}>How rewarding should this task be?</Label>
      <OptionRow>
        <Selection theme={theme} accent={accent} value={priority === 1} onSelect={() => setPriority(1)} text="Low" />
        <Selection theme={theme} accent={accent} value={priority === 2} onSelect={() => setPriority(2)} text="Average" />
        <Selection theme={theme} accent={accent} value={priority === 3} onSelect={() => setPriority(3)} text="High" />
      </OptionRow>
      <PointHints>
        <PointHint>Low - 10 pts</PointHint>
        <PointHint>Average - 20 pts</PointHint>
        <PointHint>High - 30 pts</PointHint>
      </PointHints>
 
      <Label $theme={theme}>Set a frequency for this task</Label>
      <OptionRow>
        <Selection theme={theme} accent={accent} value={frequency === "one-time"} onSelect={() => setFrequency("one-time")} text="One-time" />
        <Selection theme={theme} accent={accent} value={frequency === "daily"} onSelect={() => setFrequency("daily")} text="Daily" />
        <Selection theme={theme} accent={accent} value={frequency === "weekly"} onSelect={() => setFrequency("weekly")} text="Weekly" />
        <Selection theme={theme} accent={accent} value={frequency === "monthly"} onSelect={() => setFrequency("monthly")} text="Monthly" />
        <Selection theme={theme} accent={accent} value={frequency === "yearly"} onSelect={() => setFrequency("yearly")} text="Yearly" />
      </OptionRow>
      <HelperText>Tasks are automatically added to your list based on this frequency.</HelperText>
 
      <Pressable>
        <AddButton
          $accent={accent}
          style={{ opacity: canSubmit ? 1 : 0.4 }}
          onPress={() => skill && onSubmit(task, priority, frequency, skill)} disabled={!canSubmit}
        >
          <AddButtonText $theme={theme}>+</AddButtonText>
        </AddButton>
      </Pressable>
    </Form>
  )
};

export default AddTaskForm;