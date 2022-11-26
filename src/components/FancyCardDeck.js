import React from 'react'
import { TinderLikeCard } from 'react-stack-cards'
import stonks from '../assets/stonks.jpeg'

export class FancyCardDeck extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      directionTinder: "swipeCornerDownRight",
    }
    this.Tinder = null
  }

  onTinderSwipe() {
    this.Tinder.swipe()
  }

  render() {
      const first = stonks
      const second = stonks
      const third = stonks
      const fourth = stonks
      const arr = [first, second, third, fourth]
      let arr1 = [first, second, third, fourth]

    return (
      <div>
        <TinderLikeCard
          images={arr1}
          width="350"
          height="240"
          direction={this.state.directionTinder}
          ref={(node) => this.Tinder = node}
          className="tinder"
        />
        <button className="btnTinder" onClick={this.onTinderSwipe.bind(this)}>click me</button>

      </div>
    );
  }
}

