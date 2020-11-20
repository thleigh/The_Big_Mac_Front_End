import React, { useState } from 'react';
import USAMap from 'react-usa-map';
import {Button, Modal} from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Map = (props) => {
    let [modalState, setModalState] = React.useState(false);
    let [state, setState] = useState([]);
    let [stateData, setStateData] = useState('');
    let [location, setLocation] = useState('');

    // let handleStateDate = (e) => {
    //     e.preventDefault()
    //     axios.get(`${REACT_APP_SERVER_URL}/api/bigmacs/${location}`)
    //     .then(response => {
    //         setStateData(response.data)
    //     })
    //     .catch(err => console.log(err))    
    // }

    let mapHandler = (e) => {
        setState(e.target.dataset.name);
        setModalState(true);
        // handleStateDate(e.target.dataset);
    };

    let statesCustomConfig = () => {
        return {
          "NJ": {
            fill: "navy",
            name: "New Jersey",
          },
          "NY": {
            fill: "#CC0000"
          }
        };
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
                { state } data.
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
            <USAMap customize={statesCustomConfig()} onClick={(e) => mapHandler(e)}/>

            <StateModal
                show={modalState}
                onHide={() => setModalState(false)}
            />

        </div>
    );
}

export default Map