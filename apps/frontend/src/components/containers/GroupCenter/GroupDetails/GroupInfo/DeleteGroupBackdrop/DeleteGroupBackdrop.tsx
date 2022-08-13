import React from 'react';

import DeleteGroupBackdropView from './DeleteGroupBackdrop.view';

interface IProps {
	readonly onCloseMoreInfo: () => void;
	readonly onDeleteGroup: () => void;
}

const DeleteGroupBackdrop: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<DeleteGroupBackdropView
			onCloseMoreInfo={props.onCloseMoreInfo}
			onDeleteGroup={props.onDeleteGroup}
		/>
	);
};

DeleteGroupBackdrop.displayName = 'DeleteGroupBackdrop';
DeleteGroupBackdrop.defaultProps = {};

export default React.memo(DeleteGroupBackdrop);
