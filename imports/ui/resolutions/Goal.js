import React, { Component } from 'react'
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'

const toggleGoal = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
      _id
    }
  }
`

class Goal extends Component {
  toggleGoal = () => {
    this.props.toggleGoal({
      variables: {
        id: this.props.goal._id
      }
    });
  };

  render() {
    return (
      <li>
        <input type="checkbox" 
              onChange={this.toggleGoal} 
              checked={this.props.goal.completed}
        />
        {this.props.goal.name}
      </li>
    )
  }
}

export default graphql(toggleGoal, {
  name: "toggleGoal",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(Goal);
