import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [formData, setFormData] = useState(
    {
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: "",
    }
  );

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name] : e.target.value});
  }

  function handleSubmit() {
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl,
      },
    };
  
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then(r => r.json())
      .then(addPokemon);
  }


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit} >
        <Form.Group widths="equal">
          <Form.Input 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="Name" 
            name="name" 
            fluid label="Name"
          />
          <Form.Input 
            value={formData.hp} 
            onChange={handleChange} 
            placeholder="hp" 
            name="hp" 
            fluid label="hp"
          />
          <Form.Input
            value={formData.frontUrl}
            onChange={handleChange}
            placeholder="url"
            name="frontUrl"
            fluid label="Front Image URL"
          />
          <Form.Input
            value={formData.backUrl}
            onChange={handleChange}
            placeholder="url"
            name="backUrl"
            fluid label="Back Image URL"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
