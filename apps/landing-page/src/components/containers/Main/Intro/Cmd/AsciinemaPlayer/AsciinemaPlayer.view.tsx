import React, { useEffect, useRef } from 'react';

import classes from './AsciinemaPlayer.module.scss';

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
	readonly terminalFontSize?: string;
}

const AsciinemaPlayerView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const setupAsciinema = async () => {
			const AsciinemaPlayerLibrary = await import('asciinema-player');
			const currentRef = ref.current;

			AsciinemaPlayerLibrary.create(props.src, currentRef, props);
		};

		setupAsciinema();
	}, [props.src]);

	return <div ref={ref} className={classes['container']} />;
};

AsciinemaPlayerView.displayName = 'AsciinemaPlayerView';
AsciinemaPlayerView.defaultProps = {};

export default React.memo(AsciinemaPlayerView);
