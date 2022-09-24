---
to: src/components/ui/ED<%= h.changeCase.pascalCase(name.toLowerCase()) %>/ED<%= h.changeCase.pascalCase(name.toLowerCase()) %>.view.tsx
---
<% name = name.toLowerCase() %>import React from 'react';

import classes from './ED<%= h.changeCase.pascalCase(name) %>.module.scss';

interface IProps {}

const ED<%= h.changeCase.pascalCase(name) %>View: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
  return <></>;
};

ED<%= h.changeCase.pascalCase(name) %>View.displayName = 'ED<%= h.changeCase.pascalCase(name) %>View';
ED<%= h.changeCase.pascalCase(name) %>View.defaultProps = {};

export default React.memo(ED<%= h.changeCase.pascalCase(name) %>View);
