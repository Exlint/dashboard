import React from 'react';
import ReactCardCarousel from 'react-card-carousel';

import classes from './CardCarousel.module.scss';

const CardCarouselView = (props) => {
	const { onHighlightIcons } = props;

	return (
		<div className={classes['container']}>
			<ReactCardCarousel
				autoplay
				autoplay_speed={10000}
				alignment="vertical"
				afterChange={onHighlightIcons}
			>
				<div className={classes['card']}>
					<span className={classes['card__title']}>Rule Added:</span>
					<span className={classes['card__rule']}>'color-named': ['never']</span>
				</div>
				<div className={classes['card']}>
					<span className={classes['card__title']}>Rule Added:</span>
					<span className={classes['card__rule']}>'indent': ['error', 'tab'],</span>
				</div>
				<div className={classes['card']}>
					<span className={classes['card__title']}>Configuration Updated:</span>
					<span className={classes['card__rule']}>tabWidth: 4,</span>
					<span className={classes['card__rule']}>printWidth: 110</span>
				</div>
				<div className={classes['card']}>
					<span className={classes['card__title']}>Configuration Updated:</span>
					<span className={classes['card__rule']}>"ignores": [</span>
					<div className={classes['card__rowContainer']}>
						&emsp;
						<span className={classes['card__rule']}>chalk"</span>
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
