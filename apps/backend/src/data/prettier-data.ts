import type { ILibraryData } from '@exlint-dashboard/common';

export const prettierData: ILibraryData = {
	name: 'Prettier',
	author: 'prettier.io',
	description: 'Prettier is an opinionated code formatter.',
	types: ['Formatters'],
	categories: ['Code'],
	language: 'Agnostic',
	configuration: {
		printWidth: {
			title: 'Print Width',
			description: 'Specify the line length that the printer will wrap on.',
			type: 'number',
		},
		tabWidth: {
			title: 'Tab Width',
			description: 'Specify the number of spaces per indentation-level.',
			type: 'number',
		},
		useTabs: {
			title: 'Tabs',
			description: 'Indent lines with tabs instead of spaces.',
			type: 'boolean',
		},
		semi: {
			title: 'Semicolons',
			description: 'Print semicolons at the ends of statements.',
			type: 'boolean',
		},
		singleQuote: {
			title: 'Quotes',
			description: 'Use single quotes instead of double quotes.',
			type: 'boolean',
		},
		quoteProps: {
			title: 'Quote Props',
			description: 'Change when properties in objects are quoted.',
			type: 'select',
			enum: ['as-needed', 'consistent', 'preserve'],
		},
		jsxSingleQuote: {
			title: 'JSX Quotes',
			description: 'Use single quotes instead of double quotes in JSX.',
			type: 'boolean',
		},
		trailingComma: {
			title: 'Trailing Commas',
			description:
				'Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)',
			type: 'select',
			enum: ['es5', 'none', 'all'],
		},
		bracketSpacing: {
			title: 'Bracket Spacing',
			description: 'Print spaces between brackets in object literals.',
			type: 'boolean',
		},
		bracketSameLine: {
			title: 'Bracket Line',
			description:
				'Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).',
			type: 'boolean',
		},
		arrowParens: {
			title: 'Arrow Function Parentheses',
			description: 'Include parentheses around a sole arrow function parameter.',
			type: 'select',
			enum: ['always', 'avoid'],
		},
		rangeStart: {
			title: 'Range Start',
			description: 'Format only a segment of a file',
			type: 'number',
		},
		rangeEnd: {
			title: 'Range End',
			description: 'Format only a segment of a file',
			type: 'number',
		},
		requirePragma: {
			title: 'Require Pragma',
			description:
				'Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file. This is very useful when gradually transitioning large, unformatted codebases to Prettier.',
			type: 'boolean',
		},
		insertPragma: {
			title: 'Insert Pragma',
			description:
				'Prettier can insert a special @format marker at the top of files specifying that the file has been formatted with Prettier. This works well when used in tandem with the --require-pragma option. If there is already a docblock at the top of the file then this option will add a newline to it with the @format marker.',
			type: 'boolean',
		},
		proseWrap: {
			title: 'Prose Wrap',
			description:
				'By default, Prettier will not change wrapping in markdown text since some services use a linebreak-sensitive renderer, e.g. GitHub comments and BitBucket. To have Prettier wrap prose to the print width, change this option to "always". If you want Prettier to force all prose blocks to be on a single line and rely on editor/viewer soft wrapping instead, you can use "never".',
			type: 'select',
			enum: ['always', 'never', 'preserve'],
		},
		htmlWhitespaceSensitivity: {
			title: 'HTML Whitespace Sensitivity',
			description: 'Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars.',
			type: 'select',
			enum: ['css', 'strict', 'ignore'],
		},
		vueIndentScriptAndStyle: {
			title: 'Vue files script and style tags indentation',
			description:
				'Whether or not to indent the code inside <script> and <style> tags in Vue files. Some people (like the creator of Vue) don’t indent to save an indentation level, but this might break code folding in your editor.',
			type: 'boolean',
		},
		endOfLine: {
			title: 'End of Line',
			description:
				'For historical reasons, there exist two common flavors of line endings in text files. That is \\n (or LF for Line Feed) and \\r\\n (or CRLF for Carriage Return + Line Feed). The former is common on Linux and macOS, while the latter is prevalent on Windows',
			type: 'select',
			enum: ['lf', 'crlf', 'cr', 'auto'],
		},
		embeddedLanguageFormatting: {
			title: 'Embedded Language Formatting',
			description: 'Control whether Prettier formats quoted code embedded in the file.',
			type: 'select',
			enum: ['auto', 'off'],
		},
		singleAttributePerLine: {
			title: 'Single Attribute Per Line',
			description: 'Enforce single attribute per line in HTML, Vue and JSX.',
			type: 'boolean',
		},
	},
};
