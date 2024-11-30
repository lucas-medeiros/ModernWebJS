function scream_name(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    handleError(e);
  } finally {
    console.log("finally...");
  }
}

function handleError(error) {
  throw new Error("Something went wrong... :(");
}

const obj = { name: "Lucas" };
scream_name(obj);

const obj2 = { last_name: "Lucas" };
scream_name(obj2);
