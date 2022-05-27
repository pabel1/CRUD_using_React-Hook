import React, { useContext, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { DataContext } from './myContext';

export default function UserCreate() {
  const [data,setData]= useContext(DataContext);
  const [id,setId] = useState("");
  const [name,setName] = useState("");
  const [position,setPosition] = useState("");
  const [salary,setSalary] = useState("");

  const changeId= (e)=>{

    setId(e.target.value);
    
  }
  const changeName= (e)=>{

    setName(e.target.value);
  }
  const changePosition= (e)=>{

    setPosition(e.target.value);
  }
  
  const changesalary= (e)=>{

    setSalary(e.target.value);
  }

  const addUser =(e)=>{


    e.preventDefault();
    setData([...data,{id:id,Name: name, position:position ,salary: salary}]);
    
  }
  
  return (
    <div>
      <Form onSubmit={addUser}>
        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>User Id</Form.Label>
          <Form.Control
            onChange={changeId}
            type="text"
            value={id}
            required
            placeholder="Enter User Id..."
          />
          <Form.Text className="text-muted">
            We'll never share user id with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={changeName}
            type="text"
            value={name}
            required
            placeholder="Enter User Name..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            onChange={changePosition}
            type="text"
            value={position}
            required
            placeholder="Enter User Position..."
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSalary">
          <Form.Label>User Salary</Form.Label>
          <Form.Control
            onChange={changesalary}
            type="text"
            value={salary}
            required
            placeholder="Enter User salary..."
          />
        </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>

        <Link to="/">
          <Button style={{margin:"10px"}} variant="primary">
            Go back
          </Button>
        </Link>
      </Form>
    </div>
  );
}
