import React, {Component} from 'react';
import {Line} from "react-chartjs-2";

class Chart1 extends Component{
    state={
            labels:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'],
            datasets:[{
                label:'temp in °C',
                data: [10,20,30,40,50,60,70,80,50,89,85,12,15,56,56,25],
                fill: false,
           backgroundColor: "blue",
           borderWidth: 0.1,
           borderColor:'blue',
        }]
        }
    render(){
        return(
            <div className="chart" >
                <Line 
                 data = {this.state}
                 options={{
                     title:{
                         display:true,
                         text:"Temperature",
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

export default Chart1;