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
		deleteUserAction: 'Delete User',
		logoutAction: 'Log Out',
	},
	userSettingsModal: {
		bar: 'Cancel',
		upperText: 'You are about to delete your user:',
		middleText: 'All saved data, groups, policies and configurations will be lost',
		lowerText: 'To confirm, type',
		subLowerText: 'DELETE-USER',
		confirmButton: 'Confirm',
	},
	settingsSidebar: {
		title: 'Settings',
		subText: 'Username',
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
	},
};

export default en;
