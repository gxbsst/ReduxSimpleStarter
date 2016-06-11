/// <reference path="../typings/index.d.ts" />
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyBj1oaxJ-Ydg6pHyaRtrQOLGWZhevGTwpU';


// create a new component. this component should produce
// some HTML
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { videos: [] }
    // ES6 Support setState
    YTSearch({ key: API_KEY, term: 'surfboards' },  (videos) => {
      this.setState({videos})
    })
  }
  render() {
    return (
      <div >
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it 
// on the page (in the Dom)
ReactDom.render(<App />, document.querySelector('.container'))