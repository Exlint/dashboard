import React, { useState } from 'react';

import QuestionView from './Question.view';

interface IProps {
	readonly question: string;
	readonly answer: string;
	readonly isClickAble: boolean;
	readonly url?: string;
}

const Question: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isShowMoreClickedState, setIsShowMoreClickedState] = useState<boolean>(true);

	const onShowMoreButton = () => {
		setIsShowMoreClickedState(() => !isShowMoreClickedState);
	};

	const onNavigate = () => {
		window.open(props.url, '_blank');
	};

	return (
		<QuestionView
			isShowMoreClicked={isShowMoreClickedState}
			answer={props.answer}
			question={props.question}
			isClickAble={props.isClickAble}
			onNavigate={onNavigate}
			onShowMoreButton={onShowMoreButton}
		/>
	);
};

Question.displayName = 'Question';
Question.defaultProps = {};

export default React.memo(Question);
