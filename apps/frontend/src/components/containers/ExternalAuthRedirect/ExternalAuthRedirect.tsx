import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AxiosResponse } from 'axios';

import { backendApi } from '@/utils/http';
import type { IAutoAuthResponseData } from '@/interfaces/responses';
import { authActions } from '@/store/reducers/auth';
import type { IAuthPayload } from '@/store/interfaces/auth';

import ExternalAuthRedirectView from './ExternalAuthRedirect.view';

interface PropsFromDispatch {
	readonly auth: (loginPayload: IAuthPayload) => PayloadAction<IAuthPayload>;
}

interface IProps extends PropsFromDispatch {}

const ExternalAuthRedirect: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const refreshToken = searchParams.get('refreshToken');

		if (refreshToken) {
			localStorage.setItem('token', refreshToken);

			backendApi
				.post('/user/auth/auto-auth')
				.then((response: AxiosResponse<IAutoAuthResponseData>) => {
					sessionStorage.setItem('token', response.data.accessToken);

					props.auth({
						id: response.data.id,
						name: response.data.name,
					});
				})
				.catch(() => {
					localStorage.clear();

					return;
				})
				.finally(() => {
					navigate('/');
				});
		}
	}, [searchParams]);

	return <ExternalAuthRedirectView />;
};

ExternalAuthRedirect.displayName = 'ExternalAuthRedirect';
ExternalAuthRedirect.defaultProps = {};

export default connect(null, { auth: authActions.auth })(React.memo(ExternalAuthRedirect));
