import React from 'react';

import type { IConfigurationValue } from '@exlint-dashboard/common/dist/interfaces/libraries-data';
import EDConfigurationHeaderAndDescription from '@/ui/EDConfigurationHeaderAndDescription';
import EDSvg from '@/ui/EDSvg';
import EDConfigurationsInputs from '@/ui/EDConfigurationsInputs';
import { concatClasses } from '@/utils/component';

import classes from './EDMultiConfiguration.module.scss';

interface IProps {
	readonly title: string | null;
	readonly description: string | null;
	readonly configuration: Record<string, IConfigurationValue> | null;
	readonly isNestedBodyVisible: boolean;
	readonly onToggleNestedBody: () => void;
	readonly onChangeFormConfiguration: (_: string, __: unknown) => void;
}

const EDMultiConfigurationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const arrowIcon = props.isNestedBodyVisible
		? concatClasses(classes, 'innerIcon__icon', 'innerIcon__icon--rotate')
		: classes['innerIcon__icon'];

	return (
		<div className={classes['container']}>
			<div className={classes['innerHeader']}>
				<div className={classes['innerHeader__header']}>
					<EDConfigurationHeaderAndDescription
						title={props.title}
						description={props.description}
					/>
				</div>
				<button className={classes['innerIcon']} type="button" onClick={props.onToggleNestedBody}>
					<EDSvg className={arrowIcon} name="arrowRight" />
				</button>
			</div>

			{props.isNestedBodyVisible && (
				<div className={classes['container__body']}>
					<EDConfigurationsInputs
						formSchema={props.configuration}
						isNestedBodyVisible={props.isNestedBodyVisible}
						onChangeFormConfiguration={props.onChangeFormConfiguration}
						onToggleNestedBody={props.onToggleNestedBody}
					/>
				</div>
			)}

			<hr className={classes['container__divider']} />
		</div>
	);
};

EDMultiConfigurationView.displayName = 'EDMultiConfigurationView';
EDMultiConfigurationView.defaultProps = {};

export default React.memo(EDMultiConfigurationView);
