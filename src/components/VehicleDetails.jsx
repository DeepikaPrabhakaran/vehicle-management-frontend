import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { retrieveVehicleListById, updateVehicleStatus } from './VehicleApiServices';


function VehicleDetails() {

    const [vehicle, setVehicle] = useState([]);
    const vehicleId = useParams();

    const handleVehicleStatus = (vehicleId) => {       
    
            updateVehicleStatus(vehicleId)
            .then(response => {setVehicle(response.data)})
            .catch((error) => console.error("Error in updating the status",error));
        }
    
    useEffect(() => {
        retrieveVehicleListById(vehicleId.id)
            .then(response => { setVehicle(response.data) })
            .catch((error) => console.error("Error in fetching vehicle details", error));
    }, [vehicleId]);

    return (
        <div>
            <div className="container mt-20">
                <h2>Vehicle Details</h2>
                <div className="card shadow-lg p-4">
                    <h2 className="text-center text-primary">{vehicle.name}</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-5">
                            <p><strong>VEHICLE ID  </strong> </p>
                            <p><strong>NAME  </strong> </p>
                            <p><strong>MODEL  </strong> </p>
                            <p><strong>VRN    </strong> </p>
                            <p><strong>STATUS  </strong> </p>
                            <p><strong>HEALTH    </strong> </p>
                            <p><strong>NO OF FAULTS         </strong> </p>
                            <p><strong>EVENTS LIST         </strong> </p>

                        </div>
                        <div className="col-md-5">
                            <p>{vehicle.vehicleId}</p>
                            <p> {vehicle.name}</p>
                            <p>{vehicle.model}</p>
                            <p>{vehicle.vrn}</p>
                            <p>{vehicle.vehicleStatus ? "ACTIVE" : "INACTIVE"}</p>
                            <p>{vehicle.vehicleHealthStatus}</p>
                            <p>{vehicle.numberOfFaults}</p>
                            <div>
                                {
                                    vehicle?.vehicleEventsList?.map((vehicleEvent) => (
                                        <span key={vehicleEvent.vehicleEventId}> {vehicleEvent.vehicleEventId} ,</span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div align="center">
                <button className="btn btn-success m-1" onClick={() => window.history.back()}>
                    Go Back
                </button>
                <button className="btn btn-warning m-1" onClick={() => handleVehicleStatus(vehicle.vehicleId)}>
                    Deactivate
                </button>
                </div>
            </div>
        </div>
    );
}

export default VehicleDetails;