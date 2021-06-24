import React from 'react';
import { Line } from 'react-chartjs-2';

const MultiAxisLine = () => {
  const monthlyExpenses = [
		6005, 5503, 6025, 6505, 6003, 7000, 5505, 6203, 6507, 7003, 6756, 5678,
	];

  const monthlyIncome = [
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
				label: 'Expenses',
				data: monthlyExpenses,
				fill: false,
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgba(255, 99, 132, 0.2)',
				yAxisID: 'y-axis-1',
			},
			{
				label: 'Income',
				data: monthlyIncome,
				fill: false,
				backgroundColor: 'rgb(54, 162, 235)',
				borderColor: 'rgba(54, 162, 235, 0.2)',
				yAxisID: 'y-axis-2',
			},
		],
	};

	const options = {
		scales: {
			yAxes: [
				{
					type: 'linear',
					display: true,
					position: 'left',
					id: 'y-axis-1',
				},
				{
					type: 'linear',
					display: true,
					position: 'right',
					id: 'y-axis-2',
					gridLines: {
						drawOnArea: false,
					},
				},
			],
		},
	};

	return (
		<>
			<div className='header'>
				<h1 className='title text-center'>Expense vs Income Trend</h1>
			</div>
			<Line data={data} options={options} />
		</>
	);
};

export default MultiAxisLine;
