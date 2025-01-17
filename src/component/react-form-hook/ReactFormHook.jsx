import { useForm } from "react-hook-form"

const ReactFormHook = ()=>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    
    const handleSub = (data)=>{
        console.log("formm handle sub", data)
    }

    return (
        <div className="bg-grey-500">
            hi react hook
            <form onSubmit={handleSubmit(handleSub)}> 
                <div>
                    <label>First Name</label>
                    <input  {...register('first_name')} />
                </div>
                <div>
                    <label>Middle Name</label>
                    <input  {...register('middle_name')}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input  {...register('last_name')}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default ReactFormHook