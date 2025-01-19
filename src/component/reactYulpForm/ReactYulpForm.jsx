import { useEffect, useState } from "react"
import * as Yup from "yup"

const ReactYulpForm = () => {

    const [formData , setFormData] = useState({
        firstName : '',
        middleName : '',
        lastName : '',
        phoneNumber : '',
        password : '',
        confirmPassword : '',
    })
    const validationSchema = Yup.object({
        firstName: Yup.string().required("Please Enter the First Name"),
        middleName: Yup.string().required("Please Enter the Middle Name"),
        LastName: Yup.string().required("Please Enter the Last Name"),
        phoneNumber: Yup.string().required("Please Enter the Phone Number").min(10, "10 number min").max(10, "10 number max"),
        password: Yup.string().required("Please Enter Valid Passsword").min(8, "Min 8 number required").max(12, "max 12 possible"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password")],"password not match"),
    })
    const handleSubmit = async (e) => {
        e.preventDefault()

        try{
            await validationSchema.validate(FormData,{ abortEarly:false })
            console.log("Form is valid" ,FormData )
        }catch(error){
            console.error("error >",error)
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
    
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    
    useEffect(()=>{

    },[])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name :--</label>
                    <input type="text" name="firstName" value={formData.firstName} />
                </div>
                <div>
                    <label>Middle Name :--</label>
                    <input type="text" name="middleName" value={formData.middleName} />

                </div>
                <div>
                    <label>Last Name :--</label>
                    <input type="text" name="lastName" value={formData.lastName} />
                </div>
                <div>
                    <label>Phone Number :--</label>
                    <input type="number" name="phoneNumber"  value={formData.phoneNumber} />

                </div>
                <div>
                    <label>Password :--</label>
                    <input type="password" name="password" value={formData.password} />
                </div>
                <div>
                    <label>Confirm Password :--</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
export default ReactYulpForm

// matches take rejex expression and error message