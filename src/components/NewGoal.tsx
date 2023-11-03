import { type FormEvent } from "react";

const NewGoal = () => {
	//for the event, add FormEvent type
	// function handleSubmit(e: FormEvent) {
	// 	e.preventDefault();
	// }

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={e => handleSubmit(e)}>
			<p>
				<label htmlFor='goal'>Your goal</label>
				<input id='goal' />
			</p>
			<p>
				<label htmlFor='description'>Description</label>
				<input id='description' />
			</p>
			<div>
				<button>Add goal</button>
			</div>
		</form>
	);
};

export default NewGoal;
