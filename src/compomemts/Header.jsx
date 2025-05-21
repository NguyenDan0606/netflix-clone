import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  return (
    <div>
      <header className="h-14 bg-slate-950 flex text-white justify-between px-8 items-center">
        <div className="flex items-center gap-4">
          <img className="w-16 sm:w-28" src="./netflix.png" />
          <a href="#">Phim</a>
          <a href="#">Truyền hình</a>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer"
          />
        </div>
      </header>
      
    </div>
  );
};

export default Header;
