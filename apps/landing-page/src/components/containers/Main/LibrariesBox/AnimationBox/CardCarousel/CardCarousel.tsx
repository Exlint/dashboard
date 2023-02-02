import React from 'react';

import CardCarouselView from './CardCarousel.view';

interface IProps {
	readonly onHighlightIcons: VoidFunction;
}

const CardCarousel: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <CardCarouselView onHighlightIcons={props.onHighlightIcons} />;
};

CardCarousel.displayName = 'CardCarousel';
CardCarousel.defaultProps = {};

export default React.memo(CardCarousel);
