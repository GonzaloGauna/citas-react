const Paciente = () => {
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {''}
                <span className="font-normal normal-case">Gonzalo</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {''}
                <span className="font-normal normal-case">10 diciembre 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {''}
                <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores ex ut dicta, quo explicabo consequatur similique consequuntur eos ipsa laboriosam fugit. Et atque, porro optio culpa esse quibusdam vero.</span>
            </p>
        </div>
    )
}

export default Paciente