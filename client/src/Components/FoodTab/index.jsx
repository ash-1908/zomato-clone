import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";

const MobileTab = () => {
  const {tab} = useParams();
  const [tabs, setTabs] = useState([{
    id: "delivery",
    name: "Delivery",
  },{
    id: "dine",
    name: "Dine-out",
  },{
    id: "nightlife",
    name: "Nightlife",
  },{
    id: "nutrition",
    name: "Nutrition",
  }]);

  return <>
    <div className="lg:hidden w-full flex  fixed bottom-0 z-10">
      
      
        {tabs.map((cur) => (
          <Link to={`/${cur.id}`} className="w-full">
            <div className={`py-3 px-1 text-center w-full ${cur.id === tab ? "border-t-2 border-zred-400" : ""}`}>{cur.name}</div>
          </Link>
        ))}
      
    </div>
  </>
};

const LgTab = () => {
  const {tab} = useParams();
  const [tabs, setTabs] = useState([{
    id: "delivery",
    name: "Delivery",
  },{
    id: "dine",
    name: "Dine-out",
  },{
    id: "nightlife",
    name: "Nightlife",
  },{
    id: "nutrition",
    name: "Nutrition",
  }]);

  return <>
    <div className="hidden lg:flex w-full">
      {tabs.map((cur) => (
        <Link to={`/${cur.id}`}>
          <div className={`py-3 text-center w-32 z-10 ${cur.id === tab ? "border-b-2 transition duration-700 ease-in-out border-zred-400" : "border-gray-200"}`}>{cur.name}</div>
        </Link>
      ))}
    </div>
  </>
}

const FoodTab = () => {
  return <>
    <div><MobileTab /></div>
    <div><LgTab /></div>
  </>
}

export default FoodTab;