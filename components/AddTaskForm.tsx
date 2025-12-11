import { State } from "@/app/store";
import { Frequency, Priority, Skill } from "@/types";
import { Text } from "@react-navigation/elements";
import { FunctionComponent, useContext, useState } from "react";
import { Pressable, TextInput, View } from "react-native";
import { useSelector } from "react-redux";
import Selection from "./Selection";
import ThemeContext from "@/app/context/ThemeContext";

type AddTaskFormProps = {
  onSubmit: (
    task: string,
    priority: Priority,
    frequency: Frequency,
    skill: Skill
  ) => void,
};

const AddTaskForm: FunctionComponent<AddTaskFormProps> = ({ onSubmit }) => {
  const style = useContext(ThemeContext);
  const skills = useSelector((state: State) => state.skills.skills);

  const [task, setTask] = useState<string>('');
  const [priority, setPriority] = useState<Priority>('low');
  const [frequency, setFrequency] = useState<Frequency>('one-time');
  const [skill, setSkill] = useState<Skill>();

  return (
    // Use empty <Text /> tag to add a line break
    <View>
      <Text style={style.p}>task:</Text>
      <TextInput
        onChangeText={t => setTask(t)}
        style={style.textInput}
      />
      <Text />

      <Text style={style.p}>belonging to skill:</Text>
      <View style={style.rowFlex}>
        {skills.map(sk => 
          <Selection
            value={sk === skill}
            key={sk.name}
            onSelect={() => setSkill(sk)}
            text={sk.name}
          />)}
      </View>
      <Text />

      <Text style={style.p}>
        how rewarding should this task be?
      </Text>
      <View style={style.rowFlex}>
        <Selection
          value={priority === "low"}
          onSelect={() => setPriority("low")}
          text="low"
        />
        <Selection
          value={priority === "average"}
          onSelect={() => setPriority("average")}
          text="average"
        />
        <Selection
          value={priority === "high"}
          onSelect={() => setPriority("high")}
          text="high"
        />
      </View>
      <Text style={style.p}>low - receive 10 pts</Text>
      <Text style={style.p}>average - receive 20 pts</Text>
      <Text style={style.p}>high - receive 30 pts</Text>

      <Text/>

      <Text style={style.p}>set a frequency for this task:</Text>
      <View style={style.rowFlex}>
        <Selection
          value={frequency === "one-time"}
          onSelect={() => setFrequency("one-time")}
          text={"one-time"}
        />
        <Selection
          value={frequency === "daily"}
          onSelect={() => setFrequency("daily")}
          text={"daily"}
        />
        <Selection
          value={frequency === "weekly"}
          onSelect={() => setFrequency("weekly")}
          text={"weekly"}
        />
        <Selection
          value={frequency === "monthly"}
          onSelect={() => setFrequency("monthly")}
          text={"monthly"}
        />
        <Selection
          value={frequency === "yearly"}
          onSelect={() => setFrequency("yearly")}
          text={"yearly"}
        />
      </View>
      <Text style={style.p}>tasks will be automatically added to your list based on the frequency</Text>


      <Pressable onPress={() => onSubmit(task, priority, frequency, skill)}>
        <Text style={[ style.highlight, { fontSize: 30 }]}>
          +
        </Text>
      </Pressable>
    </View>
  )
};

export default AddTaskForm;