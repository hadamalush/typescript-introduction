import MyGoal from "./components/MyGoals";
// import goalsImg from "./assets/goals.jpg";

export default function App() {
	return (
		<main>
			{/* <Header image={{ src: goalsImg, alt: "A list of goals" }}>
				<h1>Your Course Goals</h1>
			</Header> */}
			<MyGoal title='Go to the space'>
				<p>Meet an she-alien and get married</p>
			</MyGoal>
		</main>
	);
}
