import { API_ADDRESS } from '../constants/CONFIG';

export default function genUrl(path) {
  return `${API_ADDRESS}/${encodeURIComponent(path)}`
}
