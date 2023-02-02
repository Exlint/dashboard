import React from 'react';
import ReactCardCarousel from 'react-card-carousel';
import { Trans } from 'react-i18next';

import classes from './CardCarousel.module.scss';

interface IProps {
	readonly onHighlightIcons: VoidFunction;
}

const CardCarouselView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<div className={classes['container']}>
			<ReactCardCarousel
				autoplay
				autoplay_speed={10000}
				alignment="vertical"
				afterChange={props.onHighlightIcons}
			>
				<div className={classes['card']}>
					<span className={classes['card__title']}>
						<Trans>Rule Added:</Trans>
					</span>
					<span className={classes['card__rule']}>
						<Trans>&#39;color-named&#39;: [&#39;never&#39;]</Trans>
					</span>
				</div>
				<div className={classes['card']}>
					<span className={classes['card__title']}>
						<Trans>Rule Added:</Trans>
					</span>
					<span className={classes['card__rule']}>
						<Trans>&#39;indent&#39;: [&#39;error&#39;, &#39;tab&#39;],</Trans>
					</span>
				</div>
				<div className={classes['card']}>
					<span className={classes['card__title']}>
						<Trans>Configuration Updated:</Trans>
					</span>
					<span className={classes['card__rule']}>
						<Trans>tabWidth: 4,</Trans>
					</span>
					<span className={classes['card__rule']}>
						<Trans>printWidth: 110</Trans>
					</span>
				</div>
				<div className={classes['card']}>
					<span className={classes['card__title']}>
						<Trans>Configuration Updated:</Trans>
					</span>
					<span className={classes['card__rule']}>
						<Trans>&#34;ignores&#34;: [</Trans>
					</span>
					<div className={classes['card__rowContainer']}>
						&emsp;
						<span className={classes['card__rule']}>
							<Trans>chalk&#34;</Trans>
						</span>
					</div>
					<span className={classes['card__rule']}>]</span>
				</div>
			</ReactCardCarousel>
		</div>
	);
};

CardCarouselView.displayName = 'CardCarouselView';
CardCarouselView.defaultProps = {};

export default React.memo(CardCarouselView);
