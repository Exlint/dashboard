import React from 'react';

import AnimationBoxView from './AnimationBox.view';

interface IProps {
	readonly isStylintVisible: boolean;
	readonly isEslintVisible: boolean;
	readonly isPrettierVisible: boolean;
	readonly isDepcheckVisible: boolean;
	readonly onHighlightIcons: () => void;
}

const AnimationBox: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<AnimationBoxView
			isStylintVisible={props.isStylintVisible}
			isEslintVisible={props.isEslintVisible}
			isPrettierVisible={props.isPrettierVisible}
			isDepcheckVisible={props.isDepcheckVisible}
			onHighlightIcons={props.onHighlightIcons}
		/>
	);
};

AnimationBox.displayName = 'AnimationBox';
AnimationBox.defaultProps = {};

export default React.memo(AnimationBox);
