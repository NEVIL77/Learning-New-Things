import { useForm } from "react-hook-form"

const ReactFormHook = ()=>{

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors ,isSubmitting },
    } = useForm()
    
    const handleSub = (data)=>{
        console.log("formm handle sub", data)
    }

    return (
        <div className="bg-grey-500">
            hi react hook
            <form onSubmit={handleSubmit(handleSub)}> 
                <div>
                    <label>First Name :- </label>
                    <input  {...register('first_name',
                        {
                            required:true,
                            minLength : { value : 3 , message : "3 thi vadhare"}
                        })} 
                    />
                    { errors.first_name && <p>{errors.first_name.message}</p>}
                </div>
                <div>
                    <label>Middle Name :- </label>
                    <input  {...register('middle_name',{required:true})}/>
                </div>
                <div>
                    <label>Last Name :- </label>
                    <input  {...register('last_name')}/>
                </div>
                {/* <button type="submit"> Submit</button> */}
                <input type="submit" disabled={isSubmitting} />
            </form>
        </div>
    )
}
export default ReactFormHook