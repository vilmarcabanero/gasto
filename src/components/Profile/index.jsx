import React from 'react';
import Popover from '@material-ui/core/Popover';
import { Button, Typography, List, ListItem } from '@material-ui/core';
import useStyles from './styles';
import { ExpandMore, ExitToApp, MailOutline, Edit, SettingsBrightness } from '@material-ui/icons';

const Profile = ({ user, logoutHandler }) => {
	const classes = useStyles();

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;
	return (
		<div>
			<Button
				aria-describedby={id}
				style={{ textTransform: 'none' }}
				onClick={handleClick}
			>
				<Typography className={classes.profilePicture} variant='subtitle1'>
					{[...user.firstName][0]}
				</Typography>
				<Typography className={classes.profileName} variant='subtitle1'>
					{`${user.firstName} ${user.lastName}`}
				</Typography>
				<ExpandMore style={{ color: '#fff' }} />
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<List className={classes.popoverContent}>
					<div className={classes.userDetails} onClick={() => {console.log('Profile is clicked.')}}>
						<Typography
							color='primary'
							className={classes.picture}
							variant='subtitle1'
						>
							{[...user.firstName][0]}
						</Typography>
						<Typography
							className={classes.name}
							color='primary'
							variant='subtitle1'
						>
							{`${user.firstName} ${user.lastName}`}
						</Typography>
						<Edit color='primary' fontSize='small' className={classes.editProfileIcon}  />
					</div>
					<div className={classes.emailContainer}>
						<MailOutline color='primary' style={{ marginRight: 5 }} />
						<Typography
							color='primary'
							className={classes.email}
							variant='subtitle1'
						>
							{user.email}
						</Typography>
					</div>

					<ListItem onClick={logoutHandler} className={`${classes.logout}`}>
						<ExitToApp color='primary' style={{ marginRight: 5 }} />
						<Typography color='primary' variant='subtitle1'>
							Logout
						</Typography>
					</ListItem>
					<ListItem onClick={logoutHandler} className={`${classes.logout}`}>
						<SettingsBrightness color='primary' style={{ marginRight: 5 }} />
						<Typography color='primary' variant='subtitle1'>
							Dark Mode
						</Typography>
					</ListItem>
				</List>
			</Popover>
		</div>
	);
};

export default Profile;
