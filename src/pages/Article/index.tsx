import React from 'react'
import { Route, useRouteMatch } from 'react-router'
import ArticlesSidebar from './components/sidebar'
import List from './List'
import Single from './Single'
import {
  StyledArticles,
  StyledArticlesMain,
} from './components/StyledIndex'

const Articles: React.FunctionComponent = (props) => {
  const match = useRouteMatch().path
  return (
    <StyledArticles>
      <StyledArticlesMain>
        <Route exact path={`${match}/`} component={List}/>
        <Route exact path={`${match}/:id`} component={Single}/>
      </StyledArticlesMain>
      <ArticlesSidebar />
    </StyledArticles>
  )
}

export default Articles
