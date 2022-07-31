import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';

import classes from './Header.module.scss';

interface IProps {
	readonly configurationType: string;
	readonly labelInput: string | null;
	readonly isEditFileFormat: boolean;
	readonly onEditFileFormatButton: () => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['header']}>
			<div className={classes['leftSideContainer']}>
				<span className={classes['leftSideContainer__text']}>{props.labelInput}</span>
				&nbsp;
				<span className={classes['leftSideContainer__text']}>
					{`${props.configurationType} ${t('codeBasedConfiguration.configurations')}`}
				</span>
			</div>
			<div className={classes['rightSideContainer']}>
				<button
					className={classes['editFileFormatButton']}
					type="button"
					onClick={props.onEditFileFormatButton}
				>
					<EDSvg
						className={classes['editFileFormatButton__icon']}
						name={props.isEditFileFormat ? 'unlock' : 'lock'}
					/>
				</button>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
