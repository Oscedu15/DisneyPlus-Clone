import { useState } from "react";
import Logo from "../../assets/Images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      id: 1,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
      id: 2,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      id: 3,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
      id: 4,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      id: 5,
    },
    {
      name: "SERIES",
      icon: HiTv,
      id: 6,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <img
          src={Logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        {/* Version Desktop */}
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.id} name={item.name} Icon={item.icon} />
          ))}
        </div>
        {/* Version Mobile */}
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.id} name={""} Icon={item.icon} />
              )
          )}
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle ? (
              <div
                className="absolute mt-3 bg-[#121212]
            border-[1px] border-gray-700 p-3 px-5 py-4"
              >
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={item.id}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
        alt="perfil"
      />
    </div>
  );
};

export default Header;
