import React from 'react';
import Switch from 'react-switch';

import styles from '@/styles/_variables.scss';
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
			offColor={styles['whites-ghost-white']}
			offHandleColor={
				props.checked === null ? styles['whites-ghost-white'] : styles['greys-philippine-gray']
			}
			onColor={styles['whites-ghost-white']}
			onHandleColor={props.checked === null ? styles['whites-ghost-white'] : styles['purples-purple']}
			onChange={(checked) => props.onChange(checked)}
		/>
	);
};

EDBooleanButtonView.displayName = 'EDBooleanButtonView';
EDBooleanButtonView.defaultProps = {};

export default React.memo(EDBooleanButtonView);
