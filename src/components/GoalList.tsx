import { FC } from "react";
import Goal from "./Goal";
import { type Goal as TGoal } from "../App";

//importing a type from app ,so now we can add additional types in one file.
type GoalListProps = {
	goals: TGoal[]; // we have to add []
};

const GoalList: FC<GoalListProps> = ({ goals }) => {
	console.log(goals);
	return (
		<ul>
			{goals.map(goal => (
				<li>
					<Goal key={goal.id} title={goal.title}>
						{goal.description}
					</Goal>
				</li>
			))}
		</ul>
	);
};

export default GoalList;
