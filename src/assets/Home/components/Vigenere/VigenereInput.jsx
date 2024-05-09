/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form"
export default function VigenereInput({ setVigenereData }) {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        setVigenereData(data);
        document.getElementById('vigenere-modal').showModal();
        reset();
    }

    return (
        <form className="form-control bg-gray-300 p-5 w-[400px]" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-semibold text-white text-xl mb-2 bg-black p-1">Vigenere Cipher</h3>
            <small className="mb-3">C<sub>i</sub> = (P<sub>i</sub> + k<sub>i</sub>) mod 26 || P<sub>i</sub> = (C<sub>i</sub> − k<sub>i</sub>) mod 26</small>
            <textarea className="textarea focus:outline-none ps-2" placeholder="Enter plain text" {...register("plainText")} required />
            <input type="text" className="focus:outline-none rounded-md p-2 my-2 placeholder:text-sm" placeholder="Enter key word" {...register("key")} required />
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
