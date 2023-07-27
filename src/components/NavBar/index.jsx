import { NavLink } from "react-router-dom";
import { AiFillHome, AiFillCrown, AiFillDatabase, AiOutlineLink } from "react-icons/ai";
import "./index.css";

function NavBar() {
  return (
    <nav className="flex h-60px justify-center text-white">
      <div className="flex justify-between w-7xl items-center ">
        <span className="">ma5hr00m blog</span>
        <ul className="flex list-none space-x-7">
          <li>
            <NavLink to="/" className={(navData) => (navData.isActive ? 'active' : 'inactive')}>
              <AiFillHome className="h-5 m-r-1"/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={(navData) => (navData.isActive ? 'active' : 'inactive')}>
              <AiFillCrown className="h-5 m-r-1" />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/archive" className={(navData) => (navData.isActive ? 'active' : 'inactive')}>
              <AiFillDatabase className="h-5 m-r-1" />
              Archive
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends" className={(navData) => (navData.isActive ? 'active' : 'inactive')}>
              <AiOutlineLink className="h-5 m-r-1"/>
              Friends
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;