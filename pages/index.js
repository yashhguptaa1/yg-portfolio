import Sidebar from "../components/Sidebar";

import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const index = () => {
  return (
    <div className="App">
      <Sidebar />

      <div className="ham-burger-menu">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>

    </div>
  );
};

export default index;
