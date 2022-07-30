import React from 'react';

import HeaderView from './Header.view';

interface IProps {
	readonly configurationType: string;
	readonly labelInput: string | null;
	readonly isEditFileFormat: boolean;
	readonly onEditFileFormatButton: () => void;
}

const Header: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<HeaderView
			configurationType={props.configurationType}
			labelInput={props.labelInput}
			isEditFileFormat={props.isEditFileFormat}
			onEditFileFormatButton={props.onEditFileFormatButton}
		/>
	);
};

Header.displayName = 'Header';
Header.defaultProps = {};

export default React.memo(Header);
