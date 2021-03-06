import React from 'react';
import {
	Button,
	Typography,
	List,
	ListItem,
	Popover,
	Switch,
} from '@material-ui/core';
import useStyles from './styles';
import {
	ExpandMore,
	ExitToApp,
	MailOutline,
	Edit,
	SettingsBrightness,
} from '@material-ui/icons';
import ThemeContext from 'context/theme';
import ProfilePage from './ProfilePage';
import AnalyticsPage from './AnalyticsPage';

const Profile = ({ user, logoutHandler }) => {
	const classes = useStyles();
	const [editProfileOpen, setEditProfileOpen] = React.useState(false);
	const [profilePageOpen, setProfilePageOpen] = React.useState(false);

	const { darkMode, setDarkMode } = React.useContext(ThemeContext);
	console.log(darkMode);

	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	const darkModeHandler = () => {
		setDarkMode(!darkMode);
		// localStorage.removeItem('darkMode');
		// localStorage.setItem('darkMode', darkMode);
	};

	const showProfilePageHandler = () => {
		setProfilePageOpen(true);
	};

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
					<div className={classes.userDetails} onClick={showProfilePageHandler}>
						{/* <Typography className={classes.picture} variant='subtitle1'>
							{[...user.firstName][0]}
						</Typography>
						<Typography
							className={classes.name}
							variant='subtitle1'
							editProfileOpen={editProfileOpen}
							setEditProfileOpen={setEditProfileOpen}
							profilePageOpen={profilePageOpen}
							setProfilePageOpen={setProfilePageOpen}
						>
							{`${user.firstName} ${user.lastName}`}
						</Typography>
						<Edit fontSize='small' className={classes.editProfileIcon} /> */}
						<ProfilePage
							editProfileOpen={editProfileOpen}
							setEditProfileOpen={setEditProfileOpen}
							profilePageOpen={profilePageOpen}
							setProfilePageOpen={setProfilePageOpen}
						/>
					</div>

					<div className={classes.emailContainer}>
						<MailOutline style={{ marginRight: 5 }} />
						<Typography className={classes.email} variant='subtitle1'>
							{user.email}
						</Typography>
					</div>

					<ListItem className={`${classes.logout}`}>
						<AnalyticsPage
							editProfileOpen={editProfileOpen}
							setEditProfileOpen={setEditProfileOpen}
							profilePageOpen={profilePageOpen}
							setProfilePageOpen={setProfilePageOpen}
						/>
					</ListItem>
					<ListItem className={`${classes.darkmode}`}>
						<SettingsBrightness style={{ marginRight: 5 }} />
						<Typography variant='subtitle1' style={{ marginRight: 80 }}>
							Dark Mode
						</Typography>
						<div className={classes.switch}>
							<Switch
								color='secondary'
								checked={darkMode}
								onChange={darkModeHandler}
							/>
						</div>
					</ListItem>
					<ListItem onClick={logoutHandler} className={`${classes.logout}`}>
						<ExitToApp style={{ marginRight: 5 }} />
						<Typography variant='subtitle1'>Logout</Typography>
					</ListItem>
				</List>
			</Popover>
		</div>
	);
};

export default Profile;
