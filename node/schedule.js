const schedule = require("node-schedule");

const task1 = schedule.scheduleJob("* * * * *", function() {
  console.log("Runing task 1!", new Date().getSeconds());
});

setTimeout(function() {
  task1.cancel();
  console.log("Task 1 cancelled!");
}, 30000);

const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [new schedule.Range(1, 7)];
rule.hour = 23;
rule.second = 30;

const task2 = schedule.scheduleJob(rule, function() {
  console.log("Runing task 2!", new Date().getSeconds());
});
