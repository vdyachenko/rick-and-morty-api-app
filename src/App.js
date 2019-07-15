import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { Layout } from 'antd';

import history from './services/history';
import { Content, ErrorBoundary, Notifications } from 'components';
import CharactersList from 'pages/CharactersList/CharactersList';
import CharacterInfo from 'pages/CharacterInfo/CharacterInfo';

const App = () => (
  <Layout style={{minHeight: '100%'}}>
    <Content>
      <ErrorBoundary>
        <Notifications/>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={CharactersList}/>
            <Route exact path="/character/:characterId(\d+)" component={CharacterInfo}/>
            <Redirect to="/" />
          </Switch>
        </Router>
      </ErrorBoundary>
    </Content>
  </Layout>
);

export default App;
