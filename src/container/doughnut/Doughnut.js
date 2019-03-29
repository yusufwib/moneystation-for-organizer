import React, { Component } from 'react';
import {Doughnut as Doughnuts} from 'react-chartjs-2';
import './Doughnut.css'
import ReactMinimalPieChart from 'react-minimal-pie-chart';
import { Typography } from '@material-ui/core';

// const data = {
// 	labels: [
// 		'Investasimu : Rp.',
// 		'Diperlukan untuk wisata'
// 	],
// 	datasets: [{
// 		data: [4.2,100],
// 		backgroundColor: [
// 		'#BAD35C',
// 		'#6EBF42'
// 		],
// 		hoverBackgroundColor: [
// 		'#BAD35C',
// 		'#6EBF42'
// 		]
// 	}]
// };

export default class Doughnut extends Component{

  render() {
    return (
      <div style={{}}>

        <ReactMinimalPieChart
  data={[{
      value: 82,
      
      color: '#6EBF42'
    },{
        value: 18,
        color: '#BAD35C'
    }]}
    radius={20}
  totalValue={100}
  lineWidth={40}
  label
  labelStyle={{
    fontSize: '6px',
    fontFamily: 'sans-serif',
    fontWeight: 'bold',
  }}
  labelPosition={110}
animate
/>
</div>

    );
  }
};