import React from 'react';

import Image from 'next/image';

import { concatClasses } from '@/utils/component';
import stylintLogo from '@/images/stylelint.png';
import eslintLogo from '@/images/eslint.png';
import prettierLogo from '@/images/prettier.png';
import depcheckLogo from '@/images/depcheck.png';
import CardCarousel from './CardCarousel';

import classes from './AnimationBox.module.scss';

interface IProps {
	readonly isStylintVisible: boolean;
	readonly isEslintVisible: boolean;
	readonly isPrettierVisible: boolean;
	readonly isDepcheckVisible: boolean;
	readonly onHighlightIcons: () => void;
}

const AnimationBoxView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const stylintClass = props.isStylintVisible
		? concatClasses(classes, 'library__img', 'library__img--fadeIn')
		: classes['library__img'];

	const stylintUnderlinClass = props.isStylintVisible
		? concatClasses(classes, 'library__underline', 'library__underline--visible')
		: classes['library__underline'];

	const eslintClass = props.isEslintVisible
		? concatClasses(classes, 'library__img', 'library__img--fadeIn')
		: classes['library__img'];

	const eslintUnderlinClass = props.isEslintVisible
		? concatClasses(classes, 'library__underline', 'library__underline--visible')
		: classes['library__underline'];

	const prettierClass = props.isPrettierVisible
		? concatClasses(classes, 'library__img', 'library__img--fadeIn')
		: classes['library__img'];

	const prettierUnderlinClass = props.isPrettierVisible
		? concatClasses(classes, 'library__underline', 'library__underline--visible')
		: classes['library__underline'];

	const depcheckClass = props.isDepcheckVisible
		? concatClasses(classes, 'library__img', 'library__img--fadeIn')
		: classes['library__img'];

	const depcheckUnderlinClass = props.isDepcheckVisible
		? concatClasses(classes, 'library__underline', 'library__underline--visible')
		: classes['library__underline'];

	return (
		<div className={classes['container']}>
			<div className={classes['leftSide']}>
				<div className={classes['library']}>
					<Image className={stylintClass} src={stylintLogo} alt="Stylint logo" placeholder="blur" />
					<hr className={stylintUnderlinClass} />
				</div>
				<div className={classes['library']}>
					<Image className={eslintClass} src={eslintLogo} alt="Eslint logo" placeholder="blur" />
					<hr className={eslintUnderlinClass} />
				</div>
				<div className={classes['library']}>
					<Image
						className={prettierClass}
						src={prettierLogo}
						alt="Prettier logo"
						placeholder="blur"
					/>
					<hr className={prettierUnderlinClass} />
				</div>
				<div className={classes['library']}>
					<Image
						className={depcheckClass}
						src={depcheckLogo}
						alt="Depchek logo"
						placeholder="blur"
					/>
					<hr className={depcheckUnderlinClass} />
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
