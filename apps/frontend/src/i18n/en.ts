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
	tokenManagement: {
		clientId: 'Client ID',
		copied: 'Copied:',
		table: {
			title: 'Secrets',
			revokeAll: 'Revoke All',
			createSecret: 'Create Secret',
			total: 'Total:',
		},
		tokenManagementModal: {
			secretCreationTitle: 'Secret Creation',
			label: 'Label',
			expires: 'Expires',
			createSecretButton: 'Create Secret & Countinue',
			secretTokenTitle: 'Secret Token',
			secretTokenSubTitle: 'Warning: This information will disappear as soon as you exit the window.',
			copy: 'Copy',
			copied: 'Copied!',
			downloadCsv: 'Download .csv',
			done: 'Done',
		},
	},
	userSettings: {
		title: 'User Settings',
		username: 'User',
		deleteUserAction: 'Delete user',
		logoutAction: 'Log-out',
		userSettingsModal: {
			cancelButton: 'Cancel',
			header: 'You are about to delete your user:',
			details: 'All saved data, groups, policies and configurations will be lost',
			actionText: 'To confirm, type',
			actionPhraseText: 'DELETE-USER',
			inputPlaceholder: 'Type here',
			confirmButton: 'Confirm',
		},
	},
	settingsSidebar: {
		title: 'Settings',
		username: 'Username',
	},
	groupCenter: {
		newGroupLabel: 'New Group',
		groupDetails: {
			groupInfo: {
				uniqId: 'Unique ID:',
				copied: 'Copied!',
				deleteGroup: 'Delete Group',
			},
			policies: {
				header: 'Policies',
				orderNumber: '#',
				label: 'Label',
				library: 'Library',
				category: 'Category',
				numberOfRules: 'Num. of Rules',
				newPolicyButton: 'New',
				noPolicies: {
					header: 'Create your first Policy',
					description: 'Choose a Library',
					rulesStep: 'Build your own rules <br /> or choose a recommended policy',
					order: '#',
					label: 'Label',
					library: 'Library',
					category: 'Category',
					numOfRules: 'Num. of rules',
					configurations: 'Configurations',
				},
				policiesList: {
					editConfig: 'Edit Config',
				},
			},
		},
		groupSideBar: {
			newGroupButton: 'New',
			noGroup: {
				header: 'Create your first Group',
			},
			group: {
				uniqId: 'Unique ID:',
				policies: 'Policies:',
				additional: '+ Additional..',
				copy: 'Copy',
				copied: 'Copied!',
			},
		},
		newPolicy: {
			header: 'New Policy',
			label: 'Label:',
			library: 'Library:',
			sideBarFilter: {
				typesTitle: 'Types',
				categoriesTitle: 'Categories',
				allButton: 'All',
			},
			policyConfiguration: {
				button: 'Continue to Policy Configuration',
			},
			librariesList: {
				library: {
					madeBy: 'by',
				},
			},
		},
		redirect: {
			header: 'You are being redirected',
			subText: 'If nothing happens, please click',
			subTextLinkPostfix: 'here',
		},
		externalAction: {
			footerText:
				'If you believe something is wrong or have other security concerns, please contact us at',
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
			linkText: 'Return Home',
			textPrefix: "If you believe this shouldn't have happened, please contact us at",
		},
	},
};

export default en;
