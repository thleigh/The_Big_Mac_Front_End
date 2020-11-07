import React, { useState } from 'react';
import USAMap from './react-usa-map/src/index';
import { Button, Modal, Table } from 'react-bootstrap'
import '../App.css';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Map = (props) => {
    let [modalState, setModalState] = React.useState(false);
    let [state, setState] = useState([])
    let [main, setMain] = useState([]);

    let handleStateData = (e) => {
      axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/${e}`)
      .then(response => {
        setMain(response.data)
        setModalState(true);  
      })
      .catch(err => console.log(err))

    }

    let mapHandler = (e) => {
      setState(e.target.dataset.name);
      handleStateData(e.target.dataset.name);
    };

    function StateModal(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               { state }
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p className="aboutParagraph">
              <Table striped bordered hover>
                      <thead>
                          <tr>
                          <th>#</th>
                          <th>City</th>
                          <th>State</th>
                          <th>Big Mac Meal Price</th>
                          </tr>
                      </thead>
                      <tbody>
                      {main.map((bigmac, index) => (
                          <tr key={index}>
                              <td>#</td>
                              <td> {bigmac.location.split(',')[0]} </td>
                              <td> {bigmac.location.split(',')[1]} </td>
                              <td> ${bigmac.price} </td>
                          </tr>
                      ))}
                      </tbody>
                  </Table>
            </p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn-info" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <div>
            <h5>
              Click on any state to see it's Data.
            </h5>
            <USAMap onClick={(e) => mapHandler(e)}/>

            <StateModal
                show={modalState}
                onHide={() => setModalState(false)}
            />

        </div>
    );
}

export default Map