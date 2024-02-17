import { ITask } from "../../types/task";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
	tasks: ITask[],
	selectTask: (selectedTask: ITask) => void
}

function List({ tasks, selectTask }: Props) {

	return(
		<aside className={ style.tasksList }>
			<h2>Day Studies</h2>

			<ul>
				{
					tasks.map(task => 
						<Item key={ task.id } selectTask={selectTask} {...task}/>)
				}
			</ul>
		</aside>
	);

}

export default List;