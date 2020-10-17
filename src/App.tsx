import React, { useEffect, useState } from "react"
import { Route, Switch } from 'react-router'
import Layout from './pages/Layout'

import Articles from './pages/Article/Index'

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Articles} />
      </Switch>
    </Layout>
  )
}
