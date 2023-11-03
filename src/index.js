import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer from "./reducer"
import * as actions from "./actions"
import { bindActionCreators } from 'redux';
import { createStore } from "redux";

const store = createStore(reducer);

const{dispatch ,subscribe ,getState} = store;

const update = () =>{
  document.getElementById("counter").textContent = getState().value;
}

subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// }

const{inc, dec, rnd, inc_five, dec_three} = bindActionCreators(actions, dispatch);
// const decDispatch = bindActionCreators(dec ,dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById("inc").addEventListener("click", inc);
document.getElementById("dec").addEventListener("click", dec);
document.getElementById("rnd").addEventListener("click", () => {
  const value = Math.floor(Math.random() * 10);
  rnd(value);
});
document.getElementById("inc_five").addEventListener("click", inc_five);
document.getElementById("dec_three").addEventListener("click", dec_three);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
