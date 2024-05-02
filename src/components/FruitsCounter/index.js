// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="con">
        <div className="subCon">
          <h1>
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div>
            <div className="cards">
              <div className="cardsCenter">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  className="logo"
                  alt="mango"
                />
                <div className="bat">
                  <button type="button" onClick={this.eatMango}>
                    Eat Mango
                  </button>
                </div>
              </div>

              <div className="cardsCenter">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  className="logo"
                  alt="banana"
                />
                <div className="bat">
                  <button type="button" onClick={this.eatBanana}>
                    Eat Banana
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
