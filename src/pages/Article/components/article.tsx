import React from 'react'
import Heading from '../../../components/Heading'
import Text from '../../../components/Text'
import { IArticle } from '../../../store/articles'
import { styled } from '../../../styles/theme'

const StyledBox = styled.div`
  flex: 0 0 360px;
  margin-right: 30px;
  margin-bottom: 30px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  overflow: hidden;
`

const StyledImage = styled.div`
  width: 100%;
  height: 280px;
  background-color: rgba(160, 160, 160, 0.3);
`

const StyledContent = styled.div`
  padding: 2em;
`

const StyledHeader = styled(Heading).attrs({ level: 2 })`
  margin: 0;
`

const StyledSub = styled(Text).attrs({color: 'inactive'})``

interface Props {
  article: IArticle
  className?: string
}

const Article: React.FC<Props> = ({ article, className }) => {
  const createdAt = new Date(article.createdAt)
  const formattedDate = new Intl.DateTimeFormat(navigator.language, {
    year: 'numeric', month: 'long', day: 'numeric'
  }).format(createdAt)
  return (
    <StyledBox className={className}>
      <StyledImage />
      <StyledContent>
      <StyledHeader>{article.title}</StyledHeader>
      <StyledSub>By: {article.author.username}, Date: {formattedDate}</StyledSub>
      </StyledContent>
    </StyledBox>
  )
}

export default Article
