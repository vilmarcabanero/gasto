export const uniqueId = () => {
    return Math.round(Math.random() * 1000000);
}

//Money formatter function
export const moneyFormatter = num => {
	let p = num.toFixed(2).split('.')
	return (
		'₱ ' +
		p[0]
			.split('')
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc
			}, '') +
		'.' +
		p[1]
	)
}
