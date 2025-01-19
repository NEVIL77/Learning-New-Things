import { useEffect, useState } from "react";
import * as Yup from "yup";

const ReactYupForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
    });

    const validationSchema = Yup.object({
        firstName: Yup.string().required("Please Enter the First Name"),
        middleName: Yup.string().required("Please Enter the Middle Name"),
        lastName: Yup.string().required("Please Enter the Last Name"),
        phoneNumber: Yup.string()
            .required("Please Enter the Phone Number")
            .matches(/^\d+$/, "Phone number must be numeric")
            .min(10, "Must be exactly 10 digits")
            .max(10, "Must be exactly 10 digits"),
        password: Yup.string()
            .required("Please Enter a Valid Password")
            .min(8, "Minimum 8 characters required")
            .max(12, "Maximum 12 characters allowed"),
        confirmPassword: Yup.string()
            .required("Please confirm your password")
            .oneOf([Yup.ref("password")], "Passwords do not match"),
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log("Form is valid", formData);
        } catch (error) {
            console.error("Validation Errors >", error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    useEffect(() => {
        // Perform any setup or cleanup if necessary
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name: </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Middle Name: </label>
                    <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Phone Number: </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default ReactYupForm;