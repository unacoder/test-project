import { FETCH_TAGS_SUCCESS } from '../constants/ActionTypes'

export type TagsState = string[]

const initialState: TagsState = []

export default function tagsReducer (state = initialState, action: any) {
  switch (action.type) {
    case FETCH_TAGS_SUCCESS:
      return action.data.tags
    default:
      return state
  }
}
