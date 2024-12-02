function onlyGoodNews(grade) {
  if (grade >= 7) console.log("Approved: " + grade);
}

onlyGoodNews(7.1);
onlyGoodNews(6.7);

function speakIfTrue(value) {
  if (value) console.log("It's true: " + value);
  else console.log("It's false: " + value);
}

speakIfTrue();
speakIfTrue(null);
speakIfTrue(undefined);
speakIfTrue(NaN);
speakIfTrue("");
speakIfTrue(0);
speakIfTrue(-1);
speakIfTrue(" ");
speakIfTrue("?");
speakIfTrue([]);
speakIfTrue([1, 2]);
speakIfTrue({});

function test(num) {
  if (num > 7) {
    console.log(num);
  }
  console.log("final");
}

test(6);
test(8);
