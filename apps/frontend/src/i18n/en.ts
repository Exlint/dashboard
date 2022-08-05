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
	policySidebar: {
		header: {
			title: 'Back to',
		},
		body: {
			createdAt: 'Created in:',
			details: {
				library: 'Library',
				type: 'Type',
				category: 'Category',
				rules: 'Rules',
			},
		},
		policySidebarModal: {
			header: 'Are you sure you want to delete ',
			subHeader: ' Policy?',
			details: 'Once deleted, this can’t be undone. To confirm, type ',
			inputPlaceholder: 'Type here',
			confirmButton: 'Delete Policy',
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
