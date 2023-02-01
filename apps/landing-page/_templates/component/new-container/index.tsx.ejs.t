---
to: src/components/containers/<%= h.changeCase.pascalCase(pageName.toLowerCase()) %>/<%= h.changeCase.pascalCase(containerName.toLowerCase()) %>/index.ts
---
<% name = containerName.toLowerCase() %>import <%= h.changeCase.pascalCase(name) %> from './<%= h.changeCase.pascalCase(name) %>';

export default <%= h.changeCase.pascalCase(name) %>;
