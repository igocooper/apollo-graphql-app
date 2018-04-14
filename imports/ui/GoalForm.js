import React, { Component } from 'react'
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'

const createGoal = gql`
    mutation createGoal($name: String!,$resolutionId: String!) {
       createGoal(name: $name, resolutionId: $resolutionId) {
           _id
       }
    }
`
class GoalForm extends Component {

  submitForm = () => {
    // pass in a variable into a graphQL mutation
    this.props
        .createGoal({
            variables: {
                name: this.name.value,
                resolutionId: this.props.resolutionId
            }
        })
        .then( () => {
            // reset input
            this.name.value = ''
        })
        .catch( (err) => {
        if (error) console.error(err);
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

export default graphql(createGoal, {
    name: 'createGoal',
    options: {
        refetchQueries : ["Resolutions"]
    }
})(GoalForm);