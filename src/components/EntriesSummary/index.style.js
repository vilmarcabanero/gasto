import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import { FaEquals } from 'react-icons/fa'

export const Container = styled.div`
	/* box-shadow: var(--box-shadow); */
	padding: 0;
	display: flex;
	justify-content: space-between;
	margin: 20px 0;
	/* border: 1px solid #dedede; */
	border: 1px solid rgba(200, 200, 200, 0.5);
	border-radius: 5px;
`

export const Title = styled.h2`
	margin: 0;
	font-size: 16px;
	position: relative;
`
export const IncomeContainer = styled.div`
	flex: 1;
	text-align: left;
	padding-left: 2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	border-right: 1px solid rgba(200, 200, 200, 0.5);

	@media (max-width: 576px) {
		padding-left: 1.5rem;
	}

	@media (max-width: 360px) {
		padding-left: 0.75rem;
	}
`

export const BalanceContainer = styled.div`
	flex: 1;
	text-align: left;
	padding-left: 2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;

	@media (max-width: 576px) {
		padding-left: 1.5rem;
	}
	@media (max-width: 360px) {
		padding-left: 0.75rem;
	}
`

export const ExpenseContainer = styled.div`
	flex: 1;
	text-align: left;
	padding-left: 2rem;
	margin-top: 1rem;
	margin-bottom: 1rem;
	border-right: 1px solid rgba(200, 200, 200, 0.5);
	@media (max-width: 576px) {
		padding-left: 1.5rem;
	}
	@media (max-width: 360px) {
		padding-left: 0.75rem;
	}
`

export const Amount = styled.p`
	font-size: 20px;
	letter-spacing: 1px;
	margin: 5px 0;
	padding-left: 1.5rem;
	@media (max-width: 576px) {
		padding-left: 1.5rem;
	}
	/* color: #2ecc71; */
`

export const PlusIcon = styled(Add)`
	position: relative;
	top: 25px;
	right: 7px;
	color: #2ecc71;
	border-radius: 50%;
	background-color: rgba(45, 204, 113, 0.25);
	box-shadow: 0px 0px 2px 1px white;
`

export const MinusIcon = styled(Remove)`
	position: relative;
	top: 25px;
	right: 7px;
	color: #c0392b;
	border-radius: 50%;
	background-color: rgba(192, 57, 43, 0.25);
	box-shadow: 0px 0px 2px 1px white;
`

export const EqualsIcon = styled(FaEquals)`
	position: relative;
	top: 25px;
	right: 7px;
	color: #5a72d8;
	font-size: 1.5rem;
	padding: 5px;
	border-radius: 50%;
	background-color: rgba(90, 114, 216, 0.25);
	box-shadow: 0px 0px 2px 1px white;
`
