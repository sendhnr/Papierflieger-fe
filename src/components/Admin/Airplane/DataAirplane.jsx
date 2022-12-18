/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table, Alert } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import "./DataAirplane.scss";
import { Link } from "react-router-dom";
import { getAirplane, deleteAirplane } from "../../../store/actions/airplane";

const DataAirplane = () => {
  const { loading, data, errorMessage, message } = useSelector((state) => state.airplaneReducer);
  const [messages, setMessages] = useState("");
  const [eror, setEror] = useState("");
  const [edit, setEdit] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAirplane());
  }, [dispatch]);
  useEffect(() => {
    if (errorMessage) {
      setEror(errorMessage);
      window.setTimeout(() => {
        setMessages("");
      }, 3000);
    }
    if (message) {
      setMessages(message);
      window.setTimeout(() => {
        setMessages("");
      }, 3000);
    }
  }, [data]);
 console.log(message)
  console.log(data);
  const handleDelete = (id) => {
      dispatch(deleteAirplane(id));
  };
  return (
    <div className="data-airplane">
      <Container>
        <Link to="/admin/airplane/new" style={{ textDecoration: "none" }}>
          <Button className="btn-primary mb-3" type="submit" value="Submit">
            Tambahkan data pesawat
          </Button>
        </Link>
        {messages && (
          <Alert key="primary" variant="primary">
            <>{message}</>
          </Alert>
        )}
        {eror && (
          <Alert key="danger" variant="danger">
            {eror}
          </Alert>
        )}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nama Pesawat</th>
              <th>Kode Pesawat</th>
              <th>Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((airplane) => (
              <tr key={airplane.id}>
                <td>{airplane.airplaneName}</td>
                <td>{airplane.airplaneCode}</td>
                <td>{airplane.class}</td>
                <td>
                  {/* <Link to="/admin/airplane/edit" style={{ textDecoration: "none" }}> */}
                    <Button onClick={()=>{setEdit(airplane);}}>
                      <FiEdit />
                    </Button>
                  {/* </Link> */}
                  <Button className="delete" onClick={() => handleDelete(airplane.id)}>
                    <MdDelete />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {loading && <h1>loadiiiiiing.......</h1>}
      </Container>
    </div>
  );
};

export default DataAirplane;
