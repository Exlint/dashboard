import React from 'react';

import { concatClasses } from '@/utils/component';
import ELPSvg from '@/ui/ELPSvg';

import classes from './Question.module.scss';

interface IProps {
	readonly isShowMoreClicked: boolean;
	readonly question: string;
	readonly answer: string;
	readonly clickableText?: string;
	readonly link?: string;
	readonly onShowMoreButton: VoidFunction;
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
		'answer',
		props.isShowMoreClicked ? 'answer--reveal' : null,
	);

	return (
		<div className={classes['questionsContainer']}>
			<hr className={classes['questionsContainer__devidorLine']} />
			<div
				className={concatClasses(
					classes,
					'questionInner',
					props.isShowMoreClicked ? 'questionInner--active' : null,
				)}
			>
				<span className={classes['questionInner__question']}>{props.question}</span>
				<button
					className={classes['showMoreOrLessButton']}
					type="button"
					onClick={props.onShowMoreButton}
				>
					<ELPSvg className={plusIconClasses} name="showMore" />
				</button>
			</div>
			<p className={answerTextClasses}>
				{props.answer}
				{props.clickableText && props.link && (
					<a
						className={concatClasses(classes, 'answer', 'answer--link')}
						href={props.link}
						target="_blank"
					>
						{props.clickableText}
					</a>
				)}
			</p>
		</div>
	);
};

QuestionView.displayName = 'QuestionView';
QuestionView.defaultProps = {};

export default React.memo(QuestionView);
