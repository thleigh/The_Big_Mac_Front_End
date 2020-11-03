import React from 'react';
import USAMap from 'react-usa-map';
import {Button, Modal} from 'react-bootstrap'
import '../App.css';

const Map = (props) => {
    const [modalState, setModalState] = React.useState(false);

    let mapHandler = (e) => {
        alert(e.target.dataset.name);
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
                State Name
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <p className="aboutParagraph">
                This will have data for selected state
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
            <USAMap onClick = { (e) =>  mapHandler(e) } />
            <Button className="buttonModal btn-info" variant="primary" onClick={() => setModalState(true)}>
                Tanner Leigh
            </Button>

            <StateModal
                show={modalState}
                onHide={() => setModalState(false)}
            />
        </div>
    );
}

export default Map