import './Chart.css'
import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

class MyChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
          series: [{
            name: '',
            data: props.strategy,
          }],
          options: {
            chart: {
              type: 'area',
              stacked: false,
              height: 350,
              zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
              },
              toolbar: {
                autoSelected: 'zoom'
              }
            },
            dataLabels: {
              enabled: false
            },
            markers: {
              size: 0,
            },
            title: {
              text: 'Stock Price Movement',
              align: 'left'
            },
            fill: {
              type: 'gradient',
              gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.5,
                opacityTo: 0,
                stops: [0, 90, 100]
              },
            },
            yaxis: {
              labels: {
                formatter: function (val) {
                  return (val / 1000000).toFixed(0);
                },
              },
              title: {
                text: 'Price'
              },
            },
            xaxis: {
              type: 'datetime',
            },
            tooltip: {
              shared: false,
              y: {
                formatter: function (val) {
                  return (val / 1000000).toFixed(0)
                }
              }
            },
          },
        };

        console.log(props)
      }
      render() {
        return (
    <div id="chart">
      {/* <ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} /> */}
      <ReactApexChart options={this.state.options} series={[{
            name: '',
            data: this.props.strategy,
          }]} type="area" height={350} />
    </div>
        );
      }
}

export default MyChart;