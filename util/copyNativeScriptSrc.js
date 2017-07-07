const fs = require('fs');
const rimraf = require('rimraf');
const ncp = require('ncp').ncp;
const mkdirp = require('mkdirp');

// rimraf async wrapper
const rimrafAsync = async (target) => {
	return new Promise((resolve, reject) => {
		rimraf(target, err => {
			err ? reject(err) : resolve();
		});
	});
};

// mkdirp async wrapper
const mkdirpAsync = async (target) => {
	return new Promise((resolve, reject) => {
		mkdirp(target, (err) => {
			err ? reject(err) : resolve();
		});
	});
};

// ncp async wrapper
const ncpAsync = async (src, dest, transformFnc) => {
	return new Promise((resolve, reject) => {
		const callbackFnc = (err) => {
			err ? reject(err) : resolve();
		};

		(transformFnc === undefined) ?
			// simple copy
			ncp(src, dest, callbackFnc) :
			// copy with transform. callback is needed, but not working on console.log()
			ncp(src, dest, {
				transform : transformFnc
			}, callbackFnc);
	});
};


// runner
(async () => {
	// delete before source
	await rimrafAsync('./nativescript/app');

	// make source root folder to copy common files
	await mkdirpAsync('./nativescript/app');
	await mkdirpAsync('./nativescript/app/app');

	// copy common files
	await ncpAsync('./src/client/common', './nativescript/app/app/common');

	// copy NativeScript source files
	await ncpAsync('./src/client/ns', './nativescript/app', (read, write) => {
		// modifying target is '.ts' file in 'components' folder
		if ((read.path.indexOf('\\components\\') !== -1)
			&& (read.path.indexOf('.ts') === (read.path.length - 3))) {

			fs.readFile(read.path, 'utf8', (err, data) => {
				if (err) {
					throw err;
				}

				// change path of common files
				const result = data.replace(
					/..\/..\/..\/common\//g,
					'../common/'
				);

				fs.writeFile(write.path, result, 'utf8', (err) => {
					if (err) {
						throw err;
					}

					return null;
				});
			});
		}
		else {
			read.pipe(write);
		}
	});
})();
