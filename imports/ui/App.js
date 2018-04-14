import React, { Fragment } from 'react';
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'
import { link } from 'fs';
import { withApollo } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const App = ({ data, client }) => (
  <Fragment>
    {!data.loading && data.user._id ? (
      <button onClick={() => {
        Meteor.logout();
        client.resetStore();  
      }}>LogOut</button>
    ) : (
      <Fragment>
        <RegisterForm client={client}/>
        <LoginForm client={client}/>
      </Fragment>
    )}
    <br/>
    <br/>
    <br/>
    <ResolutionForm/>
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
  },
  user {
    _id
  }
}
`;

export default graphql(ResolutionsQuery)(withApollo(App));

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