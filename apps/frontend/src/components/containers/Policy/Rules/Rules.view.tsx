import type { PolicyLibrary } from '@prisma/client';
import React from 'react';
import { Outlet } from 'react-router-dom';

interface IProps {
	readonly library: PolicyLibrary | null;
}

const RulesView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return <Outlet context={[props.library]} />;
};

RulesView.displayName = 'RulesView';
RulesView.defaultProps = {};

export default React.memo(RulesView);
