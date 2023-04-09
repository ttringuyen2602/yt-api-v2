const util = require("util");
const exec = util.promisify(require("child_process").exec);

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});
