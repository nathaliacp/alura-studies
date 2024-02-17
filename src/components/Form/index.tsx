import React from "react";
import { v4 as uuidv4} from "uuid";
import { ITask } from "../../types/task";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component<{
	setTasks: React.Dispatch<React.SetStateAction<ITask[]> >
}> {

	state = {
		name: "",
		time: "00:00"
	};

	addTask(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		this.props.setTasks(tasks => 
			[	...tasks, 
				{...this.state,
					selected: false,
					completed: false,
					id: uuidv4()
				}
			]);

		this.setState({
			name: "",
			time: "00:00"
		});
	}

	render(): React.ReactNode {
		return(
			<form className={ style.newTask } onSubmit={(e) => this.addTask(e)}>
				<div className={ style.inputContainer }>
					<label htmlFor="task">
						Add a new topic to study
					</label>

					<input 
						id="task" 
						type="text" 
						name="task" 
						value={this.state.name}
						onChange={(e) => this.setState({...this.state, name: e.target.value })}
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
						value={this.state.time}
						onChange={(e) => this.setState({...this.state, time: e.target.value })}
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
}

export default Form;