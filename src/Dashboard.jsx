import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import './Dashboard.css';
function Dashboard(){
        const [state, setState] = useState({
          
            series: [{
              name: 'AEC',
              type: 'column',
              data: [500,300,400,600,1000,1200]
            }, {
              name: 'ACET',
              type: 'column',
              data: [600,300,400,600,900,1000]
            }, {
              name: 'ACOE',
              type: 'line',
              data: [400,500,600,700,400,900]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                stacked: false
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: [1, 1, 4]
              },
              title: {
                text: 'Aditya University Admissions Analysis - (2020 - 2025)',
                align: 'left',
                offsetX: 110
              },
              xaxis: {
                categories: [2020, 2021, 2022, 2023, 2024, 2025],
              },
              yaxis: [
                {
                  seriesName: 'AEC',
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#008FFB'
                  },
                  labels: {
                    style: {
                      colors: '#008FFB',
                    }
                  },
                  title: {
                    text: "AEC Count",
                    style: {
                      color: '#008FFB',
                    }
                  },
                  tooltip: {
                    enabled: true
                  }
                },
                {
                  seriesName: 'ACET',
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#00E396'
                  },
                  labels: {
                    style: {
                      colors: '#00E396',
                    }
                  },
                  title: {
                    text: "ACET Count",
                    style: {
                      color: '#00E396',
                    }
                  },
                },
                {
                  seriesName: 'ACOE',
                  opposite: true,
                  axisTicks: {
                    show: true,
                  },
                  axisBorder: {
                    show: true,
                    color: '#FEB019'
                  },
                  labels: {
                    style: {
                      colors: '#FEB019',
                    },
                  },
                  title: {
                    text: "ACOE Count",
                    style: {
                      color: '#FEB019',
                    }
                  }
                },
              ],
              tooltip: {
                fixed: {
                  enabled: true,
                  position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                  offsetY: 30,
                  offsetX: 60
                },
              },
              legend: {
                horizontalAlign: 'left',
                offsetX: 40
              }
            },
          
          
        });
        const [state2, setState2] = useState({
          
            series: [{
                name: "Placements",
                data: [1000,2000,1500,1700,1900,2100]
            }],
            options: {
              chart: {
                height: 350,
                type: 'line',
                zoom: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight'
              },
              title: {
                text: 'Placements Trend by Year',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['2020','2021','2022','2023','2024','2025'],
              }
            },
          
          
        });
        const [state3, setState3] = React.useState({
          
            series: [44, 55, 13, 43, 22],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
        });

        return (
            <>
            <h1>Aditya University Dashboard</h1>
            <br></br>
            <div className="box">
            <div  className="box1">
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={600} width={730}/>
              </div>
            <div id="html-dist"></div>
            </div>
            <div className="box2">
             <div id="chart">
                <ReactApexChart options={state2.options} series={state2.series} type="line" height={300} width={350}/>
              </div>
            <div id="html-dist"></div>
            <div>
             </div>
              <div className="box3">
            <div id="chart">
                <ReactApexChart options={state3.options} series={state3.series} type="pie" width={380} />
              </div>
            <div id="html-dist"></div>
            </div>
          
            </div>
             </div>
           
        
          </>
        );
}
export default Dashboard;