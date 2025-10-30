import './App.css'
import CrearUser from "./components/CrearUser"
import { useAppContext } from './context/AppContext'

function App() {
const {users} = useAppContext()

  return (
    <>
        <h1>Usuarios</h1>
      <div className='grid'>
        {users.length == 0 ? (
          <p>Hubo un error en la carga de users.</p>
        ) : (
          users.map(({ _id, nombre, email }) => (
            <div key={_id} className='card'>
              <p>{_id}</p>
              <p>{nombre}</p>
              <p>{email}</p>
            </div>
          ))
        )}
      </div>
      <div >
      <h2>Carga de Usuarios</h2>
      <CrearUser/>
      </div>
      <p className="read-the-docs">
        Agregamos usuarios a a nuestra base de datos en MongoDB
      </p>
    </>
  )
}

export default App
