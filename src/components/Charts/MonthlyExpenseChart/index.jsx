import React from 'react';
import { Bar } from 'react-chartjs-2';

const VerticalBar = () => {
	const monthlyExpenses = [
		7503, 6863, 6505, 7503, 6507, 7125, 5951, 6504, 8550, 9035, 7505, 6259,
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
