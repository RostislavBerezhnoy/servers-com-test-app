import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { store } from 'store'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import App from './App'
import 'antd/dist/reset.css'
import './index.css'

dayjs.extend(localizedFormat)

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position='bottom-right' />
      <App />
    </Provider>
  </React.StrictMode>,
)
