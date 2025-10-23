import { FunctionComponent, SyntheticEvent, useState } from "react";

type AddTaskFormProps = {
  onSubmit: (e: SyntheticEvent) => void,
}

const AddTaskForm: FunctionComponent<AddTaskFormProps> = ({ onSubmit }) => {
  const [task, setTask] = useState<string>('');

  return (
    <form { ... onSubmit }>
      <input onChange={e => setTask(e.target.value)} />
      <button type='submit'>+</button>
    </form>
  )
};

export default AddTaskForm;