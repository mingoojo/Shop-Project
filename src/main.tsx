import 'reflect-metadata';

import ReactDOM from 'react-dom/client';

import App from './App';

function main() {
  Reflect.get(window, 'IMP').init(process.env.REACT_APP_PORT_ONE_STORE_CODE);

  const container = document.getElementById('root');
  if (!container) {
    return;
  }

  const root = ReactDOM.createRoot(container);
  root.render((
    <App />
  ));
}

main();
