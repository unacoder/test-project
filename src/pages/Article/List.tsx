import React from 'react'

interface Props {}

const Articles: React.FunctionComponent<Props> = (props) => {
  return <div>{props.children}</div>
}


export default Articles
