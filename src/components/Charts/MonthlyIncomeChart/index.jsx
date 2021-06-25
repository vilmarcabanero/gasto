import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import moment from 'moment';

const VerticalBar = () => {
	const entries = useSelector(state => state.entries);

	const getMonthlyIncome = (entries, month) => {
		const filteredMonthlyIncome = entries
			.filter(
				entry =>
					entry.type === 'income' &&
					parseInt(moment(entry.date).format('M')) === month
			)
			.map(entry => entry.amount);

		if (!filteredMonthlyIncome.length) {
			return 0;
		} else {
			return filteredMonthlyIncome.reduce((acc, currVal) => acc + currVal);
		}
	};

	const monthlyIncome = [
		getMonthlyIncome(entries, 1),
		getMonthlyIncome(entries, 2),
		getMonthlyIncome(entries, 3),
		getMonthlyIncome(entries, 4),
		getMonthlyIncome(entries, 5),
		getMonthlyIncome(entries, 6),
		getMonthlyIncome(entries, 7),
		getMonthlyIncome(entries, 8),
		getMonthlyIncome(entries, 9),
		getMonthlyIncome(entries, 10),
		getMonthlyIncome(entries, 11),
		getMonthlyIncome(entries, 12),
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
				data: monthlyIncome,
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
				<h1 className='title text-center'>Monthly Income Chart</h1>
			</div>
			<Bar data={data} options={options} />
		</>
	);
};

export default VerticalBar;
