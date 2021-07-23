import axios from "axios";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import { render } from "react-dom";

var score = {
  "1": {
    "team1": "Bucks",
    "team2": "Suns",
    "score1": 105,
    "score2": 118
  },
  "2": {
    "team1": "Bucks",
    "team2": "Suns",
    "score1": 108,
    "score2": 118
  },
  "3": {
    "team1": "Bucks",
    "team2": "Suns",
    "score1": 120,
    "score2": 100
  },
  "4": {
    "team1": "Bucks",
    "team2": "Suns",
    "score1": 109,
    "score2": 103
  },
  "5": {
    "team1": "Bucks",
    "team2": "Suns",
    "score1": 123,
    "score2": 119
  },
  "6": {
    "team1": "Bucks",
    "team2": "Suns",
    "score1": 105,
    "score2": 98
  }
}


function Schedule() {
  const tdStyle = {
    border: "2px solid #ddd"
  }
  const tdStyle2 = {
    fontWeight: "bold",
    border: "2px solid #DDD"
  }
  const tdStyle3 = {
    fontWeight: "bold",
    border: "2px solid #DDD",
    fontSize: "50px",
    color: "white"
  }
  return (
    <div className="schedule">
      <table class="table">
        <thead>
          <tr>
            <th>Game</th>
            <th>Team</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td background="https://i.postimg.cc/0jWLmL0k/bucks-vs-suns-760x422-5-550x70.jpg" style={tdStyle3} rowspan="2" >1</td>  <td style={tdStyle}>Bucks</td> <td style={tdStyle}>105</td>
          </tr>
          <tr>
            <td style={tdStyle2}>Suns</td> <td style={tdStyle2}>118</td>
          </tr>
          <tr>
            <td background="https://i.postimg.cc/0jWLmL0k/bucks-vs-suns-760x422-5-550x70.jpg" style={tdStyle3} rowspan="2">2</td>  <td style={tdStyle}>Bucks</td> <td style={tdStyle}>108</td>
          </tr>
          <tr>
            <td style={tdStyle2}>Suns</td> <td style={tdStyle2}>118</td>
          </tr>
          <tr>
            <td background="https://i.postimg.cc/0jWLmL0k/bucks-vs-suns-760x422-5-550x70.jpg" style={tdStyle3} rowspan="2">3</td>  <td style={tdStyle2}>Bucks</td> <td style={tdStyle2}>120</td>
          </tr>
          <tr>
            <td style={tdStyle}>Suns</td> <td style={tdStyle}>100</td>
          </tr>
          <tr>
            <td background="https://i.postimg.cc/0jWLmL0k/bucks-vs-suns-760x422-5-550x70.jpg
" style={tdStyle3} rowspan="2">4</td>  <td style={tdStyle2}>Bucks</td> <td style={tdStyle2}>109</td>
          </tr>
          <tr>
            <td style={tdStyle}>Suns</td> <td style={tdStyle}>103</td>
          </tr>
          <tr>
            <td background="https://i.postimg.cc/0jWLmL0k/bucks-vs-suns-760x422-5-550x70.jpg
" style={tdStyle3} rowspan="2">5</td>  <td style={tdStyle2}>Bucks</td> <td style={tdStyle2}>123</td>
          </tr>
          <tr>
            <td style={tdStyle}>Suns</td> <td style={tdStyle}>119</td>
          </tr>
          <tr>
            <td background="https://i.postimg.cc/0jWLmL0k/bucks-vs-suns-760x422-5-550x70.jpg
" style={tdStyle3} rowspan="2">6</td>  <td style={tdStyle2}>Bucks</td> <td style={tdStyle2}>105</td>
          </tr>
          <tr>
            <td style={tdStyle}>Suns</td> <td style={tdStyle}>98</td>
          </tr>
        </tbody>
      </table>
      <center>
        <img src="https://i.postimg.cc/Rq52XMfR/1200px-The-NBA-Finals-logo-svg.png" alt="alternatetext"></img>
      </center>
    </div>

  );
}


export default Schedule;