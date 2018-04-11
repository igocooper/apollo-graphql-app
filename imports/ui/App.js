import React, { Fragment } from 'react';
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'
import { link } from 'fs';

import ResolutionFrom from './ResolutionForm';

const App = ({ data }) => (
  <Fragment>
    <h1>{data.hi}</h1>
    <ResolutionFrom/>
    <ul>
      {!data.loading && data.resolutions.map(resolution => (
        <li key={resolution._id}>
          {resolution.name}
        </li>
      )
      )}
    </ul>
  </Fragment>
)

const hiQuery = gql`
{
  hi
  resolutions {
    _id
    name
  }
}
`;

export default graphql(hiQuery)(App);