import React from "react";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
function Apexchart(){
  
         const [state, setState] = useState({
          
            series: [{
                name: "Desktops",
                data: [10, 41, 35, 51, 49,  91, 148,500,100]
            }],
            options: {
              chart: {
                height: 500,
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
                text: 'Product Trends by Month',
                align: 'left'
              },
              grid: {
                row: {
                  colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                  opacity: 0.5
                },
              },
              xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
              }
            },
          
          
        });

        

        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="line" height={500} width={500}/>
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }

     
    
    
export default Apexchart;