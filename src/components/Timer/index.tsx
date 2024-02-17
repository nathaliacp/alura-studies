import { useEffect, useState } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { ITask } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
	selected: ITask | undefined,
	completeTask: () => void
}

export default function Timer({ selected, completeTask }: Props) {
	const [ time, setTime ] = useState<number>();

	useEffect(() => {
		if (selected?.time) {
			setTime(timeToSeconds(selected.time));
		}
	}, [ selected ]);

	function returnTimer(counter: number = 0) {
		setTimeout(() => {
			if (counter > 0) {
				setTime(counter - 1);
				return returnTimer(counter - 1);
			}
			completeTask();
		}, 1000);
	}

	return(
		<div className={ style.timer }>
			<p className={ style.title }>Pick a card and start the timer</p>

			<div className={ style.clockWrapper }>
				<Clock time={ time }/>
			</div>

			<Button onClick={() => returnTimer(time)}>
				Start
			</Button>
		</div>
	);
}