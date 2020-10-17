import React from 'react'
import { Route, useRouteMatch } from 'react-router'
import List from './List'
import Single from './Single'
import {
  StyledArticles,
  StyledArticlesMain,
  StyledArticlesSidebar,
} from './StyledIndex'

const Articles: React.FunctionComponent = (props) => {
  const match = useRouteMatch().path
  return (
    <StyledArticles>
      <StyledArticlesMain>
        <Route exact path={`${match}/`} component={List}/>
        <Route exact path={`${match}/:id`} component={Single}/>
      </StyledArticlesMain>
      <StyledArticlesSidebar />
    </StyledArticles>
  )
}

export default Articles
