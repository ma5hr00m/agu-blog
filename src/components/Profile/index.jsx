import { AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai';

function Profile() {
  return (
    <div className="relative w-fit h-fit flex flex-col items-center">
      <img src="/assets/profile.jpg" className="object-contain w-30 rounded-100 border-solid border-gray-4 border-1 hover:translate-y--5 duration-300" />
      <h2 className="font-100 text-gray-2">Keep your eye on the prize</h2>
      <ul className='flex list-none p-0 space-x-5'>
        <li>
          <a href="https://twitter.com/JiuGuangjiu" className='text-gray-2 hover:text-green-4 duration-300'>
            <AiOutlineTwitter className='text-3xl' />
          </a>
        </li>
        <li>
          <a href='https://github.com/ma5hr00m' className='text-gray-2 hover:text-green-4 duration-300'>
            <AiOutlineGithub className='text-3xl'/>
          </a>
        </li>
      </ul>
    </div>
  )
};

export default Profile;