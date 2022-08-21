import React from 'react';

import EDSvg from '@/ui/EDSvg';
import type { ILibraryRule } from '@/interfaces/libraries';

import classes from './Header.module.scss';

interface IProps {
	readonly selectedRule: ILibraryRule | null;
	readonly onAddRuleToList: () => void;
	readonly onUpdateRule: () => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedRules: ILibraryRule[] = [];

	return (
		<div className={classes['header']}>
			<span className={classes['header__title']}>Rule Configuration</span>
			<div className={classes['addRuleButton']}>
				{selectedRules.includes(props.selectedRule!) ? (
					<button
						className={classes['buttonContainer']}
						type="button"
						onClick={props.onAddRuleToList}
					>
						<EDSvg className={classes['buttonContainer__updateIcon']} name="updateRule" />
					</button>
				) : (
					<button className={classes['buttonContainer']} type="button" onClick={props.onUpdateRule}>
						<EDSvg className={classes['buttonContainer__addIcon']} name="addRuleButtonPurple" />
					</button>
				)}

				<span className={classes['addRuleButton__text']}>
					{selectedRules.includes(props.selectedRule!) ? 'Update Rule' : 'Add Rule'}
				</span>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
