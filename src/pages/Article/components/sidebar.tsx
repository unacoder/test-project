import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Heading from '../../../components/Heading'
import Input from '../../../components/Input'
import Text from '../../../components/Text'
import { FETCH_TAGS } from '../../../constants/ActionTypes'
import { RootState } from '../../../store'
import {styled} from '../../../styles/theme'

const StyledArticlesSidebar = styled.aside`
  flex: 0 0 300px;
  margin-left: 20px;
  padding: 10px 0;
`

const StyledSearch = styled(Input)`
  margin: 0 10px;
`

const StyledCategories = styled.div`
  margin-top: 50px;
`

const StyledCategoriesHeader = styled(Heading).attrs({
  level: 2
})`
  font-weight: bold;
`

const StyledCategory = styled(Text).attrs({color: 'inactive'})`
  display: block;
  border-bottom: 1px solid #e8e8e8;
  font-size: 16px;
  font-weight: 600;
  padding: 1em;
  &:last-of-type {
    border: none;
  }
`

const ArticlesSidebar: React.FC = (props) => {
  const tags = useSelector((state: RootState) => state.tags)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: FETCH_TAGS})
  }, [])
  return <StyledArticlesSidebar>
    <StyledSearch placeholder="Search..." />
    <StyledCategories>
      <StyledCategoriesHeader>Categories</StyledCategoriesHeader>
      {tags.map(tag => (
        <StyledCategory key={tag}>{tag}</StyledCategory>
      ))}
    </StyledCategories>
  </StyledArticlesSidebar>
}

export default ArticlesSidebar
