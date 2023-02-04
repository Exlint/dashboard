---
to: src/components/ui/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>.view.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import classes from './V<%= h.changeCase.pascalCase(name) %>.module.scss';

interface IProps {}

const V<%= h.changeCase.pascalCase(name) %>View: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <React.Fragment></React.Fragment>;
};

V<%= h.changeCase.pascalCase(name) %>View.displayName = 'V<%= h.changeCase.pascalCase(name) %>View';
V<%= h.changeCase.pascalCase(name) %>View.defaultProps = {};

export default React.memo(V<%= h.changeCase.pascalCase(name) %>View);
