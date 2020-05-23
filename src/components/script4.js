import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

class Chart4 extends Component{
    state={
            labels:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'],
            datasets:[{
                label:'rainfall in mm',
                data: [15,22,39,70,51,63,77,89,57,89,85,12,15,56,56,25],
                fill: false,
           backgroundColor: "yellow",
           borderWidth: 0.1,
           borderColor:'yellow',
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
                         text:"Rainfall",
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

export default Chart4;