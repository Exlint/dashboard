import type { PolicyLibrary } from '@prisma/client';
import React from 'react';
import { useOutletContext } from 'react-router-dom';

import RulesView from './Rules.view';

interface IProps {}

const Rules: React.FC<IProps> = () => {
	const [, , library] = useOutletContext<[unknown, unknown, PolicyLibrary | null]>();

	return <RulesView library={library} />;
};

Rules.displayName = 'Rules';
Rules.defaultProps = {};

export default React.memo(Rules);
