import { useState } from "react";

import Sidebar from "../components/Sidebar";

import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const index = () => {

    const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="ham-burger-menu">
        <IconButton onClick={() => setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>

    </div>
  );
};

export default index;
