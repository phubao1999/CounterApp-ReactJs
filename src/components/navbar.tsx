import { Component } from "react";

interface navBarProps {
    totalCounters: number
}
class Navbar extends Component<navBarProps> {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <p className="navbar-brand">
                    Navbar <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span>
                </p>
            </nav>
        )
    }
}

export default Navbar;