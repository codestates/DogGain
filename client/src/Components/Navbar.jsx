import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className=''>
        <div className="flex items-center space-x-6 text-blue-50 text-4xl font-bold ml-[16.25rem] mt-4">
          <Link to="" className="ml-4">
            DogGain
          </Link>
        </div>

        <nav className="flex items-center space-x-6 text-blue-50 mt-4 py-1 border-solid border-grey-50 border-[0.25px]">
          <ul className="hidden md:flex md:flex-row items-end space-x-2 ml-[15.6rem] pl-4 ">
            <Link to="/ranking">
              <li className=" text-lg font-semibold px-3 py-0.5 rounded-md hover:bg-blue-20 hover:text-white active:bg-blue-30 ease-in-out hover:scale-75 duration-75">
                <div>랭킹</div>
              </li>
            </Link>
            <Link to="/forum">
              <li className="text-lg font-semibold px-5 py-0.5 rounded-md hover:bg-blue-20 hover:text-white active:bg-blue-30 ease-in-out hover:scale-75 duration-75">
                <div>포럼</div>
              </li>
            </Link>
            <Link to="/rule">
              <li className="text-lg font-semibold px-5 py-0.5 rounded-md hover:bg-blue-20 hover:text-white active:bg-blue-30 ease-in-out hover:scale-75 duration-75">
                <div>이용규칙</div>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
