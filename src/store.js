import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk'
import rootReducer from './reducers';

const intialState = {};

const middleware = [ReduxThunk];

// const store = createStore(rootReducer, intialState, compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSIONS__&&window.__REDUX_DEVTOOLS_EXTENSIONS__()));
const store = createStore(
    rootReducer,
    intialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()
        )

);
export default store;

// const store = createStore(() => [], {} ,applyMiddleware())