import React from 'react';
// import { Provider } from 'react-redux';
import { Route } from 'react-router';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import AppRouter from "./routers/AppRouter";

// import store from './store';
// import saga from './sagas/';
// import Main from './layouts/main';
// import { sagaMiddleware } from './middleware';


// export default () => (
//   <div>
//     <Route exact path='/' component={Home} />
//     <Route path='/counter' component={Counter} />
//     <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
//   </div>
// );

export default () => (
  <div>
    <AppRouter />
  </div>
);

// sagaMiddleware.run(saga);