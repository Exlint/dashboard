import React from 'react';

import { librariesList } from '@/data/librariesList';
import { ILibrary } from '@/interfaces/library';
import { rulesCatagories } from '@/data/rulesCatagories';
import classes from './RulesList.module.scss';

import Rule from './Rule';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly selectedRuleIndex: number | null;
	readonly selectedRulesIndexes: number[];
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectedRuleIndex: (index: number) => void;
}

const RulesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const rulesObject = librariesList['ESLint'].rulesList;

	return (
		<div className={classes['rulesList']}>
			{Object.keys(rulesObject).map((ruleName, index) => {
				if (!props.selectedRulesIndexes.includes(index)) {
					let ruleCatagory;
					let catagoryFilter;

					if (index < 57) {
						ruleCatagory = rulesCatagories[0]!;
					} else if (index < 202) {
						ruleCatagory = rulesCatagories[1]!;
					} else {
						ruleCatagory = rulesCatagories[2]!;
					}

					if (props.selectedCatagoryIndex !== null) {
						catagoryFilter = rulesCatagories[props.selectedCatagoryIndex];

						if (catagoryFilter === ruleCatagory) {
							return (
								<div key={index}>
									<Rule
										key={index}
										index={index}
										ruleName={ruleName}
										ruleDescription={rulesObject[ruleName as keyof typeof rulesObject]}
										ruleCatagory={ruleCatagory}
										selectedRuleIndex={props.selectedRuleIndex}
										onSelectedRuleIndex={props.onSelectedRuleIndex}
									/>
								</div>
							);
						}
					} else {
						return (
							<div key={index}>
								<Rule
									key={index}
									index={index}
									ruleName={ruleName}
									ruleDescription={rulesObject[ruleName as keyof typeof rulesObject]}
									ruleCatagory={ruleCatagory}
									selectedRuleIndex={props.selectedRuleIndex}
									onSelectedRuleIndex={props.onSelectedRuleIndex}
								/>
							</div>
						);
					}
				}

				return;
			})}
		</div>
	);
};

RulesListView.displayName = 'RulesListView';
RulesListView.defaultProps = {};

export default React.memo(RulesListView);
