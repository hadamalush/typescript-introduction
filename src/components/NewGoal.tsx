import { useRef, type FC, type FormEvent } from "react";

type NewGoalProps = {
	onAddGoal: (goal: string, description: string) => void;
};

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
	//add generic type between angle brackets
	const goal = useRef<HTMLInputElement>(null);
	const description = useRef<HTMLInputElement>(null);

	//for the event, add FormEvent type
	// function handleSubmit(e: FormEvent) {
	// 	e.preventDefault();
	// }

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// new FormData(e.currentTarget);

		//add !. to say typescirpt that goal.current never be null
		const enteredGoal = goal.current!.value;
		const enteredDesc = description.current!.value;

		//reset current inputs
		e.currentTarget.reset();

		onAddGoal(enteredGoal, enteredDesc);
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<p>
				<label htmlFor='goal'>Your goal</label>
				<input id='goal' name='goal' ref={goal} />
			</p>
			<p>
				<label htmlFor='description'>Description</label>
				<input id='description' ref={description} />
			</p>
			<div>
				<button>Add goal</button>
			</div>
		</form>
	);
};

export default NewGoal;
