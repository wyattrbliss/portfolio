import React from 'react';
import logo from '../logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import Projects from '../components/Projects';
import HomePage from '../components/HomePage';
import About from '../components/About';
import Resume from '../components/Resume';
import Photography from '../components/Photography';
import PortfolioData from '../state/reducers/PortfolioData';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    PortfolioData: PortfolioData
})

function configureStore(initialState){
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
const store = configureStore({selected: 'home'})

function MyRouter() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/projects" component={Projects} />
        <Route path="/photography" component={Photography} />
      </BrowserRouter>
    </Provider>
  );
}

export default MyRouter;
