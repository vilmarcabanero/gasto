export const time = (min, hr) => {
	if (min < 10) {
		min = '0' + min;
	}

	let ampm = 'AM';

	if (hr >= 12) {
		hr -= 12;
		ampm = 'PM';
	}

	if (hr === 0) {
		hr = 12;
	}

	if (hr < 10) {
		hr = '0' + hr;
	}

	return `${hr}:${min} ${ampm}`;
};

export const date = (enteredDate, dateNow, day, month, year) => {
	if (enteredDate.toLocaleDateString() === dateNow) {
		// return 'Today'
		return `${day}, ${month} ${year}`;
	} else {
		return `${day}, ${month} ${year}`;
	}
};
