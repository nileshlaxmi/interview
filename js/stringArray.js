const data1 = 'Jordan Smith';

const data2 = [].filter.call(data1, function(elem, index) {
  return index > 6;
});

console.log(data2);