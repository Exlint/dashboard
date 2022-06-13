import React from 'react';
import uniqid from 'uniqid';

import { IRule } from '@/interfaces/rule';
import { librariesList } from '@/data/librariesList';
import { ILibrary } from '@/interfaces/library';
import classes from './RulesList.module.scss';

import Rule from './Rule';

interface IProps {
	readonly selectedLibrary: ILibrary | null;
	readonly selectedRule: IRule | null;
	readonly selectedCatagoryIndex: number | null;
	readonly onSelectedRule: (rule: IRule) => void;
}

const RulesListView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const selectedLibraryName = props.selectedLibrary!.title;

	const rulesObject = librariesList[selectedLibraryName as keyof typeof librariesList].rulesList;

	return (
		<div className={classes['rulesList']}>
			{Object.keys(rulesObject).map((ruleCatagory, outerIndex) => {
				return Object.keys(rulesObject[ruleCatagory as keyof typeof rulesObject]).map(
					(rule, innerIndex) => {
						return (
							<Rule
								key={`${outerIndex}-${innerIndex}`}
								index={innerIndex}
								id={uniqid()}
								ruleName={rule}
								ruleCatagory={ruleCatagory}
								ruleDescription={rulesObject[ruleCatagory as keyof typeof rulesObject][rule]}
								selectedRule={props.selectedRule}
								onSelectedRule={props.onSelectedRule}
							/>
						);
					},
				);
			})}
		</div>
	);
};

RulesListView.displayName = 'RulesListView';
RulesListView.defaultProps = {};

export default React.memo(RulesListView);
