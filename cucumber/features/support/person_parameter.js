const { defineParameterType } = require('cucumber');
const Person = require('../../src/app/shouty');

defineParameterType({
  name: 'person',
  regexp: /Lucy|Sean/,
  transformer: name => new Person(name),
});
