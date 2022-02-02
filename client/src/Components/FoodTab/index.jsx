import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";

//icons mobile
import {HiOutlineShoppingBag} from "react-icons/hi";
import {RiFootprintLine} from "react-icons/ri";
import {GiWineGlass} from "react-icons/gi";
import {CgGym} from "react-icons/cg";

const MobileTab = () => {
  const {tab = "delivery"} = useParams();
  const [tabs, setTabs] = useState([{
    id: "delivery",
    name: "Delivery",
    icon: <HiOutlineShoppingBag />
  },{
    id: "dine",
    name: "Dine-out",
    icon: <RiFootprintLine />
  },{
    id: "nightlife",
    name: "Nightlife",
    icon: <GiWineGlass />
  },{
    id: "nutrition",
    name: "Nutrition",
    icon: <CgGym />
  }]);

  return <>
    <div className="lg:hidden w-full grid grid-cols-4 fixed bottom-0 z-10">
        {tabs.map((cur) => (
          <Link to={`/${cur.id}`}>
            <div className={`flex flex-col items-center py-1 transition duration-300 ease-in-out ${cur.id === tab ? "border-t-2 border-zred-400" : ""}`}>
              <div className="">{cur.icon}</div>
              <div className={``}>{cur.name}</div>
            </div>
          </Link>
        ))}     
    </div>
  </>
};

const LgTab = () => {
  const {tab = "delivery"} = useParams();
  const [tabs, setTabs] = useState([{
    id: "delivery",
    name: "Delivery",
    icon: "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
    activeIcon: "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
    color: "yellow"
  },{
    id: "dine",
    name: "Dine-out",
    icon: "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
    activeIcon: "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
    color: "green"
  },{
    id: "nightlife",
    name: "Nightlife",
    icon: "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
    activeIcon: "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
    color: "blue"
  },{
    id: "nutrition",
    name: "Nutrition",
    icon:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
    activeIcon:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
        color: "zred"
  }]);

  return <>
    <div className="hidden lg:flex lg:flex-row lg:grid lg:grid-cols-4 lg:h-26 lg:px-4">
      {tabs.map((cur) => (
        <Link to={`/${cur.id}`}>
          <div className={`p-3 lg:h-full text-center z-10 ${cur.id === tab ? "border-b-2 transition duration-700 ease-in-out border-zred-400" : "border-gray-200"}`}>
            <div className="flex flex-row items-center">
              <div className={`w-14 mr-3 rounded-full p-3 ${cur.id === tab ? `bg-${cur.color}-200` : ""}`}>
                <img src={`${cur.id === tab ? cur.activeIcon : cur.icon}`} alt={cur.name} className="w-full h-full" />
              </div>
              <div className="text-sm">{cur.name}</div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </>
}

const FoodTab = () => {
  return <>
    <div><MobileTab /></div>
    <div className="w-3/4"><LgTab /></div>
  </>
}

export default FoodTab;