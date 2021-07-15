import { Component } from "react";

// interface navBarProps {
//     totalCounters: number
// }
class Navbar extends Component {

    render() {
        return (
            // <nav className="navbar navbar-dark bg-dark">
            //     <p className="navbar-brand">
            //         Navbar 
            //         {/* <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span> */}
            //     </p>
            //     <p className="navbar-brand">
            //         Navbar 
            //         {/* <span className="badge badge-pill badge-primary">{this.props.totalCounters}</span> */}
            //     </p>
            // </nav>
            <ul className="navbar navbar-dark bg-dark">
                <p className="nav-link active navbar-brand">Counter</p>
                <p className="nav-link navbar-brand">TODO</p>
                <p className="nav-link navbar-brand">TODAY</p>
            </ul>
        )
    }
}

export default Navbar;