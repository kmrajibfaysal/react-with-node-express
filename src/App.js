import { useEffect, useState } from 'react';

function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    return (
        <div className="m-36">
            <h1 className="text-6xl font-black">{users.length} </h1>
        </div>
    );
}

export default App;
