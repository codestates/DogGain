import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div>
        <div className="flex items-center space-x-6 text-blue-50 text-3xl font-bold ml-8 mt-4">
          <Link to="" className="ml-4">
            DogGain
          </Link>
        </div>

        <nav className="flex items-center space-x-6 text-blue-50 mt-4 py-4 border-solid border-grey-50 border-b-4 border-t">
          <ul className="hidden md:flex md:flex-row items-end space-x-2 ml-2 pl-4 ">
            <Link to="/home">
              <li className="text-sm font-semibold px-5 py-0.5 rounded-md hover:bg-blue-20 hover:text-white active:bg-blue-30 ease-in-out hover:scale-100 duration-100">
                <div>홈</div>
              </li>
            </Link>
            <Link to="/community">
              <li className="text-sm font-semibold px-5 py-0.5 rounded-md hover:bg-blue-20 hover:text-white active:bg-blue-30 ease-in-out hover:scale-100 duration-100">
                <div>커뮤니티</div>
              </li>
            </Link>
            <Link to="/rule">
              <li className="text-sm font-semibold px-5 py-0.5 rounded-md hover:bg-blue-20 hover:text-white active:bg-blue-30 ease-in-out hover:scale-100 duration-100">
                <div>이용규칙</div>
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
