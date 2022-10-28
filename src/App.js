import apiAxios from './services/apiAxios';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    apiAxios.get('/user').then(resp => {
      setUsers(resp);
    });
  }, []);
  return (
    <div className='container p-3'>
      <h1 className='text-center bg-black text-white text-[150px]'>Hello world</h1>
      <ol className='space-y-3'>
        {users &&
          users.map(item => (
            <li key={item.id} className='font-semibold'>
              {item.username}
              <button
                className='border p-2 bg-red-700 text-white'
                onClick={() => {
                  apiAxios
                    .delete(`/user/${item.id}`)
                    .then(resp => {
                      setUsers(users.filter(user => user.id !== item.id));
                    })
                    .catch(err => {
                      console.log('Delete error: ' + err.message);
                    });
                }}>
                Delete
              </button>
            </li>
          ))}
      </ol>
      <button
        className='border border-black p-2'
        onClick={() => {
          apiAxios.post('/user', { username: 'Lily Finage' }).then(resp => {
            setUsers([...users, resp]);
          });
        }}>
        Add new user
      </button>
    </div>
  );
}

export default App;
