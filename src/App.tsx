import { useState } from "react";

import Goal from "./components/Goal";
import goalsImg from "./assets/goals.jpg";
import Header from "./components/Header";
import GoalList from "./components/GoalList";

export type Goal = {
	title: string;
	description: string;
	id: number;
};

export default function App() {
	//if we initial string for example ,goals will be type string ,but for more complex types like arrays we have to definig type before

	const [goals, setGoals] = useState<Goal[]>([]);

	const handleAddGoal = () => {
		setGoals(prevGoals => {
			const newGoal: Goal = {
				id: Math.random(),
				title: "My trips to the cosmos",
				description: "Learn it in depth!",
			};

			return [...prevGoals, newGoal];
		});
	};

	return (
		<main>
			<Header image={{ src: goalsImg, alt: "A list of goals" }}>
				<h1>Your Course Goals</h1>
				<button onClick={handleAddGoal}>Add Goal</button>
				<GoalList goals={goals} />
			</Header>
		</main>
	);
}
