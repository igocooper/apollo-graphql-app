import React, { Component } from 'react'
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'

const removeResolution = gql`
    mutation removeResolution($name: String!) {
    removeResolution(name: $name) {
        _id
    }
    }
`;

class RemoveResolutionButton extends Component {
  handleRemove = () => {

    const {name} = this.props;

    this.props
        .removeResolution({
            variables: {
            name: name
            }
        })
        .then( ({data}) => {
            // fetch top update App component
            // this.props.refetch(); refetch is now done through mutatation options
        })
        .catch( (err) => {
            console.error(err);
        })
  };

  render() {
    return (
      <span style={{cursor: 'pointer' , fontSize: '1em'}} onClick={this.handleRemove}>
       &#10062;
      </span>
    )
  }
}

export default graphql(removeResolution,{
    name: 'removeResolution',
    options: {
        refetchQueries: ["Resolutions"]
    }
})(RemoveResolutionButton);
