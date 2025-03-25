import { useEffect, useState } from "react";
import { retrieveVehicleEventsList } from './VehicleApiServices';
import { useNavigate } from "react-router-dom";

function VehicleEvents(){

   const [vehicleEvents,setVehicleEvents] = useState([]);
   const navigate = useNavigate();

   function handleAddVehicle(){

    navigate('/AddVehicleEvent'); 
}
   
       useEffect(()=>{
            retrieveVehicleEventsList()           
            .then(response => {setVehicleEvents(response.data)})
            .catch((error) => console.error("Error in fetching vehicle event details",error));
       }, []);
   
       return(
           <div className="container" align="center">
           <h3>VEHICLES ISSUES LIST</h3>
           <table className = "table">
               <thead>
                   <tr>
                       <th>VEHICLE UNIQUE ID</th>
                       <th>VEHICLE EVENT ID</th>
                       <th>VEHICLE HEALTH</th>
                       <th>STATUS</th>
                       <th>FAULT DESCRIPTION</th>
                       <th>CREATED TIME</th>   
                   </tr>
               </thead>   
               <tbody>
                   {
                       vehicleEvents.map((vehicleEvent) => (
                           <tr key={vehicleEvent.vehicleEventId}>
                               <td>{vehicleEvent.vehicleId}</td>
                               <td>{vehicleEvent.vehicleEventId}</td>
                               <td>{vehicleEvent.vehicleHealthStatus}</td>                              
                               <td>{vehicleEvent.eventStatus ? "ACTIVE" : "INACTIVE"}</td>
                               <td>{vehicleEvent.faultDescription}</td>
                               <td>{vehicleEvent.localDateTime}</td>   
                           </tr>
                           ))
                   }
               </tbody>
           </table>  
           <div className="btn btn-success m-5" onClick={handleAddVehicle}>Log Vehicle Issue</div>         
         </div>
       );
}
export default VehicleEvents;