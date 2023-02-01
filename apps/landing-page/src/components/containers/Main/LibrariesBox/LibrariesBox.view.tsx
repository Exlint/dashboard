import React from 'react';
import Image from 'next/image';

import ELPSvg from '@/ui/ELPSvg';
import blurBackground from '@/images/carousel-bg.png';
import { concatClasses } from '@/utils/component';
import AnimationBox from './AnimationBox';

import classes from './LibrariesBox.module.scss';
import LintersOutput from './LintersOutput';

interface IProps {
	readonly isStylintVisible: boolean;
	readonly isEslintVisible: boolean;
	readonly isPrettierVisible: boolean;
	readonly isDepcheckVisible: boolean;
	readonly onHighlightIcons: () => void;
}

const LibrariesBoxView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	let cmdClass;
	let codeClass;

	if (props.isStylintVisible) {
		cmdClass = concatClasses(classes, 'cmd', 'moveLeft');
		codeClass = concatClasses(classes, 'code', 'code--visible');
	}

	if (props.isEslintVisible) {
		cmdClass = concatClasses(classes, 'cmd', 'positionLeft');
		codeClass = concatClasses(classes, 'code', 'code--visible');
	}

	if (props.isPrettierVisible) {
		cmdClass = concatClasses(classes, 'cmd', 'returnMiddle');
		codeClass = concatClasses(classes, 'code', 'code--invisible');
	}

	if (props.isDepcheckVisible) {
		cmdClass = concatClasses(classes, 'cmd', 'positionMiddle');
		codeClass = concatClasses(classes, 'code', 'code--invisible');
	}

	return (
		<section className={classes['container']}>
			<div className={classes['backgroundContainer']}>
				<Image
					className={classes['backgroundContainer__img']}
					src={blurBackground}
					alt="Blue background"
					placeholder="blur"
				/>
			</div>
			<AnimationBox
				isStylintVisible={props.isStylintVisible}
				isEslintVisible={props.isEslintVisible}
				isPrettierVisible={props.isPrettierVisible}
				isDepcheckVisible={props.isDepcheckVisible}
				onHighlightIcons={props.onHighlightIcons}
			/>
			<div className={classes['innerFirstLine']}>
				{props.isPrettierVisible || props.isDepcheckVisible ? (
					<span className={classes['innerFirstLine__star']} />
				) : props.isStylintVisible ? (
					<>
						<span className={classes['innerFirstLine__firstVerticalStarBreakLine']} />

						<span className={classes['innerFirstLine__firstHorizontalStarBreakLine']} />
					</>
				) : (
					<>
						<span className={classes['innerFirstLine__secondVerticalStarBreakLine']} />

						<span className={classes['innerFirstLine__secondHorizontalStarBreakLine']} />
					</>
				)}
				<span className={classes['lineDot']} />
				<hr className={classes['innerLine']} />
				<span className={classes['lineDot']} />
			</div>
			<div className={classes['exlintRun']}>
				<span className={classes['exlintRun__text']}>$ exlint run</span>
			</div>

			{props.isPrettierVisible || props.isDepcheckVisible ? (
				<div className={classes['innerSecondLine']}>
					<span className={classes['lineDot']} />
					<hr className={classes['innerLine']} />
					<span className={classes['lineDot']} />
				</div>
			) : (
				<div className={classes['brokeLineContainer']}>
					<div className={classes['innerBrokeLine']}>
						<span className={classes['innerBrokeLine__firstLineDot']} />
						<hr
							className={concatClasses(
								classes,
								'innerBrokeLine__vertical',
								'innerBrokeLine__vertical--right',
							)}
						/>
						<hr className={classes['innerBrokeLine__horizontal']} />
						<hr
							className={concatClasses(
								classes,
								'innerBrokeLine__vertical',
								'innerBrokeLine__vertical--left',
							)}
						/>
						<span className={classes['innerBrokeLine__secondLineDot']} />
					</div>
				</div>
			)}

			<div className={cmdClass}>
				<LintersOutput
					isStylintVisible={props.isStylintVisible}
					isEslintVisible={props.isEslintVisible}
					isPrettierVisible={props.isPrettierVisible}
					isDepcheckVisible={props.isDepcheckVisible}
				/>
			</div>

			<div className={codeClass} style={{ zIndex: '10' }}>
				<div className={classes['innerCode']}>
					<ELPSvg className={classes['innerCode__lines']} name="linesNumber" />
					{props.isStylintVisible && (
						<ELPSvg className={classes['innerCode__stylint']} name="stylintCodeError" />
					)}
					{props.isEslintVisible && (
						<ELPSvg className={classes['innerCode__eslint']} name="eslintCodeError" />
					)}
				</div>
			</div>
		</section>
	);
};

LibrariesBoxView.displayName = 'LibrariesBoxView';
LibrariesBoxView.defaultProps = {};

export default React.memo(LibrariesBoxView);
