import ReactDOM from 'react-dom';
import App from './App';
import './sass/main.scss'
import {applyMiddleware, compose, createStore} from "redux";
import {rootStore} from "./redux/stores/rootStore";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

const store = createStore(rootStore, applyMiddleware(
    compose(thunk)
))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
