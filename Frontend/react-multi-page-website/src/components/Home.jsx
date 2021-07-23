import React from "react";

function Home() {
  return (
    <div className="home" style={{
      backgroundImage: 'url("https://www.wallpapertip.com/wmimgs/242-2424227_isaiah-thomas-4k-nba-basketball-cleveland-cavaliers.jpg")',
      position: "fixed",
      width: "100%",
      height: "100%",
      backgroundSize: "cover",

    }}>
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h2 class="font-weight-strong">Welcome To The NBA Dashboard!</h2>
            <h4 class="font-weight-strong">'Statistics' Page</h4>
            <p>
              Sortable Player Stat Sheet with All Season Averages
            </p>
            <h4 class="font-weight-strong">'Search' Page</h4>
            <p>
              Player Search Tool Returning Player Biography and Season Averages (Current Rosters)
            </p>
            <h4 class="font-weight-strong">'Schedule' Page</h4>
            <p>
              NBA Schedule and Scores  (Playoffs 2021)
            </p>
            <h4 class="font-weight-strong">'Highlights' Page</h4>
            <p>
              NBA Current News and Highlights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;