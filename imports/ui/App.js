import React from 'react';
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'

const App = (props) => (
  <div>
    <h1>{props.data.hi}</h1>
    <p>I'm Oleg Lytvyn, I'm {props.data.age} old, and I'm learning development for a year and half already. 👍</p>
  </div>
)

const hiQuery = gql`
{
  hi,
  age
}
`;

export default graphql(hiQuery)(App);