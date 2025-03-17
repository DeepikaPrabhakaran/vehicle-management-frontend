import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { retrieveVehiclesList, updateVehicleStatus } from './VehicleApiServices';

function VehiclesList() {

    const [vehicles, setVehicles] = useState([]);
    const navigate = useNavigate();

    function handleAddVehicle() {

        navigate('/AddVehicle');
    }

    useEffect(() => {
        retrieveVehiclesList()
            .then(response => { setVehicles(response.data) })
            .catch((error) => console.error("Error in fetching vehicle details", error));
    }, []);


    console.log("vehicles :  " + vehicles.length);
    return (
        <div align="center" className="container">
            <h3>VEHICLES LIST</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>VEHICLE ID</th>
                        <th>NAME</th>
                        <th>VEHICLE STATUS</th>
                        <th>VEHICLE RECENT HEALTH</th>
                        <th>NO OF FAULTS</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        vehicles.map((vehicle) => (
                            <tr key={vehicle.vehicleId}>
                                <td>
                                    <Link key={vehicle.vehicleId} className="nav-link" to={`/vehicles/id/${vehicle.vehicleId}`} >  {vehicle.vehicleId}  </Link>
                                </td>
                                <td>{vehicle.name}</td>
                                <td>{vehicle.vehicleStatus ? "ACTIVE" : "INACTIVE"}</td>
                                <td>{vehicle.vehicleHealthStatus}</td>
                                <td>{vehicle.numberOfFaults}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="btn btn-success m-5" onClick={handleAddVehicle}>Register Vehicle</div>
        </div>
    );
}

export default VehiclesList;