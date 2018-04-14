import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { ApolloLink, from } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from '../../ui/App';
import { Accounts } from 'meteor/accounts-base';

const httpLink = new HttpLink({
    uri: Meteor.absoluteUrl('graphql')
});

const AuthLink = new ApolloLink( (operation, forward) => {
    const token = Accounts._storedLoginToken();
    operation.setContext( () => ({
        headers: {
            'meteor-login-token': token,
        }
    }));
    return forward(operation)

})

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: from([AuthLink, httpLink]),
    cache: cache
});

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
); 

Meteor.startup( () => {
    render(<ApolloApp />, document.getElementById('app'));
})

