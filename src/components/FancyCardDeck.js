import React from 'react'
import { TinderLikeCard } from 'react-stack-cards'

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
      const first =
        "https://cdn.pixabay.com/photo/2017/05/06/21/19/strawberry-2290969_960_720.jpg";
      const second =
        "https://cdn.pixabay.com/photo/2017/05/06/21/19/strawberry-2290969_960_720.jpg";
      const third =
        "https://cdn.pixabay.com/photo/2017/05/06/21/19/strawberry-2290969_960_720.jpg";
      const fourth =
        "https://cdn.pixabay.com/photo/2017/05/06/21/19/strawberry-2290969_960_720.jpg";
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

