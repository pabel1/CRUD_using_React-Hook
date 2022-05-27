import React, { useContext } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import { DataContext } from './myContext';

export default function Delete() {
    const [data,setData]=useContext(DataContext);
    
    const {id}= useParams();

    const handler =()=>{
        const newdata= data.filter((data)=>(data.id!==id));
        setData(newdata);

    }
    

  return (
    <div>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure delete this User..?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p> {id} </p>
        </Modal.Body>

        <Modal.Footer>
          <Link to="/">
            <Button style={{ margin: "10px" }} variant="secondary">
              Cancel
            </Button>
            <Button onClick={handler} variant="primary">
              Confirm Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
