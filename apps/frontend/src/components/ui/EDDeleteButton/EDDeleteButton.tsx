import React, { type FormEvent, useState, type ReactNode } from 'react';

import EDDeleteButtonView from './EDDeleteButton.view';

interface IProps {
	readonly className?: string;
	readonly modalTitle: string;
	readonly modalSubTitle: string;
	readonly modalConfirmationKeyword: string;
	readonly onModalConfirmClick: VoidFunction;
	readonly children?: ReactNode;
}

const EDDeleteButton: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const [isModalOnViewState, setIsModalOnViewState] = useState<boolean>(false);
	const [isConfirmButtonDisabledState, setIsConfirmButtonDisabledState] = useState<boolean>(true);

	const onOpenModal = () => setIsModalOnViewState(() => true);
	const onCloseModal = () => setIsModalOnViewState(() => false);

	const onInputChangeHandler = (input: string) => {
		setIsConfirmButtonDisabledState(() => input !== props.modalConfirmationKeyword);
	};

	const onConfirmModalClick = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		props.onModalConfirmClick();
	};

	return (
		<EDDeleteButtonView
			className={props.className}
			isModalOnView={isModalOnViewState}
			modalTitle={props.modalTitle}
			modalSubTitle={props.modalSubTitle}
			modalConfirmationKeyword={props.modalConfirmationKeyword}
			isConfirmButtonDisabled={isConfirmButtonDisabledState}
			onOpenModal={onOpenModal}
			onCloseModal={onCloseModal}
			onModalConfirmButtonClick={onConfirmModalClick}
			onInputChangeHandler={onInputChangeHandler}
		>
			{props.children}
		</EDDeleteButtonView>
	);
};

EDDeleteButton.displayName = 'EDDeleteButton';
EDDeleteButton.defaultProps = {};

export default React.memo(EDDeleteButton);
