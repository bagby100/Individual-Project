import axios from "axios";
import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";

function Statistics() {
  const [players, setPlayers] = useState([]);
  const getPlayerData = async () => {
    try {
      const data = await axios.get(
        "https://nba-players.herokuapp.com/players-stats"
      );
      console.log(data);
      setPlayers(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  const columns = [
    {
      dataField: "name", text: "Player Name", sort: "true"},
    {
      dataField: "team_name", text: "Team", sort: "true"},
    {
      dataField: "games_played", text: "GP", sort: "true", sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "points_per_game", text: "PPG", sort: "true", sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {dataField: "assists_per_game", text: "APG", sort: "true"},
    {
      dataField: "rebounds_per_game", text: "RPG", sort: "true", sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "offensive_rebounds_per_game", text: "OREB", sort: "true", sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "defensive_rebounds_per_game", text: "DREB", sort: "true", sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "steals_per_game", text: "SPG", sort: "true", sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
    {
      dataField: "three_point_percentage", text: "3PP", sort: "true", sortFunc: (a, b, order, dataField, rowA, rowB) => {
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      }
    },
  ]
  useEffect(() => {
    getPlayerData();
  }, []);

  return <div className="statistics">
    <BootstrapTable
      keyField="name"
      data={players}
      columns={columns}
      pagination={paginationFactory()}
    />
    <center>
      <img src="https://i.postimg.cc/xjJCxtMJ/rawImage.jpg" alt="alternatetext"></img>
    </center>
    < br />
    < br />
    < br />
    < br />
    < br />
  </div>
}


export default Statistics;