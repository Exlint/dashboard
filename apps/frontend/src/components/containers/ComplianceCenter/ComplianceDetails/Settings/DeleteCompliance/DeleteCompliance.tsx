import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { IGetAllCompliancesResponseData } from '@exlint.io/common';

import useBackend from '@/hooks/use-backend';
import BackendService from '@/services/backend';

import DeleteComplianceView from './DeleteCompliance.view';

interface IProps {
	readonly complianceId: string;
	readonly complianceLabel: string;
}

const DeleteCompliance: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();

	const { mutate: getAllCompliancesMutate } =
		useBackend<IGetAllCompliancesResponseData>('/user/compliances');

	const onDeleteComplianceConfirmClick = async () => {
		await getAllCompliancesMutate(
			async (currentData) => {
				if (!currentData) {
					return;
				}

				await BackendService.delete(`/user/compliances/${props.complianceId}`);

				return {
					...currentData,
					compliances: currentData.compliances.filter(
						(compliance) => compliance.id !== props.complianceId,
					),
				};
			},
			{
				optimisticData: (currentData) => {
					if (!currentData) {
						return { compliances: [] };
					}

					return {
						...currentData,
						compliances: currentData.compliances.filter(
							(compliance) => compliance.id !== props.complianceId,
						),
					};
				},
				throwOnError: true,
				rollbackOnError: true,
			},
		);

		navigate('/compliance-center');
	};

	return (
		<DeleteComplianceView
			complianceLabel={props.complianceLabel}
			onDeleteComplianceConfirmClick={onDeleteComplianceConfirmClick}
		/>
	);
};

DeleteCompliance.displayName = 'DeleteCompliance';
DeleteCompliance.defaultProps = {};

export default React.memo(DeleteCompliance);
