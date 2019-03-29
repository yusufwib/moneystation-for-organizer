import React, { Component } from 'react';
import axios from 'axios';
import PermanentDrawerLeft from '../../components/PermanentDrawerLeft'
import Persentase from '../persentase/Persentase'
import Grafik from '../grafik/Grafik'
import { Route } from 'react-router'
import Pengeluaran from '../pengeluaran/Pengeluaran';
import classes from './../../App.css';
import Pendapatan from '../pemasukan/Pemasukan'
import Laba from '../laba/Laba';
import PendapatanCard from '../pendapatanCard/PendapatanCard'
import PengeluaranCard from '../pengeluaranCard/PengeluaranCard';
import Grid from '@material-ui/core/Grid'



class Dashboard extends Component {
    
    render(){
        return(
            <div>

        <Route path="/" exact component={() => (
                            <section>
                            <PermanentDrawerLeft heads="Dashboard">        
                            </PermanentDrawerLeft>
                            
                            </section>

        )} />

        <Route path="/" exact component={Persentase} />
        <Route path="/" exact component={Grafik} />
        <Route path="/pengeluaran" exact component={() => (
                            <section>
                            <PermanentDrawerLeft heads="Pengeluaran" className={classes.dashboard}>        
                            </PermanentDrawerLeft>
                            
                            </section>

        )} />
        <Route path="/pengeluaran" component={() => (<Pengeluaran />) } />
        <Route path="/pemasukan" exact component={() => (
                            <section>
                            <PermanentDrawerLeft heads="Pemasukan" className={classes.dashboard}>        
                            </PermanentDrawerLeft>
                            
                            </section>

        )} />
        <Route path="/pemasukan" component={() => (<Pendapatan />) } />
        <Route path="/Laba" exact component={() => (
                            <section>
                            <PermanentDrawerLeft heads="Laba" className={classes.dashboard}>        
                            </PermanentDrawerLeft>
                            
                            </section>

        )} />
        <Route path="/Laba" component={() =>(
            <div> 
            <Grid container spacing={24}>
              <Grid item xs={12} sm={5}>
              <PendapatanCard />
            </Grid>

            <Grid item xs={12} sm={5}>
              <PengeluaranCard />
            </Grid>
            </Grid>
            </div>
        )} />

        <Route path="/Laba" component={() => (<Laba />) } />
        <Route path="/dompetku" exact component={() => (
                            <section>
                            <PermanentDrawerLeft heads="Dompet-Ku" className={classes.dashboard}>        
                            </PermanentDrawerLeft>
                            
                            </section>

        )} />
        <Route path="/dompetku" component={() => (<Pendapatan />) } />


            </div>
        )
    }

}

export default Dashboard;