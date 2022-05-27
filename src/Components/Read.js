import React, { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import { DataContext } from './myContext';
import Image from '../Assests/img.jpg'

export default function Read() {
  const [data, setData] = useContext(DataContext);
  const { id } = useParams();
  const user = data.filter((user) => user.id == id);

  return (
    <div >
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Image} />
        <hr />
        <Card.Body>
          <Card.Title>User Information</Card.Title>
          <Card.Text>
            <h3>User Id: {user[0].id} </h3>
            <p> User Name: {user[0].Name} </p>
            <p>Position: {user[0].position} </p>
            <p>Salary:  {user[0].salary} </p>
          </Card.Text>
          <Link to="/">
            <Button variant="primary">Go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}
