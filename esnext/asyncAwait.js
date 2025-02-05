function waitFor(delay = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Running promise...");
      resolve();
    }, delay);
  });
}

waitFor(2000)
  .then(() => console.log("Running promise 1"))
  .then(() => waitFor)
  .then(() => console.log("Running promise 2"))
  .then(() => waitFor)
  .then(() => console.log("Running promise 3"))
  .then(() => console.log("End"));

async function execute() {
  await waitFor(1500);
  console.log("Await promise 1");
  await waitFor(1500);
  console.log("Await promise 1");
  await waitFor(1500);
  console.log("Await promise 1");

  return 0;
}

execute().then(console.log);
