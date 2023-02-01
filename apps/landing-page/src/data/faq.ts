export const faq = [
	{
		question: 'What is a policy group run?',
		answer: 'A policy is a set of rules that analyze code. When a group of policies run together, the CLI goes through the code and looks for potential errors that match the rules in the group’s policies.',
		isClickable: false,
	},
	{
		question: 'Do you require access to source code?',
		answer: 'No, we will never need access to source code. Exlint either runs locally through our CLI, or through your CI/CD Pipeline.',
		isClickable: false,
	},
	{
		question: 'Is there a public roadmap?',
		answer: 'Yes, right',
		isClickable: true,
		url: 'https://github.com/orgs/Exlint/projects/3',
	},
	{
		question: 'What support do you provide?',
		answer: 'We offer support via our Discord, in-app support and Github issues. ',
		isClickable: false,
	},
	{
		question: 'What languages do you support?',
		answer: 'We currently mainly support Javascript, but will support more languages in the future. Stay tuned in our Roadmap!',
		isClickable: false,
	},
];
