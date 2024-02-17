import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import style from "./App.module.scss";
import { ITask } from "../types/task";

function App() {
	const [tasks, setTasks] = useState<ITask[]>([]);
	const [selected, setSelected] = useState<ITask>();

	const selectTask = (selectedTask: ITask) => {
		setSelected(selectedTask);
		setTasks(tasks => tasks.map(task => (
			{...task, selected: task.id === selectedTask.id ? true : false }
		)));
	};

	return (
		<div className={ style.AppStyle }>
			<Form setTasks={ setTasks } />
			<List tasks={ tasks } selectTask={selectTask} />
			<Timer/>
		</div>
	);
}

export default App;
