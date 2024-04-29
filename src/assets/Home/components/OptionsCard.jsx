/* eslint-disable react/prop-types */

export default function OptionsCard({ option }) {

  const { name, bg, id } = option;

  const bounceDirection = id % 2 === 0 ? 'animate-bounce' : 'animate-bounce-reverse';

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
      <div onClick={() => handleOptions(name)} className={`h-36 bg-gradient-to-br ${bg} w-40 flex justify-center rounded-xl items-center ${bounceDirection} hover:animate-none cursor-pointer`}>
        <h3 className=" font-bold uppercase tracking-wide text-white">{name}</h3>
      </div>
    </div>

  )
}
