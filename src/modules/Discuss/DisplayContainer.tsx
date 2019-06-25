import React from "react";
import { DiscussType } from "types/types";
import { HeaderWrapped as Header } from "components/Header";
// import { Comments } from "components/Comments";

export class DiscussDisplayContainer extends React.Component<DiscussType> {
  render() {
    // const { isLoading } = this.props;
    return (
      <div>
        <Header />
        {/* {!isLoading ? (
          // <Comments kids={[]} />
        ) : (
          <div className="loading">
            <img
              alt=""
              src="https://cdn.friendbuy.com/widget/images/shared/spinner.svg"
            />
          </div>
        )} */}
      </div>
    );
  }
}
