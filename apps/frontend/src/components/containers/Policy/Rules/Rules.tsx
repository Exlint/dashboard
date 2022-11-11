import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import type { AxiosResponse } from 'axios';
import type {
	IGetPolicyRulesResponseData,
	ILibraryData,
	ISetIsFormConfigurationDto,
} from '@exlint-dashboard/common';
import type { PolicyLibrary } from '@prisma/client';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import { useTranslation } from 'react-i18next';

import type { IUiShowNotificationPayload } from '@/store/interfaces/ui';
import { uiActions } from '@/store/reducers/ui';
import { backendApi } from '@/utils/http';

import RulesView from './Rules.view';

interface IPropsFromDispatch {
	readonly showNotification: (
		showNotificationPayload: IUiShowNotificationPayload,
	) => PayloadAction<IUiShowNotificationPayload>;
}

interface IProps extends IPropsFromDispatch {}

const Rules: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const { t } = useTranslation();
	const params = useParams<{ readonly policyId: string; readonly groupId: string }>();
	const navigate = useNavigate();
	const [, , library] = useOutletContext<[unknown, unknown, PolicyLibrary | null]>();

	const [isFormConfigurationState, setIsFormConfigurationState] = useState<boolean | null>(null);
	const [descriptionState, setDescriptionState] = useState<string | null>(null);
	const [policyCreationDateState, setPolicyCreationDateState] = useState<number | null>(null);
	const [policyTypesState, setPolicyTypesState] = useState<ILibraryData['types'] | null>(null);
	const [rulesDataState, setRulesDataState] = useState<IGetPolicyRulesResponseData['rules']>([]);
	const [rulesTotalCountState, setRulestotalCountState] = useState<number | null>(null);

	const [policyCategoriesState, setPolicyCategoriesState] = useState<ILibraryData['categories'] | null>(
		null,
	);

	const onIsSwitchCheckedChange = async (checked: boolean) => {
		setIsFormConfigurationState(() => checked);

		await backendApi
			.patch<void, AxiosResponse<void>, ISetIsFormConfigurationDto>(
				`/user/inline-policies/is-form-configuration/${params.policyId}`,
				{ isFormConfiguration: checked },
			)
			.then(() => {
				props.showNotification({
					notificationType: 'warning',
					notificationTitle: checked
						? t('formConfiguration.switch.toFormNotificationTitle')
						: t('formConfiguration.switch.toCodeNotificationTitle'),
					notificationMessage: checked
						? t('formConfiguration.switch.toFormNotificationDescription')
						: t('formConfiguration.switch.toCodeNotificationDescription'),
				});
			})
			.catch(() => {
				setIsFormConfigurationState(() => !checked);
			});
	};

	const onAddNewRuleClick = () => {
		return;
	};

	const onRemoveRuleClick = (ruleId: string) => {
		backendApi.delete(`/user/rules/${ruleId}`).then(() => {
			setRulesDataState((prev) => prev.filter((ruleItem) => ruleItem.id !== ruleId));
		});
	};

	useEffect(() => {
		backendApi
			.get<IGetPolicyRulesResponseData>(`/user/inline-policies/rules/${params.policyId}`)
			.then((response) => {
				setIsFormConfigurationState(() => response.data.isFormConfiguration);
				setDescriptionState(() => response.data.description);
				setPolicyCreationDateState(() => response.data.createdAt);
				setPolicyTypesState(() => response.data.types);
				setPolicyCategoriesState(() => response.data.categories);
				setRulesDataState(() => response.data.rules);
				setRulestotalCountState(() => response.data.count);
			})
			.catch(() => navigate(`/group-center/${params.groupId}`));
	}, [backendApi]);

	return (
		<RulesView
			isFormConfiguration={isFormConfigurationState}
			description={descriptionState}
			library={library}
			types={policyTypesState}
			categories={policyCategoriesState}
			policyCreationDate={policyCreationDateState}
			rulesData={rulesDataState}
			rulesTotalCount={rulesTotalCountState ?? 0}
			onIsSwitchCheckedChange={onIsSwitchCheckedChange}
			onAddNewRuleClick={onAddNewRuleClick}
			onRemoveRuleClick={onRemoveRuleClick}
		/>
	);
};

Rules.displayName = 'Rules';
Rules.defaultProps = {};

export default connect(null, {
	showNotification: uiActions.showNotification,
})(React.memo(Rules));
