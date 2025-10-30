// src/components/Carga.jsx
import { useState } from "react";
// import { crearUser } from "../data/db";
import { useAppContext } from "../context/AppContext";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const CrearUser = () => {
  const { agregarUser } = useAppContext();
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: "",
    edad: "",
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevo = await agregarUser(form);
      setForm({
        nombre: "",
        email: "",
        password: "",
        edad: ""
      })
      console.log(nuevo)
      if(nuevo)toast.success("Usuario creado con éxito!")
    } catch (error) {
      toast.error("No se pudo crer el usuario :(")
      console.error("Error:", error.message);
    }
  };

  return (
    <>
    <ToastContainer />
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={handleChange}
      />
      <input
        name="edad"
        placeholder="Edad"
        type="number"
        onChange={handleChange}
      />
      <button type="submit">Crear Usuario</button>
    </form>
    </>
  );
};

export default CrearUser;
