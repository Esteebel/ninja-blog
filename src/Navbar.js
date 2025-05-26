// @flow 
import * as React from 'react';
import { Link } from 'react-router-dom';


const Navbar = (): React.Node => {
    return (
        <div className='navbar'>
            <h1>The Ninja Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px",
                    fontWeight: "bold"
                }}>New Blog</Link>
            </div>
        </div>
    );
};
export default Navbar;