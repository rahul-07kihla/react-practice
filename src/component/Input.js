import React from 'react'

export default function Input(props) {
    const Ivalue = props.value;
  return (
    <input type="text" name="message" placeholder="Message" value={Ivalue}/>
  )
}
