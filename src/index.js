import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeContainer from './Container/Home.container';
import libraryApp from './Reducers/BookLibrary.reducer';

// const cards = {
//   'Sidney Sheldon': [
//     {
//       Author: 'Sidney Sheldon',
//       id: 80,
//       Name: 'If Tomorrow Comes (Tracy Whitney Series, #1)',
//       rating: 4.02,
//     },
//     {
//       Author: 'Sidney Sheldon',
//       id: 100,
//       Name: 'Tell Me Your Dreams',
//       rating: 3.93,
//     },
//     {
//       Author: 'Sidney Sheldon',
//       id: 90,
//       Name: 'Master of the Game',
//       rating: 4.1,
//     },
//     {
//       Author: 'Sidney Sheldon',
//       id: 110,
//       Name: 'The Other Side of Midnight (Midnight #1)',
//       rating: 3.9,
//     },
//     {
//       Author: 'Sidney Sheldon',
//       id: 120,
//       Name: 'Rage of Angels',
//       rating: 3.92,
//     },
//   ],
// };
const store = createStore(
  libraryApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// ReactDOM.render(<Section cards={cards['Sidney Sheldon']} author="Sidney Sheldon" />, document.getElementById('root'));
ReactDOM.render(<Provider store={store}><HomeContainer /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
