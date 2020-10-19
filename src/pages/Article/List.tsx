import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_ARTICLES } from '../../constants/ActionTypes'
import { RootState } from '../../store'
import { styled } from '../../styles/theme'

import Article from './components/article'

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface Props {}

const Articles: React.FunctionComponent<Props> = (props) => {
  const articles = useSelector((state: RootState) => {
    return state.articles
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: FETCH_ARTICLES })
  }, [])

  return (
    <StyledWrapper>
      {articles.current.map((article) => (
        <Article key={article.slug} article={article} />
      ))}
    </StyledWrapper>
  )
}

export default Articles
