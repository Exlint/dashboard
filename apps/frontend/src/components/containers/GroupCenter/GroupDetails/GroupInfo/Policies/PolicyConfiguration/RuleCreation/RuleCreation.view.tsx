import React, { Suspense } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import { ILibrary } from '@/interfaces/library';

import CodeBasedConfigurations from '@/ui/CodeBasedConfigurationsInput';
import NavigateBackButton from '@/ui/NavigateBackButton';
import classes from './RuleCreation.module.scss';
import Options from './Options';
import Recommended from './Recommended';
import Manually from './Manually';

interface IProps {
	readonly policyLabelInput: string | null;
	readonly selectedLibrary: ILibrary | null;
	readonly selectedFileFormatIndex: number;
	readonly isFileFormatClicked: boolean;
	readonly isEditFileFormat: boolean;
	readonly policyCodeBasedConfigurationsInputState: string;
	readonly onEditFileFormatButton: () => void;
	readonly onFileFormatButton: () => void;
	readonly onSelectedFileFormat: (index: number) => void;
	readonly onPolicyCodeBasedConfigurationsInputChanged: (input: string) => void;
}

const RuleCreationView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const route = useLocation();

	let currentPage;

	if (route.pathname === '/groupCenter/group/Policy/ruleOnboarding') {
		currentPage = 'options';
	} else if (route.pathname.includes('/manual')) {
		currentPage = 'manually';
	}

	return (
		<section
			className={classes['ruleCration']}
			style={{ padding: currentPage === 'manually' ? '30px 20px 0px 20px' : '74px 185px' }}
		>
			<NavigateBackButton
				position={
					currentPage === 'manually'
						? { bottom: '107px', right: '-5px' }
						: { bottom: '50px', right: '160px' }
				}
			/>

			{currentPage === 'options' && <Options policyLabelInput={props.policyLabelInput} />}

			<Suspense fallback={null}>
				<Switch>
					<Route path="/groupCenter/group/Policy/ruleOnboarding/manual">
						<Manually
							policyLabelInput={props.policyLabelInput}
							selectedLibrary={props.selectedLibrary}
						/>
					</Route>
					<Route path="/groupCenter/group/Policy/ruleOnboarding/manual">
						<Recommended />
					</Route>
					<Route path="/groupCenter/group/Policy/ruleOnboarding/file">
						<CodeBasedConfigurations
							labelInput={props.policyLabelInput}
							inputCode={props.policyCodeBasedConfigurationsInputState}
							selectedFileFormatIndex={props.selectedFileFormatIndex}
							isFileFormatClicked={props.isFileFormatClicked}
							isEditFileFormat={props.isEditFileFormat}
							onFileFormatButton={props.onFileFormatButton}
							onSelectedFileFormat={props.onSelectedFileFormat}
							onEditFileFormatButton={props.onEditFileFormatButton}
							onChangeInput={props.onPolicyCodeBasedConfigurationsInputChanged}
						/>
					</Route>
					<Redirect path="*" to="/groupCenter/group/Policy/ruleOnboarding" />
				</Switch>
			</Suspense>
		</section>
	);
};

RuleCreationView.displayName = 'RuleCreationView';
RuleCreationView.defaultProps = {};

export default React.memo(RuleCreationView);
