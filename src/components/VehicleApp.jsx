
import { Routes, Route } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import VehiclesList from './VehiclesList';
import VehicleEvents from './VehicleEvents';
import VehicleDetails from './VehicleDetails';
import AddVehicle from './AddVehicle';
import AddVehicleEvent from './AddVehicleEvent';
import  SuccessPage  from './SuccessPage';

function VehicleApp() {
    return (
        <div className="VehicleApp">

            <HeaderComponent />
            <Routes>
                <Route path={`/vehicles/id/:id`} element={<VehicleDetails />} />
                <Route path='/VehiclesList' element={<VehiclesList />} />
                <Route path='/VehicleEventsList' element={<VehicleEvents />} />
                <Route path='/AddVehicle' element={<AddVehicle />} />
                <Route path='/AddVehicleEvent' element={<AddVehicleEvent />} />
                <Route path="/Success" component={<SuccessPage />} />
                <Route path='/' element={<VehiclesList />} />
            </Routes>
        </div>
    );
}

export default VehicleApp;