import { ITask } from "../../../types/task";
import style from "./Item.module.scss";

interface Props extends ITask {
	selectTask: (selectedTask: ITask) => void    
}

export default function Item({ name, time, selected, completed, id, selectTask }: Props) {

	return(
		<li className={`${style.task} ${selected ? style.selectedTask : ""}`}
			onClick={()=> selectTask(
				{
					name,
					time,
					selected,
					completed,
					id
				}
			)}>
			<h3>{ name }</h3>
			<span>{ time }</span>
		</li>
	);
}
