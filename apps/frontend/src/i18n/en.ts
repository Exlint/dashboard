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
	copyNotification: {
		title: 'ID Copied to clipboard',
		message: 'Paste it wherever you want.',
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
				header: 'You are about to delete your user:',
				subHeader: 'All saved data, groups, policies and configurations will be lost',
				actionPhraseText: 'DELETE-USER',
			},
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
		uniqueId: 'Unique ID',
		sideBar: {
			searchInputPlaceholder: 'Search Groups',
			newGroupAction: 'New',
			noGroupsHeader: 'Create your first group',
			policies: 'Policies',
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
		tabs: {
			policies: 'Policies',
			history: 'History',
			settings: 'Settings',
		},
		settings: {
			tab: 'Group Settings',
			informationTitle: 'Information',
			deleteTitle: 'Delete',
			groupLabelLabel: 'Group label',
			groupLabelInputPlacehoder: 'Enter a new group label...',
			submitButton: 'Save Changes',
			deleteInstruction: 'Deleting ‘{{label}}’ can’t be undone. Please be certain.',
			deleteButton: 'Delete ‘{{label}}’',
			deleteModal: {
				header: 'Are you sure you want to delete ‘{{label}}’ Group?',
				subHeader: 'Once deleted, this can’t be undone.',
			},
			saveChangesNotification: {
				title: 'Changes saved',
			},
		},
		policies: {
			aboutHeader: 'About',
			descriptionPlaceholder: 'Got any notes?',
			table: {
				header: 'Policies',
				newButton: 'New',
				columns: {
					label: 'Label',
					library: 'Library',
					language: 'Language',
				},
				placeholderHeader: 'Create your first policy',
				createPolicyLeft: 'Select a library',
				createPolicyRight: 'Choose your own rules<br/>or use a recommended policy',
			},
		},
	},
	labelAvailability: {
		isAvailable: 'Label available!',
		isUnavailable: 'Label unavailable. Try another?',
	},
	deleteModal: {
		cancel: 'Cancel',
		actionText: 'To confirm, type',
		inputPlaceholder: 'Type here',
		confirmButton: 'Confirm',
	},
	table: {
		of: 'of',
		items: 'items',
		pages: 'pages',
	},
	newPolicy: {
		formHeader: 'Create a new policy',
		formSubHeader:
			'A policy contains a custom-made rule set and configurations, including CLI usage history.',
		group: 'Group',
		policyLabel: 'Policy label',
		descriptionLabel: 'Description',
		descriptionLabelPostfix: '(optional)',
		librarySelection: {
			header: 'Choose a Library',
			filterInputPlaceholder: 'Search Library',
			selectPrefix: 'Sort',
			languageSort: 'Language',
			filters: {
				all: 'All',
				languageTitle: 'Language',
				typeFilter: 'Types',
				categoryFilter: 'Categories',
				agnostic: 'Agnostic',
				linters: 'Linters',
				formatters: 'Formatters',
				code: 'Code',
				fileSystem: 'File System',
				styles: 'Styles',
				dependencies: 'Dependecies',
			},
			selected: 'Selected',
		},
		formSubmit: 'Create Policy',
	},
	policy: {
		header: {
			libraryPrefix: 'Library',
			tabs: {
				rules: 'Rules',
				configurations: 'Configurations',
				history: 'History',
				settings: 'Settings',
			},
		},
		settings: {
			informationTitle: 'Information',
			policyLabelLabel: 'Policy label',
			policyLabelInputPlacehoder: 'Enter a new policy label...',
			submitButton: 'Save Changes',
			saveChangesNotification: {
				title: 'Changes saved',
			},
			tab: 'Policy Settings',
			deleteTitle: 'Delete Policy',
			deleteInstruction: 'Deleting ‘{{label}}’ can’t be undone. Please be certain.',
			deleteModal: {
				header: 'Are you sure you want to delete ‘{{label}}’ Policy?',
				subHeader: 'Once deleted, this can’t be undone.',
			},
			deleteButton: 'Delete ‘{{label}}’',
		},
		configurations: {
			tabs: {
				form: 'Form-Based Configuration',
				code: 'Code-Based Configuration',
				configuration: 'Configuration',
				fileList: 'File List',
				ignoreList: 'Ignore List',
			},
		},
	},
	textCode: {
		submit: 'Save Changes',
	},
	configCode: {
		fileType: 'File Type',
		submit: 'Save Changes',
	},
	formConfiguration: {
		submit: 'Save Changes',
	},
};

export default en;
