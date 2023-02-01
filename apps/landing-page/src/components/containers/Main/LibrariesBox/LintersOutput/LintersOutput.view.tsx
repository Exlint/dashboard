/* eslint-disable max-lines */
import React from 'react';

import { libraries } from 'src/data/libraries';
import ELPSvg from '@/ui/ELPSvg';
import { concatClasses } from '@/utils/component';
import classes from './LintersOutput.module.scss';

interface IProps {
	readonly firstRow: string | undefined;
	readonly secondRow: string | undefined;
	readonly thirdRow: string | undefined;
	readonly fourthRow: string | undefined;
	readonly fifthRow: string | undefined;
	readonly sixthRow: string | undefined;
	readonly seventhRow: string | undefined;

	readonly isFirstRowVisible: boolean;
	readonly isSecondRowVisible: boolean;
	readonly isThirdRowVisible: boolean;
	readonly isFourthRowVisible: boolean;
	readonly isFifthRowVisible: boolean;
	readonly isSixthRowVisible: boolean;
	readonly isSeventhRowVisible: boolean;
}

const LintersOutputView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const thirdRow =
		props.thirdRow === libraries[0] ? (
			<div className={classes['rowsContainerWithoutMargin']}>
				<div className={classes['rowContainer']}>
					<span
						className={concatClasses(
							classes,
							'textContainer__text',
							'rowContainer__gray',
							'rowContainer__marginLeft',
						)}
					>
						2:20
					</span>
					<ELPSvg className={classes['rowContainer__icon']} name="showLess" />
					<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
						Unexpected named color "black"
					</span>
				</div>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__gray')}>
					color-named
				</span>
			</div>
		) : props.thirdRow === libraries[1] ? (
			<div className={classes['rowsContainer']}>
				<div className={classes['rowContainer']}>
					<span
						className={concatClasses(
							classes,
							'textContainer__text',
							'rowContainer__gray',
							'rowContainer__marginLeft',
						)}
					>
						6:1
					</span>
					<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__red')}>
						error
					</span>
					<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
						Expected indentation of 0 tabs
					</span>
				</div>
				<div className={classes['rowContainer']}>
					<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
						but found 1
					</span>
					<span
						className={concatClasses(
							classes,
							'textContainer__text',
							'rowContainer__gray',
							'rowContainer__marginLeft',
						)}
					>
						ident
					</span>
				</div>
			</div>
		) : props.thirdRow === libraries[2] ? (
			<div className={classes['rowContainer']}>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
					[
				</span>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__yellow')}>
					warn
				</span>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
					]
				</span>
				<span
					className={concatClasses(
						classes,
						'textContainer__text',
						'rowContainer__white',
						'rowContainer__marginLeft',
					)}
				>
					date.js
				</span>
			</div>
		) : (
			<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
				* lodash
			</span>
		);

	const fourthRow =
		props.fourthRow === libraries[0] ? (
			<div className={classes['rowsContainerWithoutMargin']}>
				<div className={classes['rowContainer']}>
					<span
						className={concatClasses(
							classes,
							'textContainer__text',
							'rowContainer__gray',
							'rowContainer__marginLeft',
						)}
					>
						12:9
					</span>
					<ELPSvg className={classes['rowContainer__icon']} name="showLess" />
					<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
						Unexpected named color "white"
					</span>
				</div>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__gray')}>
					color-named
				</span>
			</div>
		) : props.fourthRow === libraries[1] ? null : props.fourthRow === libraries[2] ? (
			<div className={classes['rowContainer']}>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
					[
				</span>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__yellow')}>
					warn
				</span>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
					]
				</span>
				<span
					className={concatClasses(
						classes,
						'textContainer__text',
						'rowContainer__white',
						'rowContainer__marginLeft',
					)}
				>
					package-lock.json
				</span>
			</div>
		) : null;

	const fifthRow =
		props.fourthRow === libraries[0] ? (
			<div className={classes['rowsContainerWithoutMargin']}>
				<div className={classes['rowContainer']}>
					<span
						className={concatClasses(
							classes,
							'textContainer__text',
							'rowContainer__gray',
							'rowContainer__marginLeft',
						)}
					>
						13:9
					</span>
					<ELPSvg className={classes['rowContainer__icon']} name="showLess" />
					<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
						Unexpected named color "black"
					</span>
				</div>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__gray')}>
					color-named
				</span>
			</div>
		) : props.fourthRow === libraries[1] ? null : props.fourthRow === libraries[2] ? (
			<div className={classes['rowContainer']}>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
					[
				</span>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__yellow')}>
					warn
				</span>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
					]
				</span>
				<span
					className={concatClasses(
						classes,
						'textContainer__text',
						'rowContainer__white',
						'rowContainer__marginLeft',
					)}
				>
					package.json
				</span>
			</div>
		) : null;

	const sixthRow =
		props.fourthRow === libraries[2] ? (
			<div className={classes['rowContainer']}>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
					[
				</span>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__yellow')}>
					warn
				</span>
				<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white')}>
					]
				</span>
				<span
					className={concatClasses(
						classes,
						'textContainer__text',
						'rowContainer__white',
						'rowContainer__marginLeft',
					)}
				>
					Code style issues found in 3 files.
				</span>
			</div>
		) : null;

	const seventhRow =
		props.fourthRow === libraries[0] ? (
			<span className={concatClasses(classes, 'textContainer__text', 'rowContainer__white', 'lastRow')}>
				4 problems (4 errors, 0 warnings)
			</span>
		) : props.fourthRow === libraries[1] ? null : props.fourthRow === libraries[2] ? (
			<span
				className={concatClasses(
					classes,
					'textContainer__text',
					'rowContainer__white',
					'rowContainer__marginLeft',
					'lastRow',
				)}
			>
				Forgot to run Prettier?
			</span>
		) : null;

	return (
		<div className={classes['textContainer']}>
			{props.isFirstRowVisible && (
				<span className={concatClasses(classes, 'textContainer__text', 'textContainer__firstRow')}>
					{props.firstRow}
				</span>
			)}
			{props.isSecondRowVisible && (
				<span className={concatClasses(classes, 'textContainer__text', 'textContainer__secondRow')}>
					{props.secondRow}
				</span>
			)}
			{props.isThirdRowVisible && thirdRow}

			{props.isFourthRowVisible && fourthRow}

			{props.isFifthRowVisible && fifthRow}

			{props.isSixthRowVisible && sixthRow}

			{props.isSeventhRowVisible && seventhRow}
		</div>
	);
};

LintersOutputView.displayName = 'LintersOutputView';
LintersOutputView.defaultProps = {};

export default React.memo(LintersOutputView);
