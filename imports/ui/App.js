import React, { Fragment } from 'react';
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'
import { link } from 'fs';

import ResolutionFrom from './ResolutionForm';

const App = ({ data }) => (
  <Fragment>
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

const ResolutionsQuery = gql`
query Resolutions {
  resolutions {
    _id
    name
  }
}
`;

export default graphql(ResolutionsQuery)(App);

/* we could destructure data into variables like this: 

export default graphql(ResolutionsQuery, {
  props: ({ data }) => ({ ...data }) 
})(App)

So in our app component we then can get props by its name: 

const App = ({ loading, resolutions } => (
  <div>
    // class return
  </div>
)
*/