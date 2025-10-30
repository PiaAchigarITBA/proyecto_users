const base_url = import.meta.env.VITE_BASE_URL;

export async function fetchUsers() {
  const res = await fetch(`${base_url}/users`);

  if (!res.ok) throw new Error('Error al obtener los usuarios');
  return res.json();
}

export async function fetchUsersPorId(id) {
  const res = await fetch(`${base_url}/users/${id}`);
  if (!res.ok) throw new Error('Usuario no encontrado');
  return res.json();
}

export async function crearUser(data) {
  const res = await fetch(`${base_url}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Error al crear un usuario');
  return res.json();
}