import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  canvas: any;
  ctx: any;
 
  constructor() { }

  ngOnInit(): void {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let myChart = new Chart(this.ctx, {
      type: 'bar',
      data: {
          labels: ["2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007"],
          datasets: [{
              label: 'Total percentage.',
              data: [98,96,94,90,86,88,83,70,80,80,70,76,77,65],
              backgroundColor: ["red","yellow" ,"brown" ,"green" ,"pink" , , , , "orange", , , ,"green", , ,"brown"],
              borderWidth: 1
          }]
      },
      options: {
    legend: {
        display: false
    },
        responsive: false,
        display:true
      }
    });
  }

}
