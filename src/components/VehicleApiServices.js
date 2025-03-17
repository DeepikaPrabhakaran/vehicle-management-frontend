import { apiClient } from './VehicleApi'


export const retrieveVehicleListById
    = (vehicleId) => apiClient.get(`/vehicles/id/${vehicleId}`)


export const retrieveVehicleEventsList
    = () => apiClient.get(`/vehicle-events/`)


export const retrieveVehiclesList
= () => apiClient.get(`/vehicles/`)


export const registerNewVehicle
 = (newVehicle) => apiClient.post(`/vehicles/create`, newVehicle)


 export const registerNewVehicleEvent
 = (newVehicleEvent) => apiClient.post(`/vehicle-events/create`, newVehicleEvent)

 export const updateVehicleStatus
 = (vehicleId) => apiClient.patch(`vehicles/updateStatus/${vehicleId}`)

 export const retrieveVehicleFaultList
= () => apiClient.get(`/vehicle-health/healthStatusList`)
 
