import React from 'react';
import Switch from 'react-switch';

import { concatDiverseClasses } from '@/utils/component';

import classes from './EDBooleanButton.module.scss';

interface IProps {
	readonly className?: string;
	readonly checked: boolean | null;
	readonly onChange: (checked: boolean) => void;
}

const EDBooleanButtonView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const containerClasses = concatDiverseClasses(classes['container'], props.className);

	return (
		<Switch
			className={containerClasses}
			checked={props.checked ?? true}
			checkedIcon={false}
			uncheckedIcon={false}
			activeBoxShadow=""
			height={24.1}
			width={55}
			offColor="#f6f8fa"
			offHandleColor={props.checked === null ? '#f6f8fa' : '#727272'}
			onColor="#f6f8fa"
			onHandleColor={props.checked === null ? '#f6f8fa' : '#7a4df3'}
			onChange={(checked) => props.onChange(checked)}
		/>
	);
};

EDBooleanButtonView.displayName = 'EDBooleanButtonView';
EDBooleanButtonView.defaultProps = {};

export default React.memo(EDBooleanButtonView);
