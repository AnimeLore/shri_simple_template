import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Application } from './Application';

import './index.css';
import { initStore } from './store';

const store = initStore();

ReactDOM.render(
    // eslint-disable-next-line react/react-in-jsx-scope
    <BrowserRouter>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <Provider store={store} >
            {/* eslint-disable-next-line react/react-in-jsx-scope */}
            <Application />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);
