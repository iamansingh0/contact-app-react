import React from 'react';

const Header = () => {
  return (
    <div className="ui menu" style={{position: "fixed", zIndex: "100"}}>
        <div className='ui container center' style={{ height: "8vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h2>Contact Manager</h2>
        </div>
    </div>
  );
};

export default Header;
