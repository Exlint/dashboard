/* eslint-disable indent */
import React, { useEffect, useState } from 'react';

import { libraries } from 'src/data/libraries';
import LintersOutputView from './LintersOutput.view';

interface IProps {
	readonly isStylintVisible: boolean;
	readonly isEslintVisible: boolean;
	readonly isPrettierVisible: boolean;
	readonly isDepcheckVisible: boolean;
}

const LintersOutput: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isFirstRowVisibleState, setIsFirstRowVisibleState] = useState<boolean>(false);
	const [isSecondRowVisibleState, setIsSecondRowVisibleState] = useState<boolean>(false);
	const [isThirdRowVisibleState, setIsThirdRowVisibleState] = useState<boolean>(false);
	const [isFourthRowVisibleState, setIsFourthRowVisibleState] = useState<boolean>(false);
	const [isFifthRowVisibleState, setIsFifthRowVisibleState] = useState<boolean>(false);
	const [isSixthRowVisibleState, setIsSixthRowVisibleState] = useState<boolean>(false);
	const [isSeventhRowVisibleState, setIsSeventhRowVisibleState] = useState<boolean>(false);

	const [firstRowState, setFirstRowState] = useState<string | undefined>('');
	const [secondRowState, setSecondRowState] = useState<string | undefined>('');
	const [thirdRowState, setThirdRowState] = useState<string | undefined>('');
	const [fourthRowState, setFourthRowState] = useState<string | undefined>('');
	const [fifthRowState, setFifthRowState] = useState<string | undefined>('');
	const [sixthRowState, setSixthRowState] = useState<string | undefined>('');
	const [seventhRowState, setSeventhRowState] = useState<string | undefined>('');

	const startTime = 3300;

	const rowsContent = {
		firstRow: [
			'--- Stylint output ---',
			'--- ESLint output ---',
			'--- Prettier output ---',
			'--- Depchecks output ---',
		],
		secondRow: [
			'format.css',
			'Users/inbarmatza/Exlint/test-cli/date.js',
			'Checking formatting...',
			'Unused dependencies',
		],
	};

	useEffect(() => {
		setFirstRowState(() =>
			props.isStylintVisible
				? rowsContent.firstRow[0]
				: props.isEslintVisible
				? rowsContent.firstRow[1]
				: props.isPrettierVisible
				? rowsContent.firstRow[2]
				: rowsContent.firstRow[3],
		);

		setSecondRowState(() =>
			props.isStylintVisible
				? rowsContent.secondRow[0]
				: props.isEslintVisible
				? rowsContent.secondRow[1]
				: props.isPrettierVisible
				? rowsContent.secondRow[2]
				: rowsContent.secondRow[3],
		);

		setThirdRowState(() =>
			props.isStylintVisible
				? libraries[0]
				: props.isEslintVisible
				? libraries[1]
				: props.isPrettierVisible
				? libraries[2]
				: libraries[3],
		);

		setFourthRowState(() => {
			if (props.isStylintVisible) {
				return libraries[0];
			} else if (props.isEslintVisible) {
				return libraries[1];
			} else if (props.isPrettierVisible) {
				return libraries[2];
			} else {
				return libraries[3];
			}
		});

		setFifthRowState(() =>
			props.isStylintVisible
				? libraries[0]
				: props.isEslintVisible
				? libraries[1]
				: props.isPrettierVisible
				? libraries[2]
				: libraries[3],
		);

		setSixthRowState(() =>
			props.isStylintVisible
				? libraries[0]
				: props.isEslintVisible
				? libraries[1]
				: props.isPrettierVisible
				? libraries[2]
				: libraries[3],
		);

		setSeventhRowState(() =>
			props.isStylintVisible
				? libraries[0]
				: props.isEslintVisible
				? libraries[1]
				: props.isPrettierVisible
				? libraries[2]
				: libraries[3],
		);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	useEffect(() => {
		setTimeout(() => {
			setIsFirstRowVisibleState(true);
		}, startTime);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	useEffect(() => {
		setTimeout(() => {
			setIsSecondRowVisibleState(true);
		}, startTime + 700);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	useEffect(() => {
		setTimeout(() => {
			setIsThirdRowVisibleState(true);
		}, startTime + 1500);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	useEffect(() => {
		setTimeout(() => {
			setIsFourthRowVisibleState(true);
		}, startTime + 1750);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	useEffect(() => {
		setTimeout(() => {
			setIsFifthRowVisibleState(true);
		}, startTime + 2000);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	useEffect(() => {
		setTimeout(() => {
			setIsSixthRowVisibleState(true);
		}, startTime + 2250);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	useEffect(() => {
		setTimeout(() => {
			setIsSeventhRowVisibleState(true);
		}, startTime + 3250);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	useEffect(() => {
		setTimeout(() => {
			setIsFirstRowVisibleState(false);
			setIsSecondRowVisibleState(false);
			setIsThirdRowVisibleState(false);
			setIsFourthRowVisibleState(false);
			setIsFifthRowVisibleState(false);
			setIsSixthRowVisibleState(false);
			setIsSeventhRowVisibleState(false);
		}, startTime + 6000);
	}, [props.isStylintVisible, props.isEslintVisible, props.isPrettierVisible, props.isDepcheckVisible]);

	return (
		<LintersOutputView
			firstRow={firstRowState}
			secondRow={secondRowState}
			thirdRow={thirdRowState}
			fourthRow={fourthRowState}
			fifthRow={fifthRowState}
			sixthRow={sixthRowState}
			seventhRow={seventhRowState}
			isFirstRowVisible={isFirstRowVisibleState}
			isSecondRowVisible={isSecondRowVisibleState}
			isThirdRowVisible={isThirdRowVisibleState}
			isFourthRowVisible={isFourthRowVisibleState}
			isFifthRowVisible={isFifthRowVisibleState}
			isSixthRowVisible={isSixthRowVisibleState}
			isSeventhRowVisible={isSeventhRowVisibleState}
		/>
	);
};

LintersOutput.displayName = 'LintersOutput';
LintersOutput.defaultProps = {};

export default React.memo(LintersOutput);
