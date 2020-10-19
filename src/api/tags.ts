import request from './request'

const TAGS_ROOT = 'tags'

export function fetchTagsRequest() {
  return request(TAGS_ROOT)
}
