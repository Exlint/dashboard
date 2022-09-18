import React from 'react';

import type { IGroup } from './interfaces/group';

interface IProps {
	readonly group: IGroup | null;
}

const GroupDetailsView: React.FC<IProps> = () => {
	return <>&nbsp;</>;
};

GroupDetailsView.displayName = 'GroupDetailsView';
GroupDetailsView.defaultProps = {};

export default React.memo(GroupDetailsView);
