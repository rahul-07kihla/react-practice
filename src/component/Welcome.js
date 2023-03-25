import React from 'react'
import Input from './Input';

export default function Welcome(props) {
  const name = props.name;
  return (
    <div>
      <h1>Welcome {name}</h1>
      <Input value={ name }></Input>
    </div>
  )
}
