---
to: src/components/ui/V<%= h.changeCase.pascalCase(name.toLowerCase()) %>/index.ts
---
<% name = name.toLowerCase() %>import V<%= h.changeCase.pascalCase(name) %> from './V<%= h.changeCase.pascalCase(name) %>';

export default V<%= h.changeCase.pascalCase(name) %>;
