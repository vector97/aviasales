import App from './components/App'
import store from './store'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
