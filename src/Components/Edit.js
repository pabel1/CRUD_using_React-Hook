import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "./myContext";

export default function Edit() {
  const [data,setData]= useContext(DataContext);
  const {id } =useParams();

  const user= data.filter((user)=>user.id == id);

  const [name,setName] = useState(user[0].Name);
  const [position,setPosition] = useState(user[0].position);
  const [salary,setSalary] = useState(user[0].salary);

  const changeName= (e)=>{

    setName(e.target.value);
    const edit_name= name;
    user[0].Name=edit_name;
  }
  const changePosition= (e)=>{

    setPosition(e.target.value);
    const edit_position= position;
    user[0].position=edit_position;
  }
  
  const changesalary= (e)=>{

    setSalary(e.target.value);
    const edit_salary= salary;
    user[0].salary=edit_salary;
  }

  const addUser =(e)=>{


    e.preventDefault();
    setData([...data]);
    

  }
  return (
    <div>
      <Form onSubmit={addUser}>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>User Name</Form.Label>
          <Form.Control
            onChange={changeName}
            type="text"
            value={name}
            required
            placeholder={user[0].Name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Label>Position</Form.Label>
          <Form.Control
            onChange={changePosition}
            type="text"
            value={position}
            required
            placeholder={user[0].position}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSalary">
          <Form.Label>User Salary</Form.Label>
          <Form.Control
            onChange={changesalary}
            type="text"
            value={salary}
            required
            placeholder={user[0].salary}
          />
        </Form.Group>

        <Link to="/">
        <Button variant="primary" type="submit">
          Edit User
        </Button>
        </Link>

        <Link to="/">
          <Button style={{ margin: "10px" }} variant="primary">
            Go back
          </Button>
        </Link>
      </Form>
    </div>
  );
}
