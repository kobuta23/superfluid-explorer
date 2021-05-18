import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div className="core d-flex">
        <div className="d-flex justify-content-center m-auto">
          <div className="card card-cascade col-lg-6 col-md-9 col-sm-12 m-2 p-0">
            <div className="view view-cascade"></div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title"></h4>
              <p className="card-text">
                This explorer was originally developed by Hadrien Croubois for
                the rDAI project, and later adapted to Superfluid
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
