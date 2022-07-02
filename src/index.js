module.exports = function reverse (n) {
	n = Math.abs(n);
	let array = [];
	let str = String(n);
	for (let i = 0; i < str.length; i++) {
	array[i] = str[i];
	}
	array.reverse();
	let strRev ;
	for (let j = 0; j <= array.length; j++) {
	strRev = strRev + array[j];
	}
	let delUndefined = strRev.slice(9, array.length + 9);
	let numRev = Number(delUndefined);
	//console.log(numRev);
	//console.log(typeof numRev);
	return numRev;
	//console.log(strRev);
}
