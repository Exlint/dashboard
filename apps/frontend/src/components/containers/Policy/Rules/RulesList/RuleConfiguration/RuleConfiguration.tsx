import type { ILibraryRule } from '@exlint.io/common';
import type { Prisma } from '@prisma/client';
import type { IChangeEvent } from '@rjsf/core';
import React, { useState } from 'react';
import validator from '@rjsf/validator-ajv8';

import RuleConfigurationView from './RuleConfiguration.view';

interface IProps {
	readonly ruleId: string | null;
	readonly ruleName: string | null;
	readonly ruleConfiguration: Prisma.JsonValue;
	readonly selectedRuleSchema: ILibraryRule['schema'] | null;
}

const RuleConfiguration: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isFormValidState, setIsFormValidState] = useState<boolean>(false);
	const [formDataState, setFormDataState] = useState<Prisma.JsonValue>(props.ruleConfiguration);

	const onFormChange = (data: IChangeEvent) => {
		setIsFormValidState(() =>
			validator.isValid(props.selectedRuleSchema!, data.formData, props.selectedRuleSchema!),
		);
		setFormDataState(() => data.formData);
	};

	return (
		<RuleConfigurationView
			ruleId={props.ruleId}
			ruleName={props.ruleName}
			isFormValid={isFormValidState}
			ruleConfiguration={props.ruleConfiguration}
			selectedRuleSchema={props.selectedRuleSchema}
			formData={formDataState}
			onFormChange={onFormChange}
		/>
	);
};

RuleConfiguration.displayName = 'RuleConfiguration';
RuleConfiguration.defaultProps = {};

export default React.memo(RuleConfiguration);
