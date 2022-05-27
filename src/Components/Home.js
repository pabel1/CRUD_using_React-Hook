import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { DataContext } from "../Components/myContext";

export default function Home() {
  const [data, setData] = useContext(DataContext);

  return (
    <div>
      <Link to="/usercreate">
        <Button style={{ margin: "20px 0" }} variant="primary">
          Create User
        </Button>
      </Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th> Name</th>
            <th> Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td>{data.id}</td>
              <td>{data.Name}</td>
              <td>{data.position}</td>
              <td>{data.salary}</td>
              <td>
                <Link to={"/read/" + data.id}>
                  <Button style={{ margin: "0 5px" }} variant="success">
                    Read
                  </Button>
                </Link>

                <Link to={"/edit/" + data.id}>
                  <Button style={{ margin: "0 5px" }} variant="warning">
                    Edit
                  </Button>
                </Link>

                <Link to={"/delete/" + data.id}>
                  <Button style={{ margin: "0 5px" }} variant="danger">
                    Delete
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
