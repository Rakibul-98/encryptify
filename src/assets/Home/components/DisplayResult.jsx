/* eslint-disable react/prop-types */

export default function DisplayResult({ title, plainData, resultText }) {
    return (
        <dialog id="result-modal" className="modal">
            <div className="modal-box bg-gradient-to-br from-cyan-200 to-fuchsia-200">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:bg-red-500 hover:text-white">✕</button>
                </form>
                <h3 className="font-bold text-lg">{title}</h3>
                <div className="py-5 font-semibold">
                    <p>Given Text: <span className="font-normal">{plainData.plainText}</span></p>
                    <p>Result Text: <span className="font-normal tracking-wider">{resultText}</span></p>
                </div>
            </div>
        </dialog>
    )
}
