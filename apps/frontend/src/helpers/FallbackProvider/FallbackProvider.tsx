import React, { Suspense, useCallback, useMemo, useState } from 'react';

import { FallbackContext } from './context/fallback';
import type { FallbackType } from './interfaces/types';

interface IProps {}

const FabllbackProvider: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [fallbackState, setFallbackState] = useState<FallbackType>(null);

	const updateFallback = useCallback((fallback: FallbackType) => {
		setFallbackState(() => fallback);
	}, []);

	const renderChildren = useMemo(() => {
		return props.children;
	}, [props.children]);

	return (
		<FallbackContext.Provider value={{ updateFallback }}>
			<Suspense fallback={fallbackState}>{renderChildren}</Suspense>
		</FallbackContext.Provider>
	);
};

FabllbackProvider.displayName = 'FabllbackProvider';
FabllbackProvider.defaultProps = {};

export default React.memo(FabllbackProvider);
