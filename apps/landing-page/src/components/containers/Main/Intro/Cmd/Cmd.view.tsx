import React from 'react';
import AsciinemaPlayer from './AsciinemaPlayer';
import 'asciinema-player/dist/bundle/asciinema-player.css';

import classes from './Cmd.module.scss';

const CmdView = () => {
	return (
		<div className={classes['cmd']}>
			<div className={classes['innerCmd']}>
				<AsciinemaPlayer src="/videos/559874.cast" autoPlay theme="monokai" fit="height" />
			</div>
		</div>
	);
};

CmdView.displayName = 'CmdView';
CmdView.defaultProps = {};

export default React.memo(CmdView);
