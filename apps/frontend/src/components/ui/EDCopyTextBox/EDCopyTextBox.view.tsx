import React from 'react';

import { concatDiverseClasses } from '@/utils/component';

import EDSvg from '../EDSvg';

import classes from './EDCopyTextBox.module.scss';

interface IProps {
	readonly className?: string;
	readonly value: string;
	readonly onCopyClick: VoidFunction;
}

const EDCopyTextBoxView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={concatDiverseClasses(classes['container'], props.className)}>
			<span className={classes['container__value']}>{props.value}</span>
			<EDSvg className={classes['container__icon']} name="copy" onClick={props.onCopyClick} />
		</div>
	);
};

EDCopyTextBoxView.displayName = 'EDCopyTextBoxView';
EDCopyTextBoxView.defaultProps = {};

export default React.memo(EDCopyTextBoxView);
