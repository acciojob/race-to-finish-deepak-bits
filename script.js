window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function promiseFactory() {
	const time = Math.floor(Math.random() * 5) + min;
	return new Promise((resolve, reject) => {
		resolve(`I got resolved after ${time} seconds`);
	}, time * 1000);
}

for(let i = 0; i < n; i++) {
	promises.push(promiseFactory());
}

Promise
	.any(promises)
	.then(value => document.getElementById('output').textContent = value);