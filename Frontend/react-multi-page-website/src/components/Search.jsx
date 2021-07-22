import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from "axios";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerName: null,
            season: null,
            playerStats: {},
            playerAttributes: {}
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.getPlayerId();
    }

    handleChange = (event) => {
        const replace = event.target.value.split(" ").join("_");
        if (replace.length > 0) {
            this.setState({ playerName: replace })
            this.setState({ season: replace })
        } else {
            alert("Please type players name!")
        }
    }

    getPlayerId = () => {
        axios.get(`https://www.balldontlie.io/api/v1/players?search=${this.state.playerName}`)
            .then(async res => {
                // console.log(res.data.data)
                if (res.data.data[0] === undefined) {
                    alert("Player Unknown")
                } else if (res.data.data.length > 1) {
                    for (let key in res.data.data) {
                        console.log((res.data.data[key]["last_name"] + ", " + res.data.data[key]["first_name"]))
                    }
                }
                else {
                    this.setState({ playerAttributes: res.data.data[0] })
                    await this.getPlayerStats(res.data.data[0].id)

                }
            }).catch(err => {
                console.log(err)
            })

            
    }

    getPlayerStats = (playerId) => {
        axios.get(`https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=${playerId}`)
            .then(async res => {
                console.log(res.data.data)
                this.setState({ playerStats: res.data.data[0] })
            }).catch(err => {
                console.log(err)
            })
    }


    render() {
        const thStyle = {
            paddingTop: "12px",
            paddingBottom: "12px",
            textAlign: "left",
            backgroundColor: "#2B2D2F",
            color: "white",
            border: "1px solid #ddd",
            padding: "8px"
        }
        const tdStyle = {
            border: "1px solid #ddd",
            padding: "8px",
            backgroundColor: "#FFFFFF",
        }
        return (
            <div className="Search" style={{
                backgroundImage: 'url("https://www.desktopbackground.org/download/o/2013/01/16/515665_download-wallpapers-3840x2160-nba-live-15-basketball-portland_3840x2160_h.jpg")',
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
              }}>
                <center>
                <form onSubmit={this.handleSubmit}>
                <br />
                    <label>Name : </label>
                        
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                            placeholder="i.e 'Lebron James' "
                        />
                    
                    <br />
                    <input type="submit" value="Submit" />
                    <br />
                </form>
                <br />
                <table>
                    <tr>
                        <th style={thStyle}>Name</th>
                        <td style={tdStyle}>{this.state.playerAttributes["first_name"]} {this.state.playerAttributes["last_name"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}> Weight lbs</th>
                        <td style={tdStyle}>{this.state.playerAttributes["weight_pounds"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}> Height </th>
                        <td style={tdStyle}>{this.state.playerAttributes["height_feet"]}ft, {this.state.playerAttributes["height_inches"]}inches</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>POS</th>
                        <td style={tdStyle}>{this.state.playerAttributes["position"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>GP</th>
                        <td style={tdStyle}>{this.state.playerStats["games_played"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>PPG</th>
                        <td style={tdStyle}>{this.state.playerStats["pts"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>BPG</th>
                        <td style={tdStyle}>{this.state.playerStats["blk"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>TO</th>
                        <td style={tdStyle}>{this.state.playerStats["turnover"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>REB</th>
                        <td style={tdStyle}>{this.state.playerStats["reb"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>SPG</th>
                        <td style={tdStyle}>{this.state.playerStats["stl"]}</td>
                    </tr>
                    <tr>
                        <th style={thStyle}>3PG</th>
                        <td style={tdStyle}>{this.state.playerStats["fg3a"]}</td>
                    </tr>
                </table>
                </center>
            </div>
        );
    }
}
export default Search;