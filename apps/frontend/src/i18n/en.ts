const en = {
	redirect: {
		header: 'You are being redirected',
		subText: 'If nothing happens, please click',
		subTextLinkPostfix: 'here',
	},
	externalAction: {
		footerText: 'If you believe something is wrong or have other security concerns, please contact us at',
	},
	auth: {
		backgroundHeader: 'Prevent bad practices,<br />focus on better code.',
		backgroundSubHeader: 'Create your first policy configuration in a matter of minutes',
		formHeader: 'Welcome.',
		formSubHeader: 'Get started for free',
		githubAuth: 'Continue with GitHub',
		googleAuth: 'Continue with Google',
		permissionsDisclaimer: ' We will not make any use of the auth provider without your permission.',
		policiesDiscalimer: {
			prefix: 'By logging in or signing up, you agree to abide by our policies, including our',
			and: 'and',
			termsOfService: 'Terms Of Service',
			privacyPolicy: 'Privacy Policy',
		},
	},
	accountSettings: {
		header: {
			routeText: 'Account Settings',
			clientId: 'Client ID',
			userCreated: 'User Created',
		},
		sideBar: {
			account: 'Account',
			secretManagement: 'Secret Management',
		},
		account: {
			signOutHeader: 'Sign Out',
			signOutSubHeader: 'Sign out of your account.',
			signOutButton: 'Sign out',
			deleteAccountHeader: 'Delete Account',
			deleteAccountSubHeader:
				'Once you delete your account, there is no going back. Please be certain.',
			deleteAccountButton: 'Delete your account',
			deleteModal: {
				cancel: 'Cancel',
				header: 'You are about to delete your user:',
				subHeader: 'All saved data, groups, policies and configurations will be lost',
				actionText: 'To confirm, type',
				inputPlaceholder: 'Type here',
				actionPhraseText: 'DELETE-USER',
				confirmButton: 'Confirm',
			},
		},
		copyNotification: {
			title: 'ID Copied to clipboard',
			message: 'Paste it wherever you want.',
		},
		secretManagement: {
			actionHeader: 'Secret Management',
			actionSubHeaderPrefix: 'Create secrets for',
			actionSubHeaderPostfix: 'our GitHub action',
			generateNewSecretButton: 'Generate new secret',
			noSecrets: 'No Secrets Created!',
			secretExpirationPrefix: 'Expires on',
			secretExpirationNeverExpires: 'Never expires',
			refreshSecretAction: 'Refresh Secret',
			deleteSecretAction: 'Delete',
			revokeAllSecretAction: 'Revoke All',
			postSecretCreationDisclaimer:
				"Make sure to copy the secret now. You won't be able to see it again!",
			copyNotificationTitle: 'Secret copied to clipboard',
			copyNotificationMessage: 'Paste it wherever you want.',
		},
		newSecret: {
			actionHeader: 'New Secret',
			nameInputLabel: 'Secret name',
			secretUsageHint: "What's this secret for?",
			secretExpirationHint: 'This secret will expire on',
			generateButton: 'Generate Secret',
			cancelButton: 'Cancel',
			dateSelect: {
				days: 'days',
				custom: 'Custom',
				noExpiration: 'No expiration',
			},
		},
	},
	cliAuth: {
		header: 'Authenticate for CLI',
		commandText: {
			prefix: "You've reached this page because you ran the",
			postfix: 'command from our CLI.',
		},
		buttonInstruction:
			'Click below to authenticate your machine, so we can confirm that Exlint CLI can be associated with your accout.<br />Once completed, you can continue working from the terminal.',
		buttonText: 'Authenticate',
	},
	cliAuthenticated: {
		header: 'Authenticated!',
		text: 'You can now close the window and start coding in best practices.',
	},
	notFound: {
		header: {
			documentationLink: 'Documentation',
		},
		message: "As far as we know,<br />This page doesn't exist!",
		actions: {
			linkText: 'Return To Group Center',
			textPrefix: "If you believe this shouldn't have happened, please contact us at",
		},
	},
	nav: {
		groupCenter: 'Group Center',
		accountSettings: 'Account Settings',
		documentation: 'Documentation',
	},
	groupCenter: {
		defaultGroupName: 'Group Label',
		sideBar: {
			searchInputPlaceholder: 'Search Groups',
			newGroupAction: 'New',
			noGroupsHeader: 'Create your first group',
			uniqueId: 'Unique ID',
			policies: 'Policies',
			copyNotification: {
				title: 'ID Copied to clipboard',
				message: 'Paste it wherever you want.',
			},
		},
		newGroup: {
			headerTitle: 'New Group',
			tabs: {
				groupCreation: 'Group Creation',
			},
			content: {
				title: 'Create a new group',
				subTitle:
					'A group is a centralized compliance, which contains a bundle of policies that can be run together against code.',
				groupLabelInputLabel: 'Group label',
				groupLabelInputPlaceholder: 'Enter a name for the group...',
				groupDescriptionInputLabelPrefix: 'Description',
				groupDescriptionInputLabelPostfix: 'optional',
				createGroupButton: 'Create Group',
			},
		},
	},
	labelAvailability: {
		isAvailable: 'Label available!',
		isUnavailable: 'Label unavailable. Try another?',
	},
};

export default en;
