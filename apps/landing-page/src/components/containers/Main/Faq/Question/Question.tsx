import React, { useState } from 'react';

import QuestionView from './Question.view';

interface IProps {
	readonly question: string;
	readonly answer: string;
	readonly clickableText?: string;
	readonly link?: string;
}

const Question: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isShowMoreClickedState, setIsShowMoreClickedState] = useState<boolean>(false);

	const onShowMoreButton = () => {
		setIsShowMoreClickedState((prev) => !prev);
	};

	return (
		<QuestionView
			isShowMoreClicked={isShowMoreClickedState}
			answer={props.answer}
			question={props.question}
			clickableText={props.clickableText}
			link={props.link}
			onShowMoreButton={onShowMoreButton}
		/>
	);
};

Question.displayName = 'Question';
Question.defaultProps = {};

export default React.memo(Question);
