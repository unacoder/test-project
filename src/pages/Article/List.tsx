import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_ARTICLES } from '../../constants/ActionTypes'
import { RootState } from '../../store'

interface Props {}

const Articles: React.FunctionComponent<Props> = (props) => {
  const articles = useSelector((state: RootState) => {
    return state.articles
  })
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: FETCH_ARTICLES})
  }, [])
  return <div>{articles.current.map(a => a.title)}</div>
}


export default Articles
