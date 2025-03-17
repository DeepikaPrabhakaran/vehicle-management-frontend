import { Form, Formik, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { registerNewVehicle, retrieveVehicleFaultList } from './VehicleApiServices';
import { useState, useEffect } from "react";

function AddVehicle() {

    const [vehicle, setVehicle] = useState();
    const navigate = useNavigate();
    const [vehicleHealthEnumList, setVehicleHealthEnumList] = useState([]);

    useEffect(() => {
        retrieveVehicleFaultList()
            .then(response => {
                setVehicleHealthEnumList(response.data)
            })
            .catch((error) => console.error("Error in fetching vehicle Health Status", error));
    }, []);

    function onSubmit(values) {

        const newVehicle = {
            name: values.vehicleName,
            model: values.model,
            vrn: values.vrn,
            vehicleHealthStatus: values.vehicleHealthStatus,
        }

        registerNewVehicle(newVehicle)
            .then(response => {
                setVehicle(response.data);
                navigate('/VehiclesList')
            })
            .catch((error) => console.error("Error in registering the vehicle : ", error));
    }


    function validate(values) {
        let errors = {}

        if (values.vehicleName === null || values.vehicleName === '' || values.vehicleName.trim() === '') {
            errors.vehicleName = 'Enter the Vehicle Name';
        }
        if (values.vrn === null || values.vrn === '' || values.vrn.trim() === '') {
            errors.vrn = 'Enter the VRN Number';
        }
        if (values.model === null || values.model === '' || values.model.trim() === '') {
            errors.model = 'Enter the Model Name';
        }
        if (!values.vehicleHealthStatus) {
            errors.vehicleHealthStatus = 'Choose the Vehicle Status';
        }
        
        return errors;
    }


    return (
        <div className="container">
            <h3> Enter Vehicle Details</h3>
            <div>
                <Formik initialValues={{
                    vehicleName: "",
                    model: "",
                    vrn: "",
                    vehicleHealthStatus: "",
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
                                            <label>VEHICLE NAME </label>
                                            <Field type="text" className="form-control" name="vehicleName" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-1">
                                        <ErrorMessage name="vehicleName" component="fieldset" className="alert alert-warning" style={{ marginTop: '5px', fontSize: '18px', padding: '10px 20px', width: '500px' }} />
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-5">
                                        <fieldset className="form-group">
                                            <label>VEHICLE MODEL</label>
                                            <Field type="text" className="form-control" name="model" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-1">
                                        <ErrorMessage name="model" component="fieldset" className="alert alert-warning" style={{ marginTop: '5px', fontSize: '18px', padding: '10px 20px', width: '500px' }} />
                                    </div>
                                </div>

                                
                                <div className="row">
                                    <div className="col-md-5">
                                        <fieldset className="form-group">
                                            <label>VEHICLE VRN</label>
                                            <Field type="text" className="form-control" name="vrn" />
                                        </fieldset>
                                    </div>
                                    <div className="col-md-1">
                                        <ErrorMessage name="vrn" component="fieldset" className="alert alert-warning " style={{ marginTop: '5px', fontSize: '18px', padding: '10px 20px', width: '500px' }} />
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-md-5">
                                        <fieldset className="form-group">
                                            <label>HEALTH STATUS</label>
                                            <Field as="select" className="form-control" name="vehicleHealthStatus" >
                                                <option value="">CHOOSE</option>
                                                {
                                                    vehicleHealthEnumList.map((vehicleHealthEnumList, index) => (
                                                        <option key={index} value={vehicleHealthEnumList}>{vehicleHealthEnumList}</option>
                                                    ))
                                                }
                                            </Field>
                                        </fieldset>
                                    </div>
                                    <div className="col-md-1">
                                        <ErrorMessage name="vehicleHealthStatus" component="fieldset" className="alert alert-warning" style={{ marginTop: '5px', fontSize: '18px', padding: '10px 20px', width: '500px' }} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div>
                                        <button className="btn btn-success m-5" type="submit">Register</button>
                                    </div>
                                </div>
                            </Form>
                        )}
                </Formik>
            </div>
        </div>
    );
}

export default AddVehicle;