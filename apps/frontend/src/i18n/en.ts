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
				subHeader: 'All saved data, compliances, policies and configurations will be lost',
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
			documentationLink: 'Documentations',
		},
		message: "As far as we know,<br />This page doesn't exist!",
		actions: {
			linkText: 'Return To Compliance Center',
			textPrefix: "If you believe this shouldn't have happened, please contact us at",
		},
	},
	nav: {
		complianceCenter: 'Compliance Center',
		accountSettings: 'Account Settings',
		documentation: 'Documentations',
	},
	complianceCenter: {
		uniqueId: 'Unique ID',
		sideBar: {
			searchInputPlaceholder: 'Search Compliances',
			newComplianceAction: 'New',
			noCompliancesHeader: 'Create your first Compliance',
			policies: 'Policies',
		},
		newCompliance: {
			headerTitle: 'New Compliance',
			tabs: {
				complianceCreation: 'Compliance Creation',
			},
			content: {
				title: 'Create a new compliance',
				subTitle:
					'A Compliance is a centralized coding standard which contains a bundle of policies that can be run together against code.',
				complianceLabelInputLabel: 'Compliance label',
				complianceLabelInputPlaceholder: 'Enter a name for the compliance...',
				complianceDescriptionInputLabelPrefix: 'Description',
				complianceDescriptionInputLabelPostfix: 'optional',
				createComplianceButton: 'Create Compliance',
			},
		},
		tabs: {
			policies: 'Policies',
			settings: 'Settings',
		},
		settings: {
			tab: 'Compliance Settings',
			informationTitle: 'Information',
			deleteTitle: 'Delete',
			complianceLabelLabel: 'Compliance label',
			complianceLabelInputPlacehoder: 'Enter a new compliance label...',
			submitButton: 'Save Changes',
			deleteInstruction: 'Deleting ‘{{label}}’ can’t be undone. Please be certain.',
			deleteButton: 'Delete ‘{{label}}’',
			deleteModal: {
				header: 'Are you sure you want to delete ‘{{label}}’ Compliance?',
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
		compliance: 'Compliance',
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
				form: 'Selection-Based Configuration',
				code: 'Code-Based Configuration',
				configuration: 'Configuration',
				fileList: 'File List',
				ignoreList: 'Ignore List',
			},
			comingSoonNotificationTitle: 'Feature coming soon!',
		},
		rules: {
			switchInstruction: 'Selection-based configuration',
			new: 'New',
			description: {
				aboutHeader: 'About',
				libraryType: 'Type:',
				libraryCategory: 'Category:',
				creation: 'Created in:',
			},
			table: {
				header: 'Rules',
				columns: {
					ruleName: 'Rule Name',
					category: 'Category',
					configuration: 'Configuration',
					autofix: 'Autofix',
					remove: 'Remove',
				},
				placeholderHeader: 'This looks empty...',
				placeholderBottomText: 'Start enabling & configuring rules<br />using our selection tool.',
				blurHeader: 'You are currently configuring using <strong>Code Configuration:</strong>',
				blurFirstTextPrefix: 'To configure rules using <strong>Code</strong>, head to',
				blurFirstTextPostfix: 'Code Configuration Section',
				blurSecondTextPrefix: 'To configure rules using <strong>Selection</strong>, toggle',
				blurSecondTextPostfix: 'the configuration method',
			},
		},
		rulesList: {
			filters: {
				allRules: 'All Rules',
				enabled: 'Enabled',
				notEnabled: 'Not Enabled',
				searchPlaceholder: 'Search rules by name, description, category...',
				ruleCategory: 'Rule Category:',
			},
			selectedCount: 'Selected:',
			allCategoriesFilter: 'All Rule Categories',
			autofixFilter: 'Autofix Rules Only',
			sort: {
				prefix: 'Sort',
				default: 'Default',
				alphabetic: 'A-Z',
			},
			configureRule: 'Configure Rule',
			ruleHasAutofix: 'Autofix',
			ruleConfigurations: {
				title: 'Rule Configuration',
				saveConfiguration: 'Save Configuration',
				instruction:
					'Select a rule and start configuring!<br />Choose between different alert types,<br />and much more.',
				configureRule: 'Configure Rule',
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
		switch: {
			toFormNotificationTitle: 'Configuration method set to Selection-Based',
			toCodeNotificationTitle: 'Configuration method set to Code-Based',
			toFormNotificationDescription: 'Code-Based disabled (only one method can be enabled at a time).',
			toCodeNotificationDescription:
				'Selection-Based disabled (only one method can be enabled at a time).',
		},
	},
};

export default en;
