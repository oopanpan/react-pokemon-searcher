import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  submitHandle = e => {
    e.preventDefault()
    const [name, hp, frontUrl, backUrl] = e.target
    const newPokemon = {
      name: name.value,
      hp: hp.value,
      sprites:{
        front : frontUrl.value,
        back : backUrl.value,
      }
    }
    this.props.submitPokemon(newPokemon)
    e.target.reset()
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandle}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" />
            <Form.Input fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
