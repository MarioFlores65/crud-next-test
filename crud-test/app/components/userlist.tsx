'use client'
import { useState } from 'react'
import usersData from '@/data/personas.json' // o la ruta que corresponda

export default function UsersList() {
  const [users, setUsers] = useState(usersData.results)
  const [name, setName] = useState  ('')
  const [gender, setGender] = useState ('')
  const [email, setEmail] = useState ('')
  const [phone, setPhone] = useState ('')

  const handleDelete = (i: number) => {
  setUsers(users.filter((_, index) => index !== i))
}
  const [editIndex, setEditIndex] = useState<number | null>(null)
  return (
    <div >
        <form
        onSubmit={(e) => {
            e.preventDefault()
                const nuevoUsuario = {
                gender,
                name: {
                    title: '',
                    first: name,
                    last: ''
                },
                location: {
                    street: {
                    number: 0,
                    name: ''
                    },
                    city: '',
                    state: '',
                    country: ''
                },
                email,
                phone,
                picture: {
                    thumbnail: 'https://randomuser.me/api/portraits/lego/1.jpg'
                }
            }
        setUsers([...users, nuevoUsuario])
        setName('')
        setGender('')
        setEmail('')
        setPhone('')
        }}
        className='mb-6'
        >
            <input
            type = 'text'
            placeholder='Nombre'
            value={name}
            onChange = {(e) => setName(e.target.value)}
            className='block mb-2'
            />
            <input
            type='text'
            placeholder='Genero'
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className='block mb-2'
                />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block mb-2"
            />
            <input
            type="text"
            placeholder="Teléfono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block mb-2"
            />
        <button type='submit' className='bg-blue-500 text-white px-4 py-2 rounded'>
            Agregar usuarios
            </button>
        </form>
        
      <h1>Lista de usuarios</h1>
      {users.map((user, street) => (
        <div key={street} className='Container-persona bg-black p-7 m-1.5'>
          <img src={user.picture.thumbnail} alt="foto" />
          <p className='text-white'>{user.name.first} {user.name.last}</p>
          <p className='text-white'>{user.gender}</p>
          <p className='text-white'>{user.email}</p>
          <p className='text-white'>{user.phone}</p>
           <button className='bg-red-500 text-white px-4 py-2 rounded' onClick={() => handleDelete(street)}>Eliminar</button>

        </div>
      ))}


    </div>
  )
}
