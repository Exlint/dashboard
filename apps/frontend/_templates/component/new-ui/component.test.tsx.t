---
to: src/components/ui/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>.test.tsx
---
<% name = name.toLowerCase() %>import React from 'react';
import { render } from '@testing-library/react';

import V<%= h.changeCase.pascalCase(name) %> from './V<%= h.changeCase.pascalCase(name) %>';

describe('<V<%= h.changeCase.pascalCase(name) %>>', () => {
	it('Should render the component unchanged', () => {
		const { container } = render(<V<%= h.changeCase.pascalCase(name) %> />);

		expect(container).toMatchSnapshot();
	});
});
