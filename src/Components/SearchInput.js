import React from "react";
class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { entry: "" };
    this.onFormSubmit = this.onFormSubmit.bind(this); // This is for solving a common error in react where we try to access the state of undefined
  }

  onFormSubmit = (event) => {
    // Another way for solving the above problem is to make the function an arrow function
    event.preventDefault();
    this.props.onSearchSubmit(this.state.entry);
  };

  render() {
    return (
      <div className="ui segment">
        <form action="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={(event) =>
                  this.setState({ entry: event.target.value })
                }
                value={this.state.entry}
              />
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
