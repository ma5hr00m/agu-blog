import { useState, useEffect } from 'react';
import yaml from 'js-yaml';
import axios from 'axios';

function Friends() {
  const [friendsList, setFriendsList] = useState([]);
  
  useEffect(() => {
    const getFriends = async () => {
      try {
        const response = await axios.get('../config.yaml')
        const data = yaml.load(response.data);

        setFriendsList(data.friends);
      } catch(error) {
        console.error('Failed to load friendsObj:' + error);
      }
    };

    getFriends();
  }, []);

  return (
    <div className='relative w-800px m-x-auto'>
      <ul className='list-none p-0 m-0 m-t-10 grid grid-cols-5 grid-gap-10'>
        {friendsList.map((friend) => (
          <li key={friend.id}>
            <a href={friend.url} className='flex flex-col items-center justify-center decoration-none w-80px h-fit p-x-20px p-y-30px bg-[#444] rounded-3 hover:transform-translate-y--5 duration-200'>
              <img src={friend.image} className='w-60px object-contain rounded-100%' />
              <span className='text-white m-t-3'>{friend.id}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Friends;