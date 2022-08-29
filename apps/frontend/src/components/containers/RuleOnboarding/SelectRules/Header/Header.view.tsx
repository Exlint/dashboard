import React from 'react';
import { useTranslation } from 'react-i18next';

import EDSvg from '@/ui/EDSvg';
import EDSelect from '@/ui/EDSelect';

import tempLibraryuLogo from '@/images/google-brand-logo.png';

import classes from './Header.module.scss';

interface IProps {
	readonly rulesCatagories: string[];
	readonly libraryName: string;
	readonly libraryLogo: string;
	readonly selectedCatagoryIndex: number | null;
	readonly searchRuleInput: string | null;
	readonly onSearchRuleInput: (_: string) => void;
	readonly onSelectedCatagory: (index: number) => void;
	readonly onSelectAutofix: () => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();

	return (
		<div className={classes['header']}>
			<div className={classes['innerHeader']}>
				<div className={classes['titleContainer']}>
					<span className={classes['titleContainer__text']}>
						{t('ruleOnboarding.selectRules.header.ruleCreation')}
					</span>
					<span className={classes['titleContainer__text']}>
						{t('ruleOnboarding.selectRules.header.ruleCreation')}
					</span>
				</div>
				<div className={classes['libraryInformation']}>
					<img
						className={classes['libraryInformation__logo']}
						src={tempLibraryuLogo}
						alt="temp logo"
					/>
					<span className={classes['libraryInformation__name']}>{props.libraryName}</span>
				</div>

				<div className={classes['searchFiltersContainer']}>
					<div className={classes['searchRules']}>
						<EDSvg className={classes['searchRules__icon']} name="searchIcon" />
						<input
							className={classes['searchRules__input']}
							type="text"
							placeholder="Search Rules"
							onChange={({ currentTarget: { value } }) => props.onSearchRuleInput(value)}
						/>
					</div>
					<div className={classes['selectContainer']}>
						<EDSelect
							placeholder="Catagory"
							options={props.rulesCatagories}
							selectedOptionIndex={props.selectedCatagoryIndex}
							onOptionSelect={props.onSelectedCatagory}
						/>
					</div>

					<div className={classes['autoFixContainer']}>
						<input
							className={classes['autoFixContainer__checkbox']}
							type="checkbox"
							onClick={props.onSelectAutofix}
						/>
						<span className={classes['autoFixContainer__text']}>
							{t('ruleOnboarding.selectRules.header.autoFix')}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
