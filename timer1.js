const args = process.argv.slice(2);
let checkNumber;
for (let sec of args) {
  checkNumber = Number(sec);
  if (!isNaN(checkNumber) && checkNumber >= 0) {
    setTimeout(() => {
      process.stdout.write(`\x07• ${sec} seconds\n`);
    }, 1000 * sec);
  }
}