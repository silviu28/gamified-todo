import ThemeContext from "@/app/context/ThemeContext";
import { removeNote } from "@/app/notesSlice";
import { Note } from "@/types";
import { FC, useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

interface NoteViewProps {
  note: Note;
  removable?: boolean;
};

const NoteView: FC<NoteViewProps> = ({ note, removable }) => {
  const style = useContext(ThemeContext);
  const dispatch = useDispatch();

  return (
    <View style={[style.rowFlex, { justifyContent: "space-between" }]}>
      <View style={style.colFlex}>
        <Text style={style.heading}>
          {note.title}
        </Text>
        <Text style={style.p}>
          {note.content}
        </Text>
        <Text style={style.sub}>
          {new Date(note.creationDate).toLocaleString()}
        </Text>
      </View>
      <View style={style.colFlex}>
        {removable &&
          <Pressable onPress={() => dispatch(removeNote({ note }))}>
            <Text style={style.raisedHighlight}>x</Text>
          </Pressable>}
      </View>
    </View>
  );
};

export default NoteView;