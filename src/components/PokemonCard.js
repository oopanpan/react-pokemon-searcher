import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    frontSide : true
  }

  toggleImage = () =>{
    this.setState(prevState => ({
      frontSide : !prevState.frontSide
    }))
  }

  render() {
    const {name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.toggleImage}>
            <img src={this.state.frontSide ? sprites.front : sprites.back} alt={name}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
