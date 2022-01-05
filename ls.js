const fs = require('fs');
const yargs = require('yargs').argv
const chalk = require('chalk')

console.log(yargs)
if (yargs.l) {
	// [ls.js, npm.js,]
	//-l
	if (yargs.l == true) {
		fs.readdirSync("./").forEach(file => {
			fs.stat(file, (err, stats) => {
				console.log(`${chalk.yellow(file)}  ${chalk.green(stats.birthtime)}  ${chalk.red("size:"+stats.size)}  ${chalk.blue("mode:"+stats.mode)}`)
			})
		});
	} else {
		fs.readdirSync(yargs.l).forEach(file => {
			fs.stat(yargs.l + '/' + file, (err, stats) => {
				console.log(`${chalk.yellow(file)}  ${chalk.green(stats.birthtime)}  ${chalk.red("size:"+stats.size)}  ${chalk.blue("mode:"+stats.mode)}`)
			})
		});
	}
} else {
	// -l gui
	if (yargs._[0] == undefined) {

		fs.readdirSync("./").forEach(file => {
			console.log(`${chalk.red(file)} `);
		});
	} else {
		//zamaa ugsn bn
		fs.readdirSync(yargs._[0]).forEach(file => {
			console.log(`${chalk.red(file)} `);
		});
	}

}