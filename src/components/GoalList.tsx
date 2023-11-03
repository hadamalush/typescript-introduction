import { FC } from "react";
import Goal from "./Goal";
import { type Goal as TGoal } from "../App";

//importing a type from app ,so now we can add additional types in one file.
type GoalListProps = {
	goals: TGoal[]; // we have to add []
	onDeleteGoal: (id: number) => void;
};

const GoalList: FC<GoalListProps> = ({ goals, onDeleteGoal }) => {
	console.log(goals);
	return (
		<ul>
			{goals.map(goal => (
				<li>
					<Goal
						key={goal.id}
						id={goal.id}
						title={goal.title}
						onDelete={onDeleteGoal}>
						{goal.description}
					</Goal>
				</li>
			))}
		</ul>
	);
};

export default GoalList;
