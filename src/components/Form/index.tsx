import React, { useState } from "react";
import { v4 as uuidv4} from "uuid";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";

interface Props { 
	setTasks: React.Dispatch<React.SetStateAction<ITask[]> >
} 

function Form({ setTasks }: Props) {

	const [ name, setName ] = useState(""); 
	const [ time, setTime ] = useState("00:00");

	const addTask = () => {
		setTasks(tasks => 
			[	...tasks, 
				{	
					name,
					time,
					selected: false,
					completed: false,
					id: uuidv4()
				}
			]);

		setName("");
		setTime("00:00");
	};

	return(
		<form className={ style.newTask } onSubmit={() => addTask()}>
			<div className={ style.inputContainer }>
				<label htmlFor="task">
						Add a new topic to study
				</label>

				<input 
					id="task" 
					type="text" 
					name="task" 
					value={name}
					onChange={(e) => this.setName(e.target.value)}
					required 
					placeholder="What do you want to study?" />
			</div>

			<div className={ style.inputContainer }>
				<label htmlFor="time">
						Time
				</label>

				<input 
					id="time" 
					type="time" 
					name="time" 
					value={time}
					onChange={(e) => this.setTime(e.target.value)}
					step="1" 
					min="00:00:00" 
					max="01:30:00" />
			</div>

			<Button type="submit">
					Add
			</Button>
		</form>
	);
}

export default Form;