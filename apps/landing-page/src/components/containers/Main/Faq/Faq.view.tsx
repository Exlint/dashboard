import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

import { faq } from '@/data/faq';

import Question from './Question';

import classes from './Faq.module.scss';

interface IProps {}

const FaqView: React.FC<IProps> = () => {
	const { t } = useTranslation();

	return (
		<div className={classes['questions']}>
			<div className={classes['questionsInner']}>
				<h2 className={classes['questionsInner__title']}>{t('main.questions.title')}</h2>
				<h2 className={classes['questionsInner__title--mobile']}>
					<Trans i18nKey="main.questions.titleMobile" />
				</h2>
				{faq.map((question, index) => (
					<Question
						key={index}
						question={question.question}
						answer={question.answer}
						clickableText={question.clickableText}
						link={question.link}
					/>
				))}
			</div>
		</div>
	);
};

FaqView.displayName = 'FaqView';
FaqView.defaultProps = {};

export default React.memo(FaqView);
