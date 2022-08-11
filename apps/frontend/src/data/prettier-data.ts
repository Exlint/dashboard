import { LibraryCategory } from '../models/library-category';
import { LibraryType } from '../models/library-type';

export const prettierData = {
	name: 'Prettier',
	author: 'prettier.io',
	description: 'Prettier is an opinionated code formatter.',
	type: [LibraryType.Formatters],
	category: [LibraryCategory.Code],
	rules: {
		'Print Width': {
			description: 'Specify the line length that the printer will wrap on.',
			configApi: 'printWidth',
		},
		'Tab Width': {
			description: 'Specify the number of spaces per indentation-level.',
			configApi: 'tabWidth',
		},
		'Tabs': {
			description: 'Indent lines with tabs instead of spaces.',
			configApi: 'useTabs',
		},
		'Semicolons': {
			description: 'Print semicolons at the ends of statements.',
			configApi: 'semi',
		},
		'Quotes': {
			description: 'Use single quotes instead of double quotes.',
			configApi: 'singleQuote',
		},
		'Quote Props': {
			description: 'Change when properties in objects are quoted.',
			configApi: 'quoteProps',
		},
		'JSX Props': {
			description: 'Use single quotes instead of double quotes in JSX.',
			configApi: 'jsxSingleQuote',
		},
		'Trailing Commas': {
			description:
				'Print trailing commas wherever possible in multi-line comma-separated syntactic structures.',
			configApi: 'trailingComma',
		},
		'Bracket Spacing': {
			description: 'Print spaces between brackets in object literals.',
			configApi: 'bracketSpacing',
		},
		'Bracket Line': {
			description:
				'Put the ">" of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).',
			configApi: 'bracketSameLine',
		},
		'Arrow Function Parentheses': {
			description: 'Include parentheses around a sole arrow function parameter.',
			configApi: 'arrowParens',
		},
		'Range Start': {
			description: 'Format only a segment of a file starting at a given character offset',
			configApi: 'rangeStart',
		},
		'Range End': {
			description: 'Format only a segment of a file ending at a given character offset',
			configApi: 'rangeEnd',
		},
		'Require Pragma': {
			description:
				'Prettier can restrict itself to only format files that contain a special comment, called a pragma, at the top of the file.',
			configApi: 'requirePragma',
		},
		'Insert Pragma': {
			description:
				'Prettier can insert a special "@format" marker at the top of files specifying that the file has been formatted with Prettier. This works well when used in tandem with the "--require-pragma" option. If there is already a docblock at the top of the file then this option will add a newline to it with the @format marker.',
			configApi: 'insertPragma',
		},
		'Prose Wrap': {
			description:
				'By default, Prettier will not change wrapping in markdown text since some services use a linebreak-sensitive renderer, e.g. GitHub comments and BitBucket. To have Prettier wrap prose to the print width, change this option to "always". If you want Prettier to force all prose blocks to be on a single line and rely on editor/viewer soft wrapping instead, you can use "never".',
			configApi: 'proseWrap',
		},
		'HTML Whitespace Sensitivity': {
			description: 'Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars.',
			configApi: 'htmlWhitespaceSensitivity',
		},
		'Vue files script and style tags indentation': {
			description:
				"Whether or not to indent the code inside <script> and <style> tags in Vue files. Some people (like the creator of Vue) don't indent to save an indentation level, but this might break code folding in your editor.",
			configApi: 'vueIndentScriptAndStyle',
		},
		'End of Line': {
			description:
				'For historical reasons, there exist two common flavors of line endings in text files. That is "\\n" (or LF for Line Feed) and "\\r\\n" (or CRLF for Carriage Return + Line Feed). The former is common on Linux and macOS, while the latter is prevalent on Windows.',
			configApi: 'endOfLine',
		},
		'Embedded Language Formatting': {
			description: 'Control whether Prettier formats quoted code embedded in the file.',
			configApi: 'embeddedLanguageFormatting',
		},
		'Single Attribute Per Line': {
			description: 'Enforce single attribute per line in HTML, Vue and JSX.',
			configApi: 'singleAttributePerLine',
		},
	},
};
