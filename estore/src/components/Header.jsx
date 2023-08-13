import React from 'react'
import { CardBody ,Card } from 'reactstrap';

function Header({name,title}) {
  return (
    <div>
    <Card className='my-2' >
      <CardBody>
      <h1 className='text-center my-3'> welcome to youtube</h1>
      </CardBody>
    </Card>
    </div>
  )
}

export default Header;