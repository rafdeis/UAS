import React from 'react';
import axios from ' axios';
import { NavLink } from "react-router-dom";

function Sidebar(paramps) {
    const [sidebar, setSidebar] = React.useState([]); 
        const getSidebar = async() => {
          try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`;
            const response = await axios.get(url);
            console.log(response.data.data);
            setSidebar(response.data.data);
          } catch (error) {
            console.log(error)
          }
        };
        React.useEffect(()=>{
            getSidebar();
          });
}
export default Sidebar;