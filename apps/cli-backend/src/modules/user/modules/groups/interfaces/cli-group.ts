import { InlinePolicy, Group } from '@prisma/client';

export type ICliGroup = Pick<Group, 'id'> & {
	inlinePolicies: Pick<InlinePolicy, 'id' | 'label' | 'library' | 'configuration'>[];
};
