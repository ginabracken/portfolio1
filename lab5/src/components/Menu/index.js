import React from "react";
<<<<<<< HEAD
import MenuItem from "../../../../../git/dig4639-s22-main-ginabracken/labs/lab5/src/components/MenuItem";
=======
import MenuItem from "../MenuItem";
>>>>>>> 2a85accfdb4163e3be52ee7def7850706e2af99f
export default class Menu extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.data.menuName}</h1>
        {this.props.data.menuItems.map((item) => {
          return <MenuItem key={item.itemId} data={item} />;
        })}
      </div>
    );
  }
}
