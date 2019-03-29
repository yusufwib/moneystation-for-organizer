import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Money from './../../pictures/bank.svg'
import { Grid } from '@material-ui/core';
import Arrow from './../../pictures/right-arrow.svg'
import CreditCard from './../../pictures/debit-card.svg'

const styles = {
  card: {
    minWidth: 150,
    width: 1550,
    height: 600,
    marginTop: 100,
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
};

function LabaCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Dompet - Ku
        </Typography>
        <Grid container spacing={24} style={{marginTop: 20}}>
              <Grid item xs={8} sm={5} style={{marginLeft: 60}}>
        <img src={Money} alt='Money' style={{width: '200px'}} />
            </Grid>


            <Grid item xs={8} sm={4} style={{marginTop: 20}}>
        <img src={Arrow} alt='Arrow' style={{width: '100px'}} />


            </Grid>
            <Grid item xs={8} sm={1}>
            <img src={CreditCard} alt='Card'  style={{width: '200px'}} /> 
            </Grid>
            </Grid>
        

      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
  );
}

LabaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LabaCard);