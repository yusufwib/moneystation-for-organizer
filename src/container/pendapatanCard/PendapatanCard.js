import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 150,
    width: 700,
    height: 300,
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
  nominal:{
    fontSize: 90,
    paddingTop: 19
  }
};

function PendapatanCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
        Pendapatan
        </Typography>

      </CardContent>
      <CardActions>
      <p className={classes.nominal}>Rp. 200.000.000</p>
      </CardActions>
    </Card>
  );
}

PendapatanCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PendapatanCard);