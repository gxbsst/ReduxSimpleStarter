/// <reference path="../typings/index.d.ts" />
import _ from 'lodash'
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBj1oaxJ-Ydg6pHyaRtrQOLGWZhevGTwpU';


// create a new component. this component should produce
// some HTML
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videSearch('surfboards')
  }
  videSearch(term) {
    // ES6 Support setState
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }
  render() {
    const videoSearch = _.debounce((term) => {
      this.videSearch(term)
    }, 300) 

    return (
      <div >
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo }) }
          videos={this.state.videos} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it 
// on the page (in the Dom)
ReactDom.render(<App />, document.querySelector('.container'))