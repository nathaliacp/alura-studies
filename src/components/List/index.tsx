import Item from "./Item";
import style from "./List.module.scss";

function List() {
	const tasks = [
		{
			name: "React",
			time: "02:00:00",
		},
		{
			name: "JavaScript",
			time: "01:00:00",
		},
		{
			name: "TypeScript",
			time: "03:00:00",
		},
	];

	return(
		<aside className={ style.tasksList }>
			<h2>Day Studies</h2>

			<ul>
				{
					tasks.map((task, index) => <Item key={ index } name={task.name} time={task.time}/>)
				}
			</ul>
		</aside>
	);

}

export default List;