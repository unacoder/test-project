import {} from '../constants/ActionTypes'

export type TagsState = string[]

const initialState: TagsState = []

export default function tagsReducer (state = initialState, action: any) {
  switch (action.type) {
    default:
      return state
  }
}
