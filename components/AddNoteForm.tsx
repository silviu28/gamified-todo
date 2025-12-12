import ThemeContext from "@/app/context/ThemeContext";
import { FC, useContext, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import FadeInWrapper from "./FadeInWrapper";

interface AddNoteFormProps {
  onSubmit: (title: string, content: string) => void;
};

const AddNoteForm: FC<AddNoteFormProps> = ({ onSubmit }) => {
  const style = useContext(ThemeContext);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  return (
    <FadeInWrapper>
      <View>
        <Text style={style.p}>title</Text>
        <TextInput 
          style={style.textInput}
          onChangeText={t => setTitle(t)}
        />

        <Text style={style.p}>content</Text>
        <TextInput
          style={style.textInput}
          onChangeText={t => setContent(t)}
        />

        <Pressable onPress={() => onSubmit(title, content)}>
          <Text style={style.sub}>add</Text>
        </Pressable>
      </View>
    </FadeInWrapper>
  );
};

export default AddNoteForm;