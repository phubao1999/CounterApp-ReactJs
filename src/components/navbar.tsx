import { Component } from "react";
class Navbar extends Component<any> {
    render() {
        const { navbarCounter } = this.props;

        return (
            <ul className="navbar navbar-dark bg-dark">
                <p className="nav-link active navbar-brand">Counter <span className="badge badge-pill badge-primary">{navbarCounter}</span></p>
                <p className="nav-link navbar-brand">TODO</p>
                <p className="nav-link navbar-brand">TODAY</p>
            </ul>
        )
    }
}

export default Navbar;