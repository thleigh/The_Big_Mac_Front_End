import React, { useState } from 'react';
import USAMap from 'react-usa-map';
import {Button, Modal} from 'react-bootstrap'
import '../App.css';

const Map = (props) => {
    let [modalState, setModalState] = React.useState(false);
    let [state, setState] = useState([])

    let mapHandler = (e) => {
        setState(e.target.dataset.name);
        setModalState(true)
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
            <USAMap onClick={(e) => mapHandler(e)}/>
            <Button className="buttonModal btn-info" variant="primary" onClick={() => setModalState(true)}>
                Button
            </Button>

            <StateModal
                show={modalState}
                onHide={() => setModalState(false)}
            />
        </div>
    );
}

export default Map