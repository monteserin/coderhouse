import Hijo from "./Hijo";


const Papa = ({ valorQueVoyAPasar, v2, datosQueVienenDelHijo, children }) => {
    return (
        <div>Papa {valorQueVoyAPasar} - {v2}
            <Hijo />
            <Hijo />
            <p>{children}</p>
            <button onClick={() => (datosQueVienenDelHijo(8))}>Pulsar</button>
        </div>
    )
}

export default Papa;