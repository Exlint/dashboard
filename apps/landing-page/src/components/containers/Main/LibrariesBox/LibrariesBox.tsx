import React, { useState } from 'react';

import LibrariesBoxView from './LibrariesBox.view';

interface IProps {}

const LibrariesBox: React.FC<IProps> = () => {
	const [isStylelintVisible, setIsStylelintVisible] = useState<boolean>(true);
	const [isEslintVisible, setIsEslintVisible] = useState<boolean>(false);
	const [isPrettierVisible, setIsPrettierVisible] = useState<boolean>(false);
	const [isDepcheckVisible, setIsDepcheckVisible] = useState<boolean>(false);

	const onHighlightIcons = () => {
		if (isStylelintVisible) {
			setIsStylelintVisible(false);
			setIsEslintVisible(true);
		}

		if (isEslintVisible) {
			setIsEslintVisible(false);
			setIsPrettierVisible(true);
		}

		if (isPrettierVisible) {
			setIsPrettierVisible(false);
			setIsDepcheckVisible(true);
		}

		if (isDepcheckVisible) {
			setIsDepcheckVisible(false);
			setIsStylelintVisible(true);
		}
	};

	return (
		<LibrariesBoxView
			isStylelintVisible={isStylelintVisible}
			isEslintVisible={isEslintVisible}
			isPrettierVisible={isPrettierVisible}
			isDepcheckVisible={isDepcheckVisible}
			onHighlightIcons={onHighlightIcons}
		/>
	);
};

LibrariesBox.displayName = 'LibrariesBox';
LibrariesBox.defaultProps = {};

export default React.memo(LibrariesBox);
