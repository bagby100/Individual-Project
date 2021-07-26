import React from "react";

function Footer() {
  const style = {
    position: "absolute",
    left: "0",
    bottom: "0",
    right: "0",
    height: "calc(100% - 60px)",
}
  return (
    <div className="footer" style = {{style}}>
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Bagby 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
