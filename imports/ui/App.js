import React, { Fragment } from 'react';
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'
import { link } from 'fs';

import ResolutionFrom from './ResolutionForm';
import EditResolutionButton from './EditResolutionButton';
import RemoveResolutionButton from './RemoveResolutionButton';

const App = ({ data }) => (
  <Fragment>
    <h1>{data.hi}</h1>
    <ResolutionFrom />
    <ul>
      {!data.loading && data.resolutions.map(resolution => (
        <li key={resolution._id}>
          {resolution.name}
          <EditResolutionButton 
            id={resolution._id} 
            name={resolution.name} 
          />
          <RemoveResolutionButton 
            name={resolution.name} 
          />
        </li>
      )
      )}
    </ul>
  </Fragment>
)

const resolutionsQuery = gql`
query Resolutions {
    resolutions {
      _id
      name
    }
}
`;

export default graphql(resolutionsQuery)(App);