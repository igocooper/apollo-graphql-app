import React, { Component } from 'react'
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'

const editResolution = gql`
    mutation editResolution($query: String!, $name: String!) {
    editResolution(query: $query, name: $name) {
        _id
    }
    }
`;

class EditResolutionButton extends Component {
  handleEdit = () => {

    const {id , name} = this.props;

    this.props
        .editResolution({
            variables: {
                query: name,
                name: 'Apollo 🚀'
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
      <span style={{cursor: 'pointer' , fontSize: '1.5em'}} onClick={this.handleEdit}>
        &#9998;
      </span>
    )
  }
}

export default graphql(editResolution,{
    name: 'editResolution',
    options: {
        refetchQueries: ["Resolutions"]
    }
})(EditResolutionButton);
