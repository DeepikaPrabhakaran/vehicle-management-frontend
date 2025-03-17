import { Form, Formik, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { registerNewVehicleEvent, retrieveVehiclesList, retrieveVehicleFaultList } from './VehicleApiServices';
import { useState, useEffect } from "react";

function AddVehicle() {

    const [vehicleEvent, setVehicleEvent] = useState();
    const [vehiclesList, setVehiclesList] = useState([]);
    const [vehicleHealthEnumList, setVehicleHealthEnumList] = useState([]);


    const navigate = useNavigate();

    useEffect(() => {
        retrieveVehiclesList()
            .then(response => { setVehiclesList(response.data) })
            .catch((error) => console.error("Error in fetching vehicle details", error));

        retrieveVehicleFaultList()
            .then(response => {
                setVehicleHealthEnumList(response.data)
            })
            .catch((error) => console.error("Error in fetching vehicle Health Status", error));
    }, []);


    function validate(values) {
        let errors = {}

        if (values.faultDescription === null || values.faultDescription === '' || values.faultDescription.trim() === '') {
            errors.faultDescription = 'Describe issue';
        }

        if (!values.vehicle) {
            errors.vehicle = 'Choose the Vehicle ID to add the fault';
        }

        if (!values.vehicleEventHealthStatus) {
            errors.vehicleEventHealthStatus = 'Choose the fault status';
        }
        return errors;
    }

    function onSubmit(values) {

        const newVehicleEvent = {
            vehicle: {
                id: values.vehicle,
            },
            vehicleEventHealthStatus: values.vehicleEventHealthStatus,
            faultDescription: values.faultDescription,
        }

        registerNewVehicleEvent(newVehicleEvent)
            .then(response => {
                setVehicleEvent(response.data);
                navigate('/VehicleEventsList')
            })
            .catch((error) => console.error("Error in logging the issue: ", error));
    }
    return (
        <div className="container">
            <h3> Vehicle Service Inquiry Detail</h3>
            <div>
                <Formik initialValues={{
                    vehicle: "",
                    vehicleEventHealthStatus: "",
                    faultDescription: "",
                }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnBlur={false}
                >
                    {
                        () => (
                            <Form>
                                <div className="row">
                                    <div className="col-md-5">
                                        <fieldset className="form-group">
                                            <label>Vehicle ID</label>
                                            <Field as="select" className="form-control" name="vehicle">
                                                <option value="">CHOOSE VEHICLE ID</option>
                                                {
                                                    vehiclesList.map((vehicle, index) => (
                                                        <option key={index} value={vehicle.vehicleId}>{vehicle.vehicleId}</option>
                                                    ))
                                                }
                                            </Field>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-1">
                                        <ErrorMessage name="vehicle" component="fieldset" className="alert alert-warning" style={{ marginTop: '5px', fontSize: '18px', padding: '10px 20px', width: '500px' }} />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-md-5">
                                        <fieldset className="form-group">
                                            <label>Fault Status</label>
                                            <Field as="select" className="form-control" name="vehicleEventHealthStatus" >
                                                <option value="">CHOOSE HEALTH STATUS</option>
                                                {
                                                    vehicleHealthEnumList.map((vehicleHealthEnumList, index) => (
                                                        <option key={index} value={vehicleHealthEnumList}>{vehicleHealthEnumList}</option>
                                                    ))
                                                }
                                            </Field>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-1">
                                        <ErrorMessage name="vehicleEventHealthStatus" component="fieldset" className="alert alert-warning" style={{ marginTop: '5px', fontSize: '18px', padding: '10px 20px', width: '500px' }} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-5">
                                        <fieldset className="form-group">
                                            <label>Fault Description</label>
                                            <Field as="textarea" className="form-control" name="faultDescription" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-1">
                                        <ErrorMessage name="faultDescription" component="fieldset" className="alert alert-warning" style={{ marginTop: '5px', fontSize: '18px', padding: '10px 20px', width: '500px' }} />
                                    </div>
                                </div>

                                <div>
                                    <button className="btn btn-success m-5" type="submit">Save</button>
                                </div>
                            </Form>
                        )}
                </Formik>
            </div>
        </div>
    );
}

export default AddVehicle;