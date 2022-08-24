import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import { concatClasses } from '@/utils/component';

import classes from './PolicySidebarTooltip.module.scss';

interface IProps {
	readonly tooltipRef: React.RefObject<HTMLDivElement>;
	readonly onOpenModal: () => void;
}

const PolicySidebarTooltipView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['tooltip']} ref={props.tooltipRef}>
			<button className={classes['innerWrapper']} type="button">
				<span
					className={concatClasses(classes, 'innerWrapper__text', 'innerWrapper__text--editText')}
				>
					{t('policySidebar.policySidebarTooltip.renamePolicy')}
				</span>
				<EDSvg
					className={concatClasses(classes, 'innerWrapper__icon', 'innerWrapper__icon--editIcon')}
					name="editGroup"
				/>
			</button>
			<button className={classes['innerWrapper']} type="button" onClick={props.onOpenModal}>
				<span
					className={concatClasses(classes, 'innerWrapper__text', 'innerWrapper__text--deleteText')}
				>
					{t('policySidebar.policySidebarTooltip.deletePolicy')}
				</span>
				<EDSvg
					className={concatClasses(classes, 'innerWrapper__icon', 'innerWrapper__icon--deleteIcon')}
					name="deleteGroup"
				/>
			</button>
		</div>
	);
};

PolicySidebarTooltipView.displayName = 'PolicySidebarTooltipView';
PolicySidebarTooltipView.defaultProps = {};

export default React.memo(PolicySidebarTooltipView);
