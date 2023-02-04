import React from 'react';

import ELPSvg from '@/ui/ELPSvg';

import classes from './Question.module.scss';

interface IProps {
	readonly isShowMoreClicked: boolean;
	readonly onShowMoreButton: () => void;
	readonly question: string;
	readonly answer: string;
	readonly clickableText?: string;
	readonly link?: string;
}

const QuestionView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let showMoreOrLessButton: JSX.Element | undefined;

	if (props.isShowMoreClicked) {
		showMoreOrLessButton = <ELPSvg className={classes['showMoreOrLessButton__icon']} name="showMore" />;
	} else {
		showMoreOrLessButton = <ELPSvg className={classes['showMoreOrLessButton__icon']} name="showLess" />;
	}

	return (
		<div className={classes['questionsContainer']}>
			<hr className={classes['questionsContainer__devidorLine']} />
			<div className={classes['questionInner']}>
				<span className={classes['questionInner__question']}>{props.question}</span>
				<button
					className={classes['showMoreOrLessButton']}
					type="button"
					onClick={props.onShowMoreButton}
				>
					{showMoreOrLessButton}
				</button>
			</div>
			<div className={classes['answerInner']}>
				<p
					className={classes['answerInner__answer']}
					style={{ display: props.isShowMoreClicked ? 'none' : 'block' }}
				>
					{props.answer}
					{props.clickableText && props.link && (
						<a className={classes['answerInner__answer--link']} href={props.link} target="_blank">
							{props.clickableText}
						</a>
					)}
				</p>
			</div>
		</div>
	);
};

QuestionView.displayName = 'QuestionView';
QuestionView.defaultProps = {};

export default React.memo(QuestionView);
