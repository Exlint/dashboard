import React from 'react';

import EDInputFieldAvailabilityView from './EDInputFieldAvailability.view';

interface IProps {
	readonly id?: string;
	readonly className?: string;
	readonly value: string | null;
	readonly maxLength?: number;
	readonly placeholder?: string;
	readonly isAvailable: boolean | null;
	readonly onChange: (value: string) => void;
}

const EDInputFieldAvailability: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<EDInputFieldAvailabilityView
			id={props.id}
			className={props.className}
			value={props.value}
			maxLength={props.maxLength}
			placeholder={props.placeholder}
			isAvailable={props.isAvailable}
			onChange={props.onChange}
		/>
	);
};

EDInputFieldAvailability.displayName = 'EDInputFieldAvailability';
EDInputFieldAvailability.defaultProps = {};

export default React.memo(EDInputFieldAvailability);
