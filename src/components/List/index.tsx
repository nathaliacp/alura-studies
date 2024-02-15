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
		<aside>
			<h2>Day Studies</h2>

			<ul>
				{
					tasks.map((task, index) => (
						<li key={ index }>
							<h3>{ task.name }</h3>
							<span>{ task.time }</span>
						</li>
					))
				}
			</ul>
		</aside>
	);

}

export default List;