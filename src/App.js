import "./App.css";
import React, { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
  const [showEvent, setShowEvent] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [events, setEvents] = useState([
    { title: "mario's birthday bash", id: 1 },
    { title: "browser's live stream", id: 2 },
    { title: "race on moo moo farm", id: 3 },
  ]);

  console.log(showModal);
  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const subtitle = "Some title in my website";
  return (
    <div className="App">
      <Title title="Alaa's" subtitle={subtitle} />
      {/* <Title title="Shaimaa's" subtitle="something else" /> */}

      {showEvent && (
        <div>
          <button
            onClick={() => {
              setShowEvent(false);
            }}
          >
            Hide event
          </button>
        </div>
      )}
      {!showEvent && (
        <div>
          <button
            onClick={() => {
              setShowEvent(true);
            }}
          >
            Show Event
          </button>
        </div>
      )}

      {showEvent && <EventList events={events} handleClick={handleClick} />}
      {showModal && (
        <Modal handleClose={handleClose} isSalesModal={true}>
          <h2>Terms and Conditions</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error odit
            nam et reprehenderit quibusdam temporibus officia dolorum quo sint
            nemo quis, laborum, quasi nisi fugit praesentium debitis
            repudiandae! Sapiente, omnis.
          </p>
          <a href="#">find out more...</a>
        </Modal>
      )}
      <div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Terms and Conditions
        </button>
      </div>
    </div>
  );
}

export default App;
