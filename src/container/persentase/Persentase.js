import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Doughnut from './../doughnut/Doughnut'
import Grid from '@material-ui/core/Grid'

const styles = {
  card: {
    minWidth: 150,
    width: 500,
    height: 200,
    marginTop: 150,
    marginLeft: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  persentase: {

  }
};

function Persentase(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
      <Typography variant="h5" component="h2" className={classes.persentase}>
        Persentase
        </Typography>
      <Grid item xs={20} sm={16} style={{marginBottom:'-270px'}}>
          <p>Anda Berinvestasi : </p>
          <p>Rp. 10.000.000</p>
        </Grid>
        <Grid item xs={20} sm={14} style={{marginLeft:'100px' ,marginRight: '-100px'}}>
        <Doughnut />
        </Grid>

        
        

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

Persentase.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Persentase);