import React from 'react';

import DeleteGroupBackdropView from './DeleteGroupBackdrop.view';

interface IProps {
	readonly onDeleteGroup: () => void;
	readonly tooltopRef: React.RefObject<HTMLDivElement>;
}

const DeleteGroupBackdrop: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <DeleteGroupBackdropView tooltopRef={props.tooltopRef} onDeleteGroup={props.onDeleteGroup} />;
};

DeleteGroupBackdrop.displayName = 'DeleteGroupBackdrop';
DeleteGroupBackdrop.defaultProps = {};

export default React.memo(DeleteGroupBackdrop);
