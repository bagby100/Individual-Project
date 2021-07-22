import React from "react";

function Home() {
  return (
    <div className="home"style={{
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
            <h2 class="font-weight-light">Welcome To The NBA Dashboard!</h2>
            <p>
              This site was created to allow you to search all of your preferred NBA Players and Stats. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;