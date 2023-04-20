import React, { useState } from 'react';
import NavTabs from './components/NavBar';
import Home from './routes/Home';
import MyEvents from './routes/MyEvents';
import MyTasks from './routes/MyTasks';
import Event from './routes/Event';
import SignUp from './components/SignUp';
import LoginForm from './components/LoginForm';
import CreateEvent from './components/CreateEvent';
import CreateTask from './components/CreateTask';
// FOR TESTING ONLY - DELETE LATER (also delete Route path - line 23)
import TestEnv from './routes/testEnv';
//import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myevents" element={<MyEvents />} />
            <Route path="/mytasks" element={<MyTasks />} />
            <Route path="/event/:eventId" element={<Event />} />
            <Route path="/testing" element={<TestEnv />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/loginform" element={<LoginForm />} />
            <Route path="/CreateEvent" element={<CreateEvent />} />
            <Route path="/CreateTask" element={<CreateTask />} />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;