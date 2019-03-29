import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import invest1 from './../container/invest1.png';
import Dashboard from '../container/dashboard/Dashboard';
import { Link, NavLink } from 'react-router-dom';
import { NONAME } from 'dns';
import Show from '@material-ui/icons/Dashboard'
import Masuk from '@material-ui/icons/TrendingDown'
import Keluar from '@material-ui/icons/TrendingUp'
import Money from '@material-ui/icons/AttachMoney'
import Wallet from '@material-ui/icons/AccountBalance'
import Dompet from '@material-ui/icons/AccountBalanceWallet'



const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  title: {
    paddingLeft: '10px',
    display: 'block',
    width: '230px',
    height: '50px',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  itActive:{
    textDecoration: 'none',
    backgroundColor: 'green'
  },
  dashboard:{
    textDecoration: 'none'
  },
  Link:{
    textDecoration: 'none'
  }

});

function PermanentDrawerLeft(props) {
  const { classes } = props;


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar} style={{backgroundColor: '#BAD35C'}}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
          {props.heads}

          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
      <br></br>
        <img src={invest1} alt="Logo" className={classes.title} variant="h6" color="inherit" noWrap />


        <Divider />
        <div className={classes.gaya}>
        <List>
        <NavLink className={classes.dashboard} exact={true} activeClassName='bc' to='/'> 
            <ListItem button key='Dashboard'>
              <ListItemIcon><Show /></ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
          </NavLink> 

          <Link className={classes.Link} to='/Pengeluaran'> 

            <ListItem button key='Pengeluaran'>
            <ListItemIcon><Keluar/></ListItemIcon>
            <ListItemText primary='Pengeluaran' />


          </ListItem>
          </Link> 

          <Link className={classes.Link} to='/Pemasukan'> 
            <ListItem button key='Pemasukan'>
            <ListItemIcon><Masuk/></ListItemIcon>
            <ListItemText primary='Pemasukan' />


          </ListItem>
          </Link> 

          <Link className={classes.Link} to='/Laba'> 
            <ListItem button key='Laba'>
            <ListItemIcon><Money/></ListItemIcon>
            <ListItemText primary='Laba' />
          </ListItem>
          </Link> 

          <Link className={classes.Link} to='/DompetKu'> 
            <ListItem button key='DompetKu'>
            <ListItemIcon><Wallet/></ListItemIcon>
            <ListItemText primary='BagHasil' />
          </ListItem>   
          </Link> 
          
          
          <Link className={classes.Link} to='/CekSaldo'> 
            <ListItem button key='DompetKu'>
            <ListItemIcon><Dompet/></ListItemIcon>
            <ListItemText primary='CekSaldo'/>
          </ListItem>   
          </Link> 
        
        </List>
        </div>
        <Divider />

        </Drawer>
    </div>
  );
}

PermanentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawerLeft);