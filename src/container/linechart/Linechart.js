import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  datasets: [
    {
      label: 'Pendapatan',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#6EBF42',
      borderColor: '#6EBF42',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#6EBF42',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#6EBF42',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40, 23, 42, 12, 42, 62]
    }
  ]
};

export default class Linechart extends Component{
  

  render() {
    return (
      <div>
        <Line data={data} />
      </div>
    );
  }
};
