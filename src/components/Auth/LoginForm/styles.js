import styled from 'styled-components';

export const Container = styled.div`
	.login-card {
		height: 27rem;
		max-width: 24rem;
		width: 100%;
		margin: auto;
		margin-top: 10rem;
		@media (max-width: 900px) {
			margin-top: 7rem;
		}

		@media (max-width: 767px) {
			margin-top: 2rem;
		}
	}

	.form {
		position: relative;
	}

	.error-container {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: -5rem;
		color: #d8000c;
		font-size: 18px;
		background-color: #ffbaba;
		border-radius: 3px;
		border: 1px solid rgba(216, 0, 12, 0.7);
		padding-left: 0.25rem;
		padding-right: 0.25rem;
	}

	.error {
		margin: 0.1rem;
		text-align: center;
		width: 80%;
	}

	.input-groups {
		margin-top: 1.5rem;
		position: relative;
	}

	.title {
		margin-top: 1.5rem;
	}

	.close-icon {
		position: absolute;
		right: 0.2rem;
		cursor: pointer;
		border-radius: 3px;
	}

	.close-icon:hover {
		background-color: rgba(255, 255, 255, 0.4);
	}

	.not-yet-registered {
		float: right;
	}
`;
