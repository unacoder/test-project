import request from './request'

const ARTICLE_ROOT = 'articles'

export function fetchAll() {
  return request(ARTICLE_ROOT)
}

export function fetchSingle (id) {
  return request(`${ARTICLE_ROOT}/${id}`)
}
