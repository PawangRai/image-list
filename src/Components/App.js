import React from "react";
import SearchInput from "./SearchInput";
import axios from "axios";
import ImageList from "./ImageList";
import config from "../config";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  apiKey = config.apiKey;

  async onSearchSubmit(entry) {
    // console.log(entry);
    const response = await axios.get(
      `https://pixabay.com/api/?key=${this.apiKey}&q=${entry}&image_type=photo&pretty=true`
    );
    this.setState({ images: response.data.hits });
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
