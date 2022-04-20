import { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    const handleAddUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        // Post data to server

        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="mx-auto h-full w-full bg-pink-100">
            <h1 className="text-6xl font-black">{users.length} </h1>
            <form onSubmit={handleAddUser} className="mx-auto mb-20 w-1/2 text-gray-700">
                <input
                    required
                    className="my-4 rounded p-2 text-xl"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <input
                    required
                    className="my-4 rounded p-2 text-xl"
                    type="email"
                    name="email"
                    placeholder="Email"
                />{' '}
                <br />
                <input
                    className="cursor-pointer rounded bg-green-400 px-6 py-2"
                    type="submit"
                    value="Add user"
                />
            </form>
            <ul className="bg-slate-500 p-4 text-center text-xl">
                {users.map((user) => (
                    <li
                        className="my-2 mx-auto w-5/6 cursor-pointer rounded-full bg-slate-200 p-4 transition-all duration-150 hover:scale-x-105 hover:bg-green-400 hover:shadow-lg"
                        key={user.id}
                    >
                        id:{user.id}, Name:{user.name}, Email: {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
