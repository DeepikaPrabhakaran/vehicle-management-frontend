import { Link } from 'react-router-dom'


function HeaderComponent() {

    return (
        <header className="border-bottom border-dark border-3 mb-5 p-2">
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-md">
                    <div class="container-fluid d-flex flex-column">
                        <a className="navbar-brand ms-1 fs-2 fw-bold text-black" href="/">
                            Vehicle Monitoring Application</a>                   
                            <div className="collapse navbar-collapse">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/VehiclesList">Vehicles List</Link> 
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/VehicleEventsList">Vehicles Fault List</Link>
                                    </li>
                                </ul>
                            </div>
                       </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default HeaderComponent;