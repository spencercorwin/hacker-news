import React from "react";

export class IsLoading extends React.PureComponent<{}> {
  render() {
    return (
      <div className="loading">
        <img
          alt=""
          src="https://cdn.friendbuy.com/widget/images/shared/spinner.svg"
        />
      </div>
    );
  }
}
