import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/" >
                        NBA Dashboard
                    </Link>

                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/about" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/about">
                                    About
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/statistics" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/statistics">
                                    Statistics
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/search" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/search">
                                    Search
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/schedule" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/schedule">
                                    Schedule
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${props.location.pathname === "/highlights" ? "active" : ""
                                    }`}
                            >
                                <Link class="nav-link" to="/highlights">
                                    Highlights
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);