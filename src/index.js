import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      slideMove : false,
      slideOne : false
    }
    this.slideUp = this.slideUp.bind(this)
    this.slideUpOne = this.slideUpOne.bind(this)
  }

  slideUp(){
    this.setState({
      slideMove : true,
      slideOne : false
    })
      
  }
  slideUpOne(){
    this.setState({
      slideMove : false,
      slideOne : true
    })
  }

  render() {
    return (
      <div className="body-wrapper">
        <div className="slide-move">
          <div className={this.state.slideOne ? "box-size box1 slide-up-one" : "box-size box1" }>
            1
          </div>
          <div  className={this.state.slideMove ? "box-size box2 slide-up" : "box-size box2" } >
            2
          </div>
        </div>
        <ul className="toggle-shit">
          <li onClick={this.slideUpOne}>one</li>
          
          <li onClick={this.slideUp}>two</li>
        </ul>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);