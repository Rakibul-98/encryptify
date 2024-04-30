import './Banner.css';
export default function Banner() {

    const handleStart = () => {
        document.getElementById("banner").style.display="none";
        document.getElementById("home").style.display="block";
    }

    return (
        <div className="h-screen w-screen flex justify-between items-center bg-gradient-to-r from-black to-gray-500">
            <div className="mx-auto">
                <h1 className="text-6xl font-bold mb-10"><span className="text-white bg-red-500 pb-1 px-3">Encrypt</span><span className="text-red-500 bg-white pb-1 px-2">ify</span></h1>
                <button onClick={handleStart} className='glowing-btn'><span className='glowing-txt'>S<span className='faulty-letter'>T</span>ART</span></button>
            </div>
            <img className="h-full" src="https://i.ibb.co/Y8v00YM/a-removebg.png" alt="a-removebg" />
        </div>
    )
}
