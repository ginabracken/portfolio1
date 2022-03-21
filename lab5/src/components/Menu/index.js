import React from "react";
import MenuItem from "../MenuItem";
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
