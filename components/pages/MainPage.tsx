import { FC, useContext, useState } from "react";
import { FlatList, Pressable, ScrollView, Text, View } from "react-native";
import TaskContainer from "../atoms/TaskContainer";
import { useDispatch, useSelector } from "react-redux";
import { State } from "@/app/store";
import { useNavigate } from "react-router-native";
import SkillContainer from "../atoms/SkillContainer";
import BottomBar from "../BottomBar";
import ToDoTask from "../atoms/ToDoTask";
import StatsContainer from "../atoms/StatsContainer";
import Modal from "../atoms/Modal";
import TierContainer from "../atoms/TierContainer";
import GradientBackground from "../GradientBackground";
import FadeInWrapper from "../FadeInWrapper";
import ThemeContext from "@/app/context/ThemeContext";
import NoteView from "../atoms/Note";
import AddNoteForm from "../forms/AddNoteForm";
import { addNote } from "@/app/notesSlice";
import { assignTask, dismissOrCompleteTask } from "@/app/tasksSlice";
import { levelSkill, removeTask } from "@/app/skillsSlice";
import { addStats } from "@/app/tierSlice";
import Icon from "../icons";

const MainPage: FC = () => {
  const style = useContext(ThemeContext);
  const navigate = useNavigate();
  const { tasksToDo, completedTasks } = useSelector((state: State) => state.tasks);
  const skills = useSelector((state: State) => state.skills.skills);
  const notes = useSelector((state: State) => state.notes.notes);
  const tier = useSelector((state: State) => state.tier);
  const preferences = useSelector((state: State) => state.preferences);
  const dispatch = useDispatch();

  const [showNoteForm, setShowNoteForm] = useState<boolean>(false);

  const allTasks = skills.flatMap(skill => skill.tasks);

  return (
    <FadeInWrapper>
      <GradientBackground prefs={preferences}>

        <View style={{ position: 'absolute', top: 60, right: 20, zIndex: 10, }}>
          <View style={{display: "flex", flexDirection: "row", gap: 10 }}>
            <Pressable onPress={() => navigate("/me")}>
              <Icon.Person />
            </Pressable>
            <Pressable onPress={() => navigate("/settings")}>
              <Icon.Settings />
            </Pressable>
          </View>
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={[style.padding, { paddingBottom: 120 }]}
          showsVerticalScrollIndicator={false}>
          
          <View style={style.container}>
            <Text style={style.heading}>
              <Icon.Checkbox /> Quest list
            </Text>
            <Text/>
            {tasksToDo.length > 0 || completedTasks.length > 0
              ? <>
                  <FlatList
                    data={tasksToDo}
                    keyExtractor={task => task.name}
                    renderItem={({ item }) => 
                      <ToDoTask
                        style={style}
                        task={item}
                        onCompletion={(task) => {
                          dispatch(dismissOrCompleteTask({ task }));
                          dispatch(levelSkill({ skill: task.skill, xp: task.xp }));
                          dispatch(addStats({ taskCount: 1, xp: task.xp }));
                        }}
                      />
                    }
                    scrollEnabled={false}
                  />
                  <FlatList
                    data={completedTasks}
                    keyExtractor={task => task.name}
                    renderItem={({ item }) => 
                    <ToDoTask
                      style={style}
                      task={item}
                      completed
                    />}
                    scrollEnabled={false}
                  />
                </>
              : <Text style={style.sub}>Nothing to do for now</Text>}
          </View>

          <View style={style.container}>
            <Text style={style.heading}>
              <Icon.Pencil /> Notes 
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
              <Icon.Info /> Add quests
            </Text>
            <Text />
            <FlatList
              data={allTasks}
              keyExtractor={(task) => task.name}
              scrollEnabled={false}
              renderItem={({ item }) =>
                <TaskContainer
                  style={style}
                  task={item}
                  onAssign={(task) => dispatch(assignTask(task))}
                  onRemove={(task) => dispatch(removeTask({ skill: task.skill, task }))}
                />
              }
            />
          </View>

          <View style={style.container}>
            <Text style={style.heading}>
              <Icon.UpArrow /> Your skills:
            </Text>
            {skills.map(skill => 
              <SkillContainer key={skill.name} skill={skill} style={style} />)}
          </View>

          <StatsContainer style={style} skills={skills} />
          <TierContainer style={style} tier={tier} />

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