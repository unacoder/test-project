import React, { useEffect, useState } from "react"
import { Route, Switch } from 'react-router'
import Layout from './pages/Layout'

import Articles from './pages/Article/Index'
import ArticleSingle from './pages/Article/Single'

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Articles} />
        <Route path="/:id" exact component={ArticleSingle} />
      </Switch>
    </Layout>
  )
}
