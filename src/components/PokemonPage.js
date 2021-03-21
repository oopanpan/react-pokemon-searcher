import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
const URL = `http://localhost:3000/pokemon`

class PokemonPage extends React.Component {

  state = {
    allPokemons: [],
    search : '',
    filteredPokemon : []
  }

  componentDidMount(){
    this.getAllPokemons()
  }

  getAllPokemons = async() =>{
    await fetch(URL)
    .then( r => r.json() )
    .then(pokemons => this.setState({ allPokemons: pokemons }))
  }

  submitPokemon = async newPokemon =>{
    console.log(newPokemon)
    await fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(r => r.json())
    .then(this.getAllPokemons())
  }

  setSearch = input => {
    const result = this.state.allPokemons.filter( pokemon => pokemon.name.includes(input))
    if (result.length !==0) {
    this.setState({
      search : input,
      filteredPokemon: result
    })}
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitPokemon={this.submitPokemon}/>
        <br />
        <Search setSearch={this.setSearch}/>
        <br />
        <PokemonCollection allPokemons={ this.state.search==='' ? this.state.allPokemons : this.state.filteredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
