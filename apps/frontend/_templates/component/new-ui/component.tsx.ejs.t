---
to: src/components/ui/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import V<%= h.changeCase.pascalCase(name) %>View from './V<%= h.changeCase.pascalCase(name) %>.view';

interface IProps {}

const V<%= h.changeCase.pascalCase(name) %>: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <V<%= h.changeCase.pascalCase(name) %>View />;
};

V<%= h.changeCase.pascalCase(name) %>.displayName = 'V<%= h.changeCase.pascalCase(name) %>';
V<%= h.changeCase.pascalCase(name) %>.defaultProps = {};

export default React.memo(V<%= h.changeCase.pascalCase(name) %>);
