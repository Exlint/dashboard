---
to: src/components/containers/<%= h.changeCase.pascalCase(name.toLowerCase()) %>/<%= h.changeCase.pascalCase(name.toLowerCase()) %>.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import <%= h.changeCase.pascalCase(name) %>View from './<%= h.changeCase.pascalCase(name) %>.view';

interface IProps {}

const <%= h.changeCase.pascalCase(name) %>: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <<%= h.changeCase.pascalCase(name) %>View />;
};

<%= h.changeCase.pascalCase(name) %>.displayName = '<%= h.changeCase.pascalCase(name) %>';
<%= h.changeCase.pascalCase(name) %>.defaultProps = {};

export default React.memo(<%= h.changeCase.pascalCase(name) %>);
