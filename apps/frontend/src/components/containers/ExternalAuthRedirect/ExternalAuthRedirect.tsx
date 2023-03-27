import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAutoAuthResponseData, ICliAuthResponseData } from '@exlint.io/common';

import { authActions } from '@/store/reducers/auth';
import type { IAuthPayload } from '@/store/interfaces/auth';
import BackendService from '@/services/backend';
import CliBackendService from '@/services/cli-backend';
import type { AppState } from '@/store/app';

import ExternalAuthRedirectView from './ExternalAuthRedirect.view';

interface IPropsFromState {
	readonly isAuthenticated: boolean | null;
}

interface PropsFromDispatch {
	readonly auth: (loginPayload: IAuthPayload) => PayloadAction<IAuthPayload>;
}

interface IProps extends IPropsFromState, PropsFromDispatch {}

const ExternalAuthRedirect: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const refreshToken = searchParams.get('refreshToken');
	const port = searchParams.get('port');

	useEffect(() => {
		if (refreshToken) {
			const fetchResults = async () => {
				let autoAuthResponseData: IAutoAuthResponseData;

				localStorage.setItem('token', refreshToken);

				try {
					autoAuthResponseData = await BackendService.get<IAutoAuthResponseData>('/user/auth');

					sessionStorage.setItem('token', autoAuthResponseData.accessToken);
				} catch {
					localStorage.clear();

					let navigateUrl = '/auth';

					if (port) {
						navigateUrl += `?port=${port}`;
					}

					navigate(navigateUrl);

					return;
				}

				if (port) {
					let cliToken: string;
					let email: string;

					try {
						const responseData = await CliBackendService.get<ICliAuthResponseData>(
							'/user/auth/auth',
						);

						cliToken = responseData.cliToken;
						email = responseData.email;
					} catch {
						navigate(`/cli-auth?port=${port}`);

						return;
					}

					try {
						const res = await fetch(`http://localhost:${port}/${cliToken}/${email}`);

						if (!res.ok) {
							throw new Error();
						}

						navigate('/cli-authenticated');
					} catch {
						navigate(`/cli-auth?port=${port}`);

						return;
					}
				}

				props.auth({
					id: autoAuthResponseData.id,
					name: autoAuthResponseData.name,
					createdAt: autoAuthResponseData.createdAt,
				});
			};

			fetchResults();
		} else {
			let navigateUrl = '/auth';

			if (port) {
				navigateUrl += `?port=${port}`;
			}

			navigate(navigateUrl);
		}
	}, [refreshToken, port]);

	useEffect(() => {
		if (!port && props.isAuthenticated) {
			navigate('/', { replace: true });
		}
	}, [port, props.isAuthenticated]);

	return <ExternalAuthRedirectView />;
};

ExternalAuthRedirect.displayName = 'ExternalAuthRedirect';
ExternalAuthRedirect.defaultProps = {};

const mapStateToProps = (state: AppState) => {
	return {
		isAuthenticated: state.auth.isAuthenticated,
	};
};

export default connect(mapStateToProps, { auth: authActions.auth })(React.memo(ExternalAuthRedirect));
