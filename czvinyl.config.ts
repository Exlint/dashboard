import type { Config } from 'cz-vinyl';

const czvinylConfig: Config = {
	headerFormat: '{type}: {emoji} [{ticket_id}] {subject}',
	allowEmptyTicketIdForBranches: ['main'],
};

export default czvinylConfig;
