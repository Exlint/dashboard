import React from 'react';
import { SteppedLineTo } from 'react-lineto';
// import { Trans, useTranslation } from 'react-i18next';

import classes from './TokenManagement.module.scss';

interface IProps {}

const TokenManagementView: React.FC<IProps> = () => {
	// const { t } = useTranslation();

	return (
		<div className={classes['tokenManagement']}>
			<div className={classes['container']}>
				<div className="first">
					<h1>First Element</h1>
				</div>
				<div className="f">
					<h1>First Element</h1>
				</div>
				<div className="d">
					<h1>First Element</h1>
				</div>
				<div className="s">
					<h1>First Element</h1>
				</div>
			</div>

			<div className="second">
				<h1> second element</h1>
			</div>
			<SteppedLineTo from="s" to="second" orientation="h" borderWidth={10} />
		</div>
	);
};

TokenManagementView.displayName = 'TokenManagementView';
TokenManagementView.defaultProps = {};

export default React.memo(TokenManagementView);
