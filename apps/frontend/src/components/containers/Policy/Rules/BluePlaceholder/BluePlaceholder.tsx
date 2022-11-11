import React from 'react';
import { useParams } from 'react-router-dom';

import BluePlaceholderView from './BluePlaceholder.view';

interface IProps {
	readonly show: boolean;
}

const BluePlaceholder: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const params = useParams<{ readonly policyId: string; readonly groupId: string }>();

	return <BluePlaceholderView show={props.show} groupId={params.groupId} policyId={params.policyId} />;
};

BluePlaceholder.displayName = 'BluePlaceholder';
BluePlaceholder.defaultProps = {};

export default React.memo(BluePlaceholder);
