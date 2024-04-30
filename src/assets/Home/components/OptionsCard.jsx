/* eslint-disable react/prop-types */

export default function OptionsCard({ option }) {

  const { name } = option;

  const handleOptions = (name) => {
    document.getElementById("options").style.display="none";
    if (name === "additive") {
      document.getElementById("additive").style.display="block";
    }
    else if (name === "affine") {
      document.getElementById("affine").style.display="block";
    }
    else if (name === "vigenere") {
      document.getElementById("vigenere").style.display="block";
    }
    else if (name === "keyed transposition") {
      document.getElementById("keyed-transposition").style.display="block";
    }
    else if (name === "one time pad") {
      document.getElementById("one-time-pad").style.display="block";
    }
  }

  return (
    <div>
      <div onClick={() => handleOptions(name)} className={`h-24 w-40 flex justify-center rounded-xl  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 items-center hover:bg-red-500 hover:border-red-500  cursor-pointer`}>
        <h3 className=" font-bold uppercase tracking-wide text-white">{name}</h3>
      </div>
    </div>

  )
}
