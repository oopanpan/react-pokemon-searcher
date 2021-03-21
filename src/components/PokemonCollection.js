import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderPokemonCards = (pokemons) =>{
    return pokemons.map( pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
  }
  
  render() {
    const {allPokemons} = this.props
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderPokemonCards(allPokemons)}
      </Card.Group>
    )
  }
}

export default PokemonCollection
