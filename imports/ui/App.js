import React, { Fragment } from 'react';
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'
import { link } from 'fs';
import { withApollo } from 'react-apollo';

import RegisterForm from './RegisterForm';
import GoalsForm from './GoalForm';
import ResolutionForm from './ResolutionForm';
import LoginForm from './LoginForm';
import Goal from './resolutions/Goal';

// data comes from grapql HOC component with all query data.
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
        <ul key={resolution._id}>
          {resolution.name}
          {resolution.goals && resolution.goals.map(goal => (
            <Goal goal={goal} key={goal._id} />
          ))}
          <GoalsForm resolutionId={resolution._id}/>

        </ul>
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
    goals {
      _id
      name
      completed
    }
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