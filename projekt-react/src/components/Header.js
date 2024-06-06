import React from "react";

function Header(props) {
  return (
    <div className="page-header">
      <h2>{props.maintext}</h2>
      <p>{props.bottomtext}</p>
    </div>
  );
}

export default Header;
