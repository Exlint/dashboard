---
to: src/components/ui/ED<%= h.changeCase.pascalCase(name.toLowerCase()) %>/ED<%= h.changeCase.pascalCase(name.toLowerCase()) %>.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import ED<%= h.changeCase.pascalCase(name) %>View from './ED<%= h.changeCase.pascalCase(name) %>.view';

interface IProps {}

const ED<%= h.changeCase.pascalCase(name) %>: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <ED<%= h.changeCase.pascalCase(name) %>View />;
};

ED<%= h.changeCase.pascalCase(name) %>.displayName = 'ED<%= h.changeCase.pascalCase(name) %>';
ED<%= h.changeCase.pascalCase(name) %>.defaultProps = {};

export default React.memo(ED<%= h.changeCase.pascalCase(name) %>);
