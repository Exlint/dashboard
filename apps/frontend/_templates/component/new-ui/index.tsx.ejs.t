---
to: src/components/ui/ED<%= h.changeCase.pascalCase(name.toLowerCase()) %>/index.ts
---
<% name = name.toLowerCase() %>import ED<%= h.changeCase.pascalCase(name) %> from './ED<%= h.changeCase.pascalCase(name) %>';

export default ED<%= h.changeCase.pascalCase(name) %>;
