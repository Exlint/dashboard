import React from 'react';

import TypesButtonsView from './TypesButtons.view';

interface IProps {
	readonly index: number;
	readonly selectedTypeIndex: number;
	readonly onSelectType: (_: number) => void;
}

const TypesButtons: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<TypesButtonsView
			index={props.index}
			selectedTypeIndex={props.selectedTypeIndex}
			onSelectType={props.onSelectType}
		/>
	);
};

TypesButtons.displayName = 'TypesButtons';
TypesButtons.defaultProps = {};

export default React.memo(TypesButtons);
