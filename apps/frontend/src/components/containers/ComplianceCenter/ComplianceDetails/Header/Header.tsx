import type { IGetAllCompliancesResponseData } from '@exlint.io/common';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useMemo } from 'react';

import useBackend from '@/hooks/use-backend';

import HeaderView from './Header.view';

interface IProps {}

const Header: React.FC<IProps> = () => {
	const { data: getAllCompliancesResponseData } =
		useBackend<IGetAllCompliancesResponseData>('/user/compliances');

	const params = useParams<{ readonly complianceId: string }>();
	const navigate = useNavigate();

	const selectedCompliance = useMemo(() => {
		if (!getAllCompliancesResponseData) {
			return null;
		}

		const matchingCompliance = getAllCompliancesResponseData.compliances.find(
			(compliance) => compliance.id === params.complianceId,
		);

		return matchingCompliance ?? null;
	}, [params, getAllCompliancesResponseData]);

	useEffect(() => {
		if (getAllCompliancesResponseData && selectedCompliance === null) {
			navigate('/compliance-center');
		}
	}, [getAllCompliancesResponseData, selectedCompliance]);

	return <HeaderView complianceLabel={selectedCompliance?.label} complianceId={selectedCompliance?.id} />;
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
