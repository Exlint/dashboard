import React from 'react';

// import { Trans, useTranslation } from 'react-i18next';
import VSvg from '@/ui/VSvg';
import SelectFromOptions from '@/ui/SelectFromOptions';
import { ILibrary } from '@/interfaces/library';
import { rulesCatagories } from '@/data/rulesCatagories';

import tempLogo from '../../../../../../../../../../../assets/images/brandLogo.png';

import classes from './Header.module.scss';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedCatagoryIndex: number | null;
	readonly isCatagoryClicked: boolean;
	readonly onSelectCatagoryButton: () => void;
	readonly onSelectedCatagory: (index: number) => void;
}

const HeaderView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	// const { t } = useTranslation();

	return (
		<div className={classes['header']}>
			<div className={classes['innerHeader']}>
				<div className={classes['titleContainer']}>
					<span className={classes['titleContainer__text']}>{props.policyLabelInput}</span>
					<span className={classes['titleContainer__text']}>Rule Creation</span>
				</div>
				<div className={classes['libraryInformation']}>
					<img className={classes['libraryInformation__logo']} src={tempLogo} alt="temp logo" />
					<span className={classes['libraryInformation__name']}>
						{props.selectedLibrary?.title}
					</span>
				</div>

				<div className={classes['searchFiltersContainer']}>
					<div className={classes['searchRules']}>
						<VSvg className={classes['searchRules__icon']} name="searchIcon" />
						<input
							className={classes['searchRules__input']}
							type="text"
							placeholder="Search Rules"
						/>
					</div>
					<SelectFromOptions
						defaultValue="Catagory"
						componentWidth="170px"
						border="2px solid #E7E7E7"
						selectedOptionIndex={props.selectedCatagoryIndex}
						isShowMoreClicked={props.isCatagoryClicked}
						optionsList={rulesCatagories}
						onSelectOptionsButton={props.onSelectCatagoryButton}
						onSelectedOption={props.onSelectedCatagory}
					/>
					<div className={classes['autoFixContainer']}>
						<input className={classes['autoFixContainer__checkbox']} type="checkbox" />
						<span className={classes['autoFixContainer__text']}>Autofix</span>
					</div>
				</div>
			</div>
		</div>
	);
};

HeaderView.displayName = 'HeaderView';
HeaderView.defaultProps = {};

export default React.memo(HeaderView);
