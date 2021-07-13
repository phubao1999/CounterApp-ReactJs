export default function Navbar(props: any) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <p className="navbar-brand">
                Navbar <span className="badge badge-pill badge-primary">{props.totalCounters}</span>
            </p>
        </nav>
    )
}