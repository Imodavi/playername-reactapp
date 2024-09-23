// src/Player.js
import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", textAlign: "center" }}>
      <Card.Img variant="top" src={imageUrl} alt={`${name} image`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

// Default props
Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://example.com/default-player.jpg",
};

// PropTypes for validation
Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

export default Player;
