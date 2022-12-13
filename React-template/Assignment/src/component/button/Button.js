import React from 'react'
import { Button } from 'react-bootstrap';
import "../button/Button.css"

const button = (props) => {
  return (
    <div>
        <Button value="submit" className={ props.className }  >
            {props.name}
            </Button>
    </div>
  )
}

export default button