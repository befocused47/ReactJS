//react vs react-dom 

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAqmr_EUagB_Sua4aqKACHlYnqROY-_yNk';



// Create a new component . this component should produce some HTML
//Always one component per file
//Functional component. No state for func. component

/* const App = () => {
	return (
	<div>
		<SearchBar/>
	</div>
	);
} */

// Take this component's generated HTML and put it on the page (in the DOM)



//Refactoring above functional App comp to Class Comp since state has to be used

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {videos: []};

//Top level component should be responsible for fetching the data 
//function(data) is a call back function
YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
	//console.log(data);
	//this.setState({videos: data});
	//above same as below in ES6 if key and param are same variable name
	this.setState({videos});
});
	}

	render() {
		return (
			<div>
				<SearchBar/>
				{
					//Passing data from PArent comp to child comp is called props
				}
				<VideoList videos={this.state.videos}/>
			</div>
			);
	}
}

ReactDOM.render(<App/>, document.querySelector('.container'));