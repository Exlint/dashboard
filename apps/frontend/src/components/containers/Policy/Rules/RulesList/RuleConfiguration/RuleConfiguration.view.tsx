import React from 'react';

import classes from './RuleConfiguration.module.scss';

interface IProps {}

const RuleConfigurationView: React.FC<IProps> = () => {
	return <div className={classes['container']}>&nbsp;</div>;
};

RuleConfigurationView.displayName = 'RuleConfigurationView';
RuleConfigurationView.defaultProps = {};

export default React.memo(RuleConfigurationView);
