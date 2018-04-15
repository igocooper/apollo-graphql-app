import React, { Fragment } from 'react';
import gql from 'graphql-tag' // to create graphql queries
import { graphql } from 'react-apollo'
import { link } from 'fs';
import { withApollo } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import GoalsForm from './GoalForm';
import Goal from './resolutions/Goal';
import UserForm from './userForms/UserForm';

// data comes from grapql HOC component with all query data.
const App = ({ data, client }) => {
  if (data.loading) return false

  return (
    <Fragment>
    <UserForm data={data} client={client}/>  
    {data.user._id &&
    <Fragment>
      <ResolutionForm/>
      <ul>
        {data.resolutions.map(resolution => (
          <ul key={resolution._id}>
            <span style={{
            textDecoration: resolution.completed ? 'line-through' : 'none'
            }}>
            {resolution.name}
            </span>
            {resolution.goals && resolution.goals.map(goal => (
              <Goal goal={goal} key={goal._id} />
            ))}
            <GoalsForm resolutionId={resolution._id}/>

          </ul>
        )
        )}
      </ul>
    </Fragment>
    }
  </Fragment>
  )
}

const ResolutionsQuery = gql`
query Resolutions {
  resolutions {
    _id
    name
    completed
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