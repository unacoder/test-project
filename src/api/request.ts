import genUrl from './genUrl'

const toJSON = (response: Response) => response.json()

export default function request (path: string, options: object = {}) {
  const url = genUrl(path)
  return fetch(url, options).then(toJSON)
}
