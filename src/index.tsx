import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components/macro"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"

import store, { history } from "./store"
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"

import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
