import axios from "axios";
import React, {useEffect, useState} from "react";
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
    {dataField: "name", text: "Player Name"},
    {dataField: "team_name", text: "Team"},
    {dataField: "games_played", text: "GP"},
    {dataField: "minutes_per_game", text: "MPG"},
    {dataField: "points_per_game", text: "PPG"},
    {dataField: "rebounds_per_game", text: "RPG"},
    {dataField: "offensive_rebounds_per_game", text: "OREB"},
    {dataField: "defensive_rebounds_per_game", text: "DREB"},
    {dataField: "steals_per_game", text: "SPG"},
    {dataField: "three_point_percentage", text: "3PP"},
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
  </div>
}


export default Statistics;