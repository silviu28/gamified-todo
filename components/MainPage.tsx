import { FC, useContext, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import TaskContainer from "./TaskContainer";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import { useNavigate } from "react-router-native";
import SkillContainer from "./SkillContainer";
import BottomBar from "./BottomBar";
import ToDoTask from "./ToDoTask";
import StatsContainer from "./StatsContainer";
import Modal from "./Modal";
import TierContainer from "./TierContainer";
import SettingsIcon from "./icons/SettingsIcon";
import GradientBackground from "./GradientBackground";
import CheckboxIcon from "./icons/CheckboxIcon";
import InfoIcon from "./icons/InfoIcon";
import UpArrowIcon from "./icons/UpArrowIcon";
import PersonIcon from "./icons/PersonIcon";
import FadeInWrapper from "./FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";
import PencilIcon from "./icons/PencilIcon";
import NoteView from "./Note";
import AddNoteForm from "./AddNoteForm";
import { addNote } from "@/app/notesSlice";

const MainPage: FC = () => {
  const style = useContext(ThemeContext);
  const navigate = useNavigate();
  const { tasksToDo, completedTasks } = useSelector((state: State) => state.tasks);
  const skills = useSelector((state: State) => state.skills.skills);
  const notes = useSelector((state: State) => state.notes.notes);
  const dispatch = useDispatch();

  const [showNoteForm, setShowNoteForm] = useState<boolean>(false);

  const allTasks = skills.flatMap(skill => skill.tasks);

  return (
    <FadeInWrapper>
      <GradientBackground>
        

        <View style={{ position: 'absolute', top: 60, right: 20, zIndex: 10, }}>
          <View style={{display: "flex", flexDirection: "row", gap: 10 }}>
            <Pressable onPress={() => navigate("/me")}>
              <PersonIcon />
            </Pressable>
            <Pressable onPress={() => navigate("/settings")}>
              <SettingsIcon />
            </Pressable>
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[style.padding, { paddingBottom: 120 }]}
          showsVerticalScrollIndicator={false}>
          
          <View style={style.container}>
            <Text style={style.heading}>
              <CheckboxIcon /> Quest list
            </Text>
            <Text/>
            {tasksToDo.length > 0 || completedTasks.length > 0
              ? <>
                  <FlatList
                    data={tasksToDo}
                    keyExtractor={task => task.name}
                    renderItem={({ item }) => <ToDoTask task={item} />}
                    scrollEnabled={false}
                  />
                  <FlatList
                    data={completedTasks}
                    keyExtractor={task => task.name}
                    renderItem={({ item }) => <ToDoTask task={item} completed />}
                    scrollEnabled={false}
                  />
                </>
              : <Text style={style.sub}>Nothing to do for now</Text>}
          </View>

          <View style={style.container}>
            <Text style={style.heading}>
              <PencilIcon /> Notes 
            </Text>
              {showNoteForm &&
                <>
                  <AddNoteForm
                    onSubmit={(title, content) => {
                      dispatch(
                        addNote({ title, content, creationDate: new Date() })
                      );
                      setShowNoteForm(false);
                    }}
                  />
                  <Pressable onPress={() => setShowNoteForm(false)}>
                    <Text style={style.sub}>cancel</Text>
                  </Pressable>
                </>}
              {notes.length > 0
                ? <FlatList
                    data={notes}
                    keyExtractor={note => note.title}
                    renderItem={({ item }) => <NoteView note={item} removable />}
                    scrollEnabled={false}
                  />
                : <Text style={style.sub}>No notes added</Text>}
              <Pressable onPress={() => setShowNoteForm(true)}>
                <Text style={style.raisedHighlight}>+</Text>
              </Pressable>
          </View>

          <View style={style.container}>
            <Text style={style.heading}>
              <InfoIcon /> Add quests
            </Text>
            <Text />
            <FlatList
              data={allTasks}
              keyExtractor={(task) => task.name}
              scrollEnabled={false}
              renderItem={({ item }) =>
                <TaskContainer task={item} assignable />}
            />
          </View>

          <View style={style.container}>
            <Text style={style.heading}>
              <UpArrowIcon /> Your skills:
            </Text>
            {skills.map(skill => 
              <SkillContainer key={skill.name} skill={skill} />)}
          </View>

          <StatsContainer />
          <TierContainer />

          <Text/>
        </ScrollView>

        {/* <Modal isVisible>
          { showNoteForm &&
            <AddNoteForm onSubmit={() => {}} />}
        </Modal> */}

        <BottomBar>
          <Pressable onPress={() => navigate("/addTask")}>
            <Text style={style.highlight}>Revise tasks</Text>
          </Pressable>
          <Pressable onPress={() => navigate("/addSkill")}>
            <Text style={style.highlight}>Revise skills</Text>
          </Pressable>
        </BottomBar>
      </GradientBackground>
    </FadeInWrapper>
  );
};

export default MainPage;