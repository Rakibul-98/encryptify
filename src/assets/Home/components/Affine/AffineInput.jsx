/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form"
export default function AffineInput({ setAffineData}) {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        setAffineData(data);
        document.getElementById('affine-modal').showModal();
        reset();
    }
    
    return (
        <form className="form-control bg-fuchsia-200 p-5 w-[400px]" onSubmit={handleSubmit(onSubmit)}>
            <textarea className="textarea focus:outline-none ps-2" placeholder="Enter plain text" {...register("plainText")} required />
            <input type="text" className="focus:outline-none rounded-md p-2 my-2 placeholder:text-sm" placeholder="Enter key 1" {...register("key1")} required />
            <input type="text" className="focus:outline-none rounded-md p-2 mb-2 placeholder:text-sm" placeholder="Enter key 2" {...register("key2")} required />
            <select className="rounded-md p-2 mb-2 placeholder:text-sm focus:outline-none" {...register("optn")}>
                <option defaultValue={"Encrypt"}>Encrypt</option>
                <option>Decrypt</option>
            </select>
            <div className="flex justify-between gap-5 mt-2 text-white">
                <a href="/" className="bg-black py-2 rounded-md cursor-pointer w-full">Back</a>
                <input className="bg-green-500 py-2 rounded-md cursor-pointer w-full" type="submit" />
            </div>
        </form>
    )
}
