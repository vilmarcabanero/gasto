import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import moment from 'moment';

const MultiAxisLine = () => {
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
			return filteredMonthlyExpenses.push(0);
		} else {
			return filteredMonthlyExpenses.reduce((acc, currVal) => acc + currVal);
		}
	};

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
