function sum(a, b) {
	return a + b;
}

let ans = sum(2, 3)
console.log(sum);

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans2 = sum(100);
console.log(ans2);