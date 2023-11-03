import { type FC, type PropsWithChildren } from "react";

//good practise is add type before ReactNode

//import { type PropsWithChildren, type ReactNode } from "react";
// interface MyGoalsProps {
// 	title: string;
// 	children: ReactNode; // ReactNode for JSX elements
// }

type GoalProps = PropsWithChildren<{ title: string }>;

const Goal: FC<GoalProps> = ({ title, children }) => {
	//defined destruction and after colon defined types
	return (
		<article>
			<div>
				<h2>{title}</h2>
				{children}
			</div>
			<button>Delete</button>
		</article>
	);
};

export default Goal;

//SECOND APPROACH
// const MyGoal = ({ title, children }: MyGoalsProps) => {
// 	//defined destruction and after colon defined types
// 	return (
// 		<article>
// 			<div>
// 				<h2>{title}</h2>
// 				{children}
// 			</div>
// 			<button>Delete</button>
// 		</article>
// 	);
// };

// export default MyGoal;
