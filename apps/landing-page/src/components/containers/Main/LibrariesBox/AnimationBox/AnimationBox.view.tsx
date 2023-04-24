import React from 'react';

import Image from 'next/image';

import { concatClasses } from '@/utils/component';
import stylelintLogo from '@/images/stylelint.png';
import eslintLogo from '@/images/eslint.png';
import prettierLogo from '@/images/prettier.png';
import depcheckLogo from '@/images/depcheck.png';
import CardCarousel from './CardCarousel';

import classes from './AnimationBox.module.scss';

interface IProps {
	readonly isStylelintVisible: boolean;
	readonly isEslintVisible: boolean;
	readonly isPrettierVisible: boolean;
	readonly isDepcheckVisible: boolean;
	readonly onHighlightIcons: () => void;
}

const AnimationBoxView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const stylelintClass = props.isStylelintVisible
		? concatClasses(classes, 'library__img', 'library__img--fadeIn')
		: classes['library__img'];

	const stylelintUnderlineClass = props.isStylelintVisible
		? concatClasses(classes, 'library__underline', 'library__underline--visible')
		: classes['library__underline'];

	const eslintClass = props.isEslintVisible
		? concatClasses(classes, 'library__img', 'library__img--fadeIn')
		: classes['library__img'];

	const eslintUnderlineClass = props.isEslintVisible
		? concatClasses(classes, 'library__underline', 'library__underline--visible')
		: classes['library__underline'];

	const prettierClass = props.isPrettierVisible
		? concatClasses(classes, 'library__img', 'library__img--fadeIn')
		: classes['library__img'];

	const prettierUnderlineClass = props.isPrettierVisible
		? concatClasses(classes, 'library__underline', 'library__underline--visible')
		: classes['library__underline'];

	const depcheckClass = props.isDepcheckVisible
		? concatClasses(classes, 'library__img', 'library__img--fadeIn')
		: classes['library__img'];

	const depcheckUnderlineClass = props.isDepcheckVisible
		? concatClasses(classes, 'library__underline', 'library__underline--visible')
		: classes['library__underline'];

	return (
		<div className={classes['container']}>
			<div className={classes['leftSide']}>
				<div className={classes['library']}>
					<Image
						className={stylelintClass}
						src={stylelintLogo}
						alt="Stylelint logo"
						placeholder="blur"
					/>
					<hr className={stylelintUnderlineClass} />
				</div>
				<div className={classes['library']}>
					<Image className={eslintClass} src={eslintLogo} alt="Eslint logo" placeholder="blur" />
					<hr className={eslintUnderlineClass} />
				</div>
				<div className={classes['library']}>
					<Image
						className={prettierClass}
						src={prettierLogo}
						alt="Prettier logo"
						placeholder="blur"
					/>
					<hr className={prettierUnderlineClass} />
				</div>
				<div className={classes['library']}>
					<Image
						className={depcheckClass}
						src={depcheckLogo}
						alt="Depcheck logo"
						placeholder="blur"
					/>
					<hr className={depcheckUnderlineClass} />
				</div>
			</div>
			<div className={classes['rightSide']}>
				<CardCarousel onHighlightIcons={props.onHighlightIcons} />
			</div>
		</div>
	);
};

AnimationBoxView.displayName = 'AnimationBoxView';
AnimationBoxView.defaultProps = {};

export default React.memo(AnimationBoxView);
