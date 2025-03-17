Vehicle Monitoring Application:

This front end application is a populate the values back and forth from the DB,

Added below components,

AddVehicle.jsx - to register a new vehicle before logging any faults validates a empty in the form.
AddVehicleEvent.jsx - to log any new issue for the existing vehicle that would be listed while loading
HeaderComponent.jsx - Added this to visit the listed Vehicle and VehicleEvents page.
VehicleApi.js - is the base URL to connect to the backend.
VehicleApiService.jsx - unique URLs to connect with the specific controller methods along with the variables and the requst body
VehicleApp.jsx - to navigate to the components through the URL, splits the code if need to implement any authorization.
VehicleDetails,jsx - display the details of the registered vehicle aldo can deactivate the vehicle, also it deactivates the associated vehicle events logged
VehicleEvents - to log the events for the existing vehicle
VehicleList - displays all the vehicle details irrespective of the status.


