import React from 'react';
import * as S from './index.style';
import { useSelector } from 'react-redux';

//Money formatter function
const moneyFormatter = num => {
	let p = num.toFixed(2).split('.');
	return (
		'₱ ' +
		p[0]
			.split('')
			.reverse()
			.reduce(function (acc, num, i, orig) {
				return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
			}, '') +
		'.' +
		p[1]
	);
};

const ExpenseIncomeSummary = () => {
	const entries = useSelector(state => state.entries);

	let expenseEntries = entries.filter(entry => entry.type === 'expense');
	expenseEntries = expenseEntries.map(entry => entry.amount);
	const totalExpense =
		expenseEntries.length === 0
			? 0
			: expenseEntries.length === 1
			? expenseEntries[0]
			: expenseEntries.reduce((acc, currVal) => acc + currVal);

	let incomeEntries = entries.filter(entry => entry.type === 'income');
	incomeEntries = incomeEntries.map(entry => entry.amount);
	const totalIncome =
		incomeEntries.length === 0
			? 0
			: incomeEntries.length === 1
			? incomeEntries[0]
			: incomeEntries.reduce((acc, currVal) => acc + currVal);

	console.log('total expense', totalExpense);
	console.log('total income', totalIncome);
	// console.log('income entries', incomeEntries)

	return (
		<S.Container>
			<S.IncomeContainer>
				<S.Title>
					<S.PlusIcon />
					Cash In
				</S.Title>

				<S.Amount>{moneyFormatter(totalIncome)}</S.Amount>
			</S.IncomeContainer>
			<S.ExpenseContainer>
				<S.Title>
					<S.MinusIcon />
					Cash out
				</S.Title>
				<S.Amount>{moneyFormatter(totalExpense)}</S.Amount>
			</S.ExpenseContainer>
			<S.BalanceContainer>
				<S.Title>
					<S.EqualsIcon />
					Balance
				</S.Title>
				<S.Amount>
					{totalIncome - totalExpense < 0
						? `- ${moneyFormatter(totalIncome - totalExpense)}`
						: moneyFormatter(totalIncome - totalExpense)}
				</S.Amount>
			</S.BalanceContainer>
		</S.Container>
	);
};

export default ExpenseIncomeSummary;
