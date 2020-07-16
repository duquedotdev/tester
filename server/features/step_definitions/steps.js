const { Given, When, Then } = require('cucumber');

Given('Lucy is located {int} meters from Sean', function(distance) {
  console.log(distance);
  return 'pending';
});
When('Sean shouts {string}', function(string) {
  return 'pending';
});
Then("Lucy hears Sean's message", function() {
  return 'pending';
});
