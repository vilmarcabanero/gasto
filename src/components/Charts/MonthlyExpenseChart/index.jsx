import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import moment from 'moment';

const VerticalBar = () => {
	const entries = useSelector(state => state.entries);

	const getMonthlyExpenses = (entries, month) => {
		const filteredMonthlyExpenses = entries
			.filter(
				entry =>
					entry.type === 'expense' &&
					parseInt(moment(entry.date).format('M')) === month
			)
			.map(entry => entry.amount);

		if (!filteredMonthlyExpenses.length) {
			return 0;
		} else {
			return filteredMonthlyExpenses.reduce((acc, currVal) => acc + currVal);
		}
	};

	const monthlyExpenses = [
		getMonthlyExpenses(entries, 1),
		getMonthlyExpenses(entries, 2),
		getMonthlyExpenses(entries, 3),
		getMonthlyExpenses(entries, 4),
		getMonthlyExpenses(entries, 5),
		getMonthlyExpenses(entries, 6),
		getMonthlyExpenses(entries, 7),
		getMonthlyExpenses(entries, 8),
		getMonthlyExpenses(entries, 9),
		getMonthlyExpenses(entries, 10),
		getMonthlyExpenses(entries, 11),
		getMonthlyExpenses(entries, 12),
	];

	const data = {
		labels: [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December',
		],
		datasets: [
			{
				label: 'Amount in PHP',
				data: monthlyExpenses,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 1,
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	};

	return (
		<>
			<div className='header'>
				<h1 className='title text-center'>Monthly Expense Chart</h1>
			</div>
			<Bar data={data} options={options} />
		</>
	);
};

export default VerticalBar;
