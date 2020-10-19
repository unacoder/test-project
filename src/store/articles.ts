import { FETCH_ARTICLES_COMPLETE, FETCH_ARTICLE_SINGLE_COMPLETE } from '../constants/ActionTypes';

export interface IUser {
  username: string
  bio?: string
  image: string
  following: boolean
}

export interface IArticle {
  title: string
  slug: string
  body: string
  createdAt: string
  tagList: string[]
  author: IUser
}

export interface ArticlesState {
  cache: Record<string, IArticle>
  current: IArticle[]
  active?: IArticle
  count: number
}

const initialState: ArticlesState = {
  cache: {},
  current: [],
  active: undefined,
  count: 0,
}

export default function articleReducer (state = initialState, action: any)  {
  switch (action.type) {
    case FETCH_ARTICLES_COMPLETE:
      return {
        ...state,
        cache: action.data.articles.reduce((acc, item) => {
          acc[item.slug] = item
          return acc
        }, state.cache),
        current: action.data.articles,
        count: action.data.articlesCount,
      }
    case FETCH_ARTICLE_SINGLE_COMPLETE:
      return {
        ...state,
        cache: {
          ...state.cache,
          [action.data.slug]: action.data
        },
      }
    default:
      return state
  }
}
