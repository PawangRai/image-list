import React from "react";
class SearchInput extends React.Component {
  onInputChange(event) {
    console.log(event.target.value); // this is the text that the user typed
  }

  render() {
    return (
      <div className="ui segment">
        <form action="ui form">
          <div className="field">
            <div className="ui massive icon input">
              <input
                type="text"
                placeholder="search..."
                onChange={this.onInputChange}
              ></input>
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchInput;
