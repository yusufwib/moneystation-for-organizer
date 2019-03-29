import React from 'react';
import ImageBackground from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import invest1 from './invest1.png';
import bg from './bg.png';
import wallet from './wallet.svg';
import Grid from '@material-ui/core/Grid';
import './index.css'
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';


const styles = theme => ({
  root: {
    width: '100%',  
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    width: '250px',
    height: '50px',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    paddingRight: '30px',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  img: {
    paddingLeft: '1200px',
  },
  text:{
    paddingTop: '100px',
    paddingLeft: '300px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 400,
  },
  dense: {
    marginLeft: 60,
    marginTop: 19,
  },
  button: {
    textTransform: 'none',
    margin: theme.spacing.unit,
    backgroundColor: '#7CAD51',
    color: 'white',
    width: 200,
    fontSize: 20,
    height: 50,
    marginTop: 15,
    marginLeft: 100,
    '&:hover': {
      backgroundColor: '#FFFFFF',
      borderColor: '#7CAD51',
      color: '#7CAD51'
    },
  },
});


class Landing extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const { spacing } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (


      
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor: '#6ebf42'}}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            <img src={invest1} alt="Logo" className={classes.title} variant="h6" color="inherit" noWrap />
            </Typography>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                {/* <Badge badgeContent={4} color="secondary"> */}
                  <p style={{color: 'green'}}>Home</p>
                {/* </Badge> */}
              </IconButton>
              <IconButton color="inherit">
                {/* <Badge badgeContent={17} color="secondary"> */}
                  <p>About</p>
                {/* </Badge> */}
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <p>Contact</p>
              </IconButton>

            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
              
            </div>
          </Toolbar>
        </AppBar>

              <Grid container spacing={22}>
              <Grid item xs={6}>
              <div>
              <b>
          <h1 style={{paddingTop: 173, paddingLeft: 60, fontSize: 80, margin: 0}}>THE BEST WAY TO CONSERVE YOUR NATURE AND MONEY</h1>
          </b>
          <p style={{paddingLeft:60, color:'grey',paddingTop: 0,fontSize: 20, fontFamily: 'Segoe UI'}}>Investasi untuk sekarang dan masa depan yang lebih baik !</p>
          </div>
          <br/>
          <br/>
          <br/>
          <TextField
          style={{}}
          id="standard-dense"
          label="Enter your email"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
        />
      <Button variant="contained" className={classes.button}>
        Let's Invest
      </Button>
        </Grid>
        <Grid item xs={6}>
        {/* <div className={classes.img}> */}
              
              <img src={wallet} style={{width:'800px', height:'800px'}} />

              
              
              {/* </div> */}
        </Grid>

        </Grid>




        {renderMenu}
        {renderMobileMenu}
      </div> 
    );
  }
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);