import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

class Chart2 extends Component{
    state={
            labels:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'],
            datasets:[{
                label:'humidity g/m³',
                data: [1,20,32,43,52,61,35,89,20,89,85,12,15,56,56,25],
                fill: false,
           backgroundColor: "red",
           borderWidth: 0.1,
           borderColor:'red',
        }]
        }
    render(){
        return(
            <div className="chart">
                <Line 
                 data = {this.state}
                 options={{
                     title:{
                         display:true,
                         text:"Humidity",
                         fontSize:20
                     },
                     legend:{
                        display:true,
                         position:'right'
                     }
                 }}
                />
            </div>
        )
    }
}

export default Chart2;