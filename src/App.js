import React from 'react';
import './App.css';
// import conson from './utils/conson'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Botton></Botton>
        <Triangle></Triangle>
      </header>
    </div>
  );
}


class Triangle extends React.Component{
  constructor(props){
    super(props)
    this.state={
    
    }
  }
  render(){
    return(
          <div className="content"> </div>
      )
  }
}

class Botton extends React.Component{
  constructor(props){
      super(props)
      this.state={
        name:'Susan',
        isState:false
      }
  }
  
  _click(){
    console.log('这是一个点击事件')
    this.setState({
      name: this.state.isState ?  "xiaowu" : "lisi",
      isState:!this.state.isState
     }
    )
  }

  render(){
    // conson()
    return (
      <button  onClick={()=>this._click()}>我是一个{this.state.name}</button>
    )
  }
}


export default App;
