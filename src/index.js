import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Game extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeSlide: 1, 
      prevSlide: 0,
      listOfSlides: ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
    }
    this.updateSlide = this.updateSlide.bind(this)
  }

  updateSlide(index){
    this.setState({
      prevSlide: this.state.activeSlide,
      activeSlide: index
    })
  }

  render() {

    const boxSlides = (this.state.listOfSlides).map((user,index)=>{
      return (
        <div key={index} className={"box-size box1"+ (this.state.activeSlide === index ? ' slide-up':'') + (this.state.prevSlide === index ? ' slide-down' : '')}>
          {user}
        </div>
      )
    });

    const buttonSlides = (this.state.listOfSlides).map((user,index)=>{
      return (
        <li key={index} onClick={e => {this.updateSlide(index)}}>
          {user}
        </li>
      )
    });
    
    return (
      <div className="body-wrapper">
        <div className="slide-move">
          {boxSlides}
        </div>
        <ul className="toggle-shit">
          {buttonSlides}
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