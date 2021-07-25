import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.scss";
class Navbar extends Component<any> {
    render() {

        return (
            <ul className="navbar navbar-dark bg-dark custom-navbar">
                <p className="nav-link active navbar-brand"><Link to="/">Counter</Link> <span className="badge badge-pill badge-primary">{this.props.navbarCounter}</span></p>
                <p className="nav-link navbar-brand"><Link to="quiz">Quiz Demo</Link></p>
                <p className="nav-link navbar-brand">Socket Demo</p>
            </ul>
        )
    }
}

const mapStateToProps = (state: any) => ({
    navbarCounter: state.navbarCounter,
});

export default connect(mapStateToProps)(Navbar);