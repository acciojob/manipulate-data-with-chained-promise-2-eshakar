//your JS code here. If required.
function manipulateArrayWithPromises() {
	const outputDiv = document.getElementById('output');

	return new Promise(resolve => {
		const initialArray = [1, 2, 3, 4];
		setTimeout(() => {
			resolve(initialArray);
		}, 3000);
	})
	.then(array => {
		return new Promise(resolve => {
			const filteredArray = array.filter(number => number % 2 === 0);

			setTimeout(() => {
				outputDiv.textContent = filteredArray;
				resolve(filteredArray);
			}, 1000);
		});
	})
	.then(filteredArray => {
		return new Promise(resolve => {
			const multipliedArray = filteredArray.map(number => number * 2);

			setTimeout(() => {
				outputDiv.textContent = multipliedArray;
				resolve(multipliedArray);
			}, 2000);
		});
	})
	.catch(error => {
		console.error('Error in promise chain: ', error);
	});
}

window.addEventListener('DOMContentLoaded', () => {
	manipulateArrayWithPromises();
});


