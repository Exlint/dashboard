---
to: src/components/layout/<%= h.changeCase.pascalCase(name.toLowerCase()) %>/index.ts
---
<% name = name.toLowerCase() %>import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>';

export default <%= h.changeCase.pascalCase(name) %>;
