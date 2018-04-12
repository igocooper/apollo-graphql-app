import React, { Component } from 'react'
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'

const createResolution = gql`
    mutation createResolution($name: String!) {
       createResolution(name: $name) {
           _id
       }
    }
`
class ResolutionForm extends Component {

  submitForm = () => {
    console.log(this.name.value);
    // pass in a variable into a graphQL mutation
    this.props
        .createResolution({
            variables: {
                name: this.name.value
            }
        })
        .then( ({data}) => {
            // do stuff with the data when promise is resolved
        })
        .catch( (err) => {
        console.error(err);
        }) 
  };

  render() {
    return (
      <div>
        <input type="text" ref={(input) => (this.name = input)}/>
        <button onClick={this.submitForm}>Submit</button>
      </div>
    )
  }
}

export default graphql(createResolution, {
    name: 'createResolution',
    options: {
        refetchQueries: ["Resolutions"]
    }
})(ResolutionForm);
