import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";
class Form extends React.Component {

	render(): React.ReactNode {
		return(
			<form className={ style.newTask }>
				<div className={ style.inputContainer }>
					<label htmlFor="task">
						Add a new topic to study
					</label>

					<input 
						id="task" 
						type="text" 
						name="task" 
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
						step="1" 
						min="00:00:00" 
						max="01:30:00" />
				</div>

				<Button>
					Add
				</Button>
			</form>
		);
	}
}

export default Form;