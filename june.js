'use strict';

let june = require('wikijs').default().page('june');

module.exports = {
	data : () => june.then(page => page.content()),
	images : () => june.then(page => page.images())
};