import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createEntry, updateEntry } from 'redux/actions/entries';
import { Card } from 'react-bootstrap';

import Swal from 'sweetalert2';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const Form = ({ currentId, setCurrentId }) => {
	const [entryData, setEntryData] = useState({
		name: '',
		category: '',
		amount: '',
		type: '',
	});
	const [open, setOpen] = useState(false);
	const entry = useSelector(state =>
		currentId ? state.entries.find(p => p._id === currentId) : null
	);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		if (entry) setEntryData(entry);
	}, [entry]);

	const handleSubmit = e => {
		e.preventDefault();

		if (currentId) {
			dispatch(updateEntry(currentId, entryData));
		} else {
			dispatch(createEntry(entryData));
		}

		clear();
		handleClose();
	};

	const clear = () => {
		setCurrentId(null);
		setEntryData({
			name: '',
			category: '',
			amount: '',
			type: '',
		});
	};

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Card className={classes.paper}>
			<Button
				className={classes.button}
				variant='contained'
				color='primary'
				onClick={handleOpen}
			>
				New Transaction
			</Button>

			<Modal
				aria-labelledby='transition-modal-title'
				aria-describedby='transition-modal-description'
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<form
							autoComplete='off'
							noValidate
							className={`${classes.root} ${classes.form}`}
							onSubmit={handleSubmit}
						>
							<Typography variant='h6'>
								{currentId ? 'Edit' : 'Add'} an Entry
							</Typography>

							<TextField
								name='name'
								variant='outlined'
								label='Entry name'
								fullWidth
								size='small'
								value={entryData.name}
								onChange={e =>
									setEntryData({ ...entryData, name: e.target.value })
								}
							/>
							<TextField
								name='name'
								variant='outlined'
								label='Entry name'
								fullWidth
								size='small'
								value={entryData.name}
								onChange={e =>
									setEntryData({ ...entryData, name: e.target.value })
								}
							/>

							{/* <div className={classes.fileInput}>
								<FileBase
									type='file'
									multiple={false}
									onDone={({ base64 }) =>
										setEntryData({ ...entryData, selectedFile: base64 })
									}
								/>
							</div> */}
							<Button
								className={classes.buttonSubmit}
								variant='contained'
								color='primary'
								type='submit'
								fullWidth
							>
								Submit
							</Button>
						</form>
					</div>
				</Fade>
			</Modal>
		</Card>
	);
};

export default Form;
