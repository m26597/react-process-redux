import { createStore } from 'redux';
import rootreducer from './reducers';


function configureStore(initialState){
    const store = createStore(rootreducer, initialState,
        window.devToolsExtension ? window.devToolsExtension : undefined,
    )
    return store;
}

export default configureStore;
