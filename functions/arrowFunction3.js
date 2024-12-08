let thisCompare = function(param) {
  console.log(this === param);
};

thisCompare(global);

const obj = {};
thisCompare = thisCompare.bind(obj);
thisCompare(global);
thisCompare(obj);

let thisCompareArrow = param => console.log(this === param);
thisCompareArrow(global);
thisCompareArrow(this);
thisCompareArrow(module.exports);

thisCompareArrow = thisCompareArrow.bind(obj);
thisCompareArrow(obj);
thisCompareArrow(module.exports);
