import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

class Chart3 extends Component{
    state={
            labels:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'],
            datasets:[{
                label:'ppt in mm',
                data: [10,20,36,12,52,66,79,80,10,89,89,12,15,56,56,25],
                fill: false,
           backgroundColor: "green",
           borderWidth: 0.1,
           borderColor:'green',
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
                         text:"Precipitation",
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

export default Chart3;