import React from 'react';
import axios from 'axios';
import Bintang from '../../images/content/Vector (2).png'
import { NavLink } from "react-router-dom";

function Populer(params) {
        const [populer, setPopuler] = React.useState([]); 
        const getPopuler = async() => {
          try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`;
            const response = await axios.get(url);
            console.log(response.data.data);
            setPopuler(response.data.data);
          } catch (error) {
            console.log(error)
          }
        };
    
        React.useEffect(()=>{
          getPopuler();
        });
    return(
        <React.Fragment>
            <h1 className="font-bold mt-20 text-2xl">Populer</h1>
            <div className="mt-10">
          <ul className="flex items-center justify-between w-full flex-wrap overflow-auto">
            {populer.map((dt, index) => (
                <li key={index} className={`flex-none w-1/4  h-24 relative m-12 `}>
                <img className="rounded-xl w-full h-32 " src={dt.image} alt={dt.image} />
                <div className="font-bold">{dt.name}</div>
                <div className="flex">
                    <img src={Bintang} alt="" />
                    <div className="">{dt.rating}
                    </div>
                    <div className="font-semibold ml-20">
                      <h1>Rp {dt.harga}</h1>
                      
                    </div>
                </div>
                <NavLink to={`/category/${dt.id}`}>
                  
                </NavLink>
                <p style={{background:'white'}} className="absolute z-10 rounded-xl h-10 w-24 flex items-center justify-center top-20 text-black font-black">
                                {dt.waktu}
                            </p>
              </li>
            ))}
          </ul>
        </div>
        </React.Fragment>
    )
}
export default Populer;