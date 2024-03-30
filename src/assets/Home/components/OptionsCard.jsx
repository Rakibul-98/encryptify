/* eslint-disable react/prop-types */

export default function OptionsCard({option}) {

    const {name, bg, id} = option;

    const bounceDirection = id % 2 === 0 ? 'animate-bounce' : 'animate-bounce-reverse';

  return (
    <div className={`h-36 bg-gradient-to-br ${bg} w-40 flex justify-center rounded-xl items-center ${bounceDirection} hover:animate-none cursor-pointer`}>
        <h3 className=" font-bold uppercase tracking-wide text-white">{name}</h3>
    </div>
  )
}
