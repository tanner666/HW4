import React,{Component} from "react";
import "./App.css"
import Child1 from "./Child1"
import Child2 from "./Child2"
import * as d3 from 'd3'
import tips from './tips.csv'

class App extends Component{
  constructor(props){
    super(props);
    this.state={data:[]};
  }
  componentDidMount(){
    var self=this

    //d3,csv(tips) returns as a promise
    //must parse data since it is returned as string
    d3.csv(tips, function(d){
      return{
        tip:parseFloat(d.tip),
        total_bill:parseFloat(d.total_bill),
        day:d.day
      }
    }).then(function(csv_data){

      //console.log(csv_data)
      //this refers to the function, but we need the class, so we set a variable above
      self.setState({data:csv_data})
    })
    .catch(function(err){
      console.log(err)
    })
  }

  //called when component is mounted, called before componentDidMount
  render(){
    return(
    <div className="parent">
      <div className="child1"><Child1 data1={this.state.data}></Child1></div>
      <div className="child2"><Child2 data2={this.state.data}></Child2></div>
    </div>);
  }
}

export default App