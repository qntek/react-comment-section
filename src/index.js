import ReactDOM  from 'react-dom/client';

import App from './App';

import './style/index.scss';



const el = document.getElementById('root');
el.classList.add('container-md');

const root = ReactDOM.createRoot(el);

root.render(<App/>);