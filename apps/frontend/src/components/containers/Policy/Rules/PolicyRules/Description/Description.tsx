import type { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import type { IEditPolicyDescriptionDto, ILibraryData } from '@exlint.io/common';
import { useParams } from 'react-router-dom';
import type { PolicyLibrary } from '@prisma/client';

import { backendApi } from '@/utils/http';

import DescriptionView from './Description.view';

interface IProps {
	readonly description: string | null;
	readonly library: PolicyLibrary | null;
	readonly types: ILibraryData['types'] | null;
	readonly categories: ILibraryData['categories'] | null;
	readonly policyCreationDate: number | null;
}

const Description: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	const params = useParams<{ readonly policyId: string }>();

	const [descriptionInputState, setDescriptionInputState] = useState<string | null>(props.description);
	const [isDescriptionOnEditState, setIsDescriptionOnEditState] = useState<boolean>(false);

	const [originalDescriptionInputState, setOriginalDescriptionInputState] = useState<string | null>(
		props.description,
	);

	useEffect(() => {
		setDescriptionInputState(() => props.description);
		setOriginalDescriptionInputState(() => props.description);
	}, [props.description]);

	const onDescriptionInputChange = (value: string) => setDescriptionInputState(() => value);
	const onEditIconClick = () => setIsDescriptionOnEditState(() => true);

	const onConfirmNewEditClick = () => {
		setIsDescriptionOnEditState(() => false);

		if (descriptionInputState !== originalDescriptionInputState) {
			backendApi
				.patch<void, AxiosResponse<void>, IEditPolicyDescriptionDto>(
					`/user/inline-policies/description/${params.policyId}`,
					{
						description: descriptionInputState || null,
					},
				)
				.then(() => {
					setIsDescriptionOnEditState(() => false);
					setOriginalDescriptionInputState(() => descriptionInputState);
				});
		} else {
			setIsDescriptionOnEditState(() => false);
		}
	};

	return (
		<DescriptionView
			descriptionInput={descriptionInputState}
			isDescriptionOnEdit={isDescriptionOnEditState}
			library={props.library}
			types={props.types}
			categories={props.categories}
			policyCreationDate={props.policyCreationDate}
			onDescriptionInputChange={onDescriptionInputChange}
			onEditIconClick={onEditIconClick}
			onConfirmNewEditClick={onConfirmNewEditClick}
		/>
	);
};

Description.displayName = 'Description';
Description.defaultProps = {};

export default React.memo(Description);
