import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { faq } from 'src/data/faq';
import Question from './Question';

import classes from './Faq.module.scss';

interface IProps {}

const FaqView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['qustions']}>
			<div className={classes['qustionsInner']}>
				<h2 className={classes['qustionsInner__title']}>{t('main.questions.title')}</h2>
				<h2 className={classes['qustionsInner__title--mobile']}>
					<Trans i18nKey="main.questions.titleMobile" />
				</h2>
				{faq.map((question, index) => (
					<Question
						key={index}
						question={question.question}
						answer={question.answer}
						isClickAble={question.isClickable}
						url={question.url}
					/>
				))}
			</div>
		</div>
	);
};

FaqView.displayName = 'FaqView';
FaqView.defaultProps = {};

export default React.memo(FaqView);
