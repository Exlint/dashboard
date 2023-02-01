import React from 'react';

import AsciinemaPlayerView from './AsciinemaPlayer.view';

interface IProps {
	readonly src: string;
	readonly cols?: string;
	readonly rows?: string;
	readonly autoPlay?: boolean;
	readonly preload?: boolean;
	readonly loop?: boolean | number;
	readonly startAt?: number | string;
	readonly speed?: number;
	readonly idleTimeLimit?: number;
	readonly theme?: string;
	readonly poster?: string;
	readonly fit?: string;
	readonly fontSize?: string;
}

const AsciinemaPlayer: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<AsciinemaPlayerView
			src={props.src}
			cols={props.cols}
			rows={props.cols}
			autoPlay={props.autoPlay}
			preload={props.preload}
			loop={props.loop}
			startAt={props.startAt}
			speed={props.speed}
			idleTimeLimit={props.idleTimeLimit}
			theme={props.theme}
			poster={props.poster}
			fit={props.fit}
			fontSize={props.fontSize}
		/>
	);
};

AsciinemaPlayer.displayName = 'AsciinemaPlayer';
AsciinemaPlayer.defaultProps = {};

export default React.memo(AsciinemaPlayer);
