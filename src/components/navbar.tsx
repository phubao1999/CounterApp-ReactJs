import { Component } from "react";
import { connect } from "react-redux";
class Navbar extends Component<any> {
    render() {

        return (
            <ul className="navbar navbar-dark bg-dark">
                <p className="nav-link active navbar-brand">Counter <span className="badge badge-pill badge-primary">{this.props.navbarCounter}</span></p>
                <p className="nav-link navbar-brand">TODO</p>
                <p className="nav-link navbar-brand">TODAY</p>
            </ul>
        )
    }
}

const mapStateToProps = (state: any) => ({
    navbarCounter: state.navbarCounter,
});

export default connect(mapStateToProps)(Navbar);