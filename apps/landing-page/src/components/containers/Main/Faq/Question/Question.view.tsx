import React from 'react';
import { useTranslation } from 'react-i18next';

import ELPSvg from '@/ui/ELPSvg';

import classes from './Question.module.scss';

interface IProps {
	readonly isShowMoreClicked: boolean;
	readonly onShowMoreButton: () => void;
	readonly question: string;
	readonly answer: string;
	readonly isClickAble: boolean;
	readonly onNavigate: () => void;
}

const QuestionView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

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
				<span
					className={classes['answerInner__answer']}
					style={{ display: props.isShowMoreClicked ? 'none' : 'block' }}
				>
					{props.answer}
				</span>
				{props.isClickAble && (
					<button
						type="button"
						className={classes['answerInner__button']}
						style={{ display: props.isShowMoreClicked ? 'none' : 'block' }}
						onClick={props.onNavigate}
					>
						{t('main.questions.here')}
					</button>
				)}
			</div>
		</div>
	);
};

QuestionView.displayName = 'QuestionView';
QuestionView.defaultProps = {};

export default React.memo(QuestionView);
