/**
 * Created by Han on 2017-07-08.
 */

const fs = require('fs');

// get Angular CLI webpack config file
const filePath = 'node_modules/@angular/cli/models/webpack-configs/common.js';
const config = fs.readFileSync(filePath).toString();

const pugSetting = "{ test : /\.pug$/, loader : ['raw-loader', 'pug-html-loader'] }";

if (config.indexOf(pugSetting) === -1) {
	const targetStr = 'rules: [';
	const whiteStr = '\n                '; // for indent

	fs.writeFileSync(filePath, config.replace(targetStr, targetStr + whiteStr + pugSetting), {
		encoding : 'UTF-8'
	});

	console.log('addPugToNgCli : pug setting added');

}
else {
	console.log('addPugToNgCli : already added, do nothing');
}
