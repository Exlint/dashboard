import React from 'react';

import CmdView from './Cmd.view';

interface IProps {}

const Cmd: React.FC<IProps> = () => {
	return <CmdView />;
};

Cmd.displayName = 'Cmd';
Cmd.defaultProps = {};

export default React.memo(Cmd);
