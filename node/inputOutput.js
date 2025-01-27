const flag = process.argv.indexOf("-f") !== -1;
console.log("flag :>> ", flag);

if (flag) {
  process.stdout.write("Hey man!\n");
  process.exit();
} else {
  process.stdout.write("Inform your name: ");
  process.stdin.on("data", data => {
    const name = data.toString().replace("\n", "");
    process.stdout.write(`Hey ${name}!!\n`);
    process.exit();
  });
}
