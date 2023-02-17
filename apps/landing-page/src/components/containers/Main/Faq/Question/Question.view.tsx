import React from 'react';

import { concatClasses } from '@/utils/component';
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
	const plusIconClasses = concatClasses(
		classes,
		'showMoreOrLessButton__icon',
		props.isShowMoreClicked
			? 'showMoreOrLessButton__icon--rotate'
			: 'showMoreOrLessButton__icon--rotateBack',
	);

	const answerTextClasses = concatClasses(
		classes,
		'answerInner__answer',
		props.isShowMoreClicked ? 'answerInner__answer--reveal' : 'null',
	);

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
					<ELPSvg className={plusIconClasses} name="showMore" />
				</button>
			</div>
			<div className={classes['answerInner']}>
				<p className={answerTextClasses}>
					<br />
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
