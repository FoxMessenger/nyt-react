// ----------------------------
// import dependencies
// ----------------------------
import axios from 'axios';

// ----------------------------
// API
// ----------------------------
const nytAPI = "a306a58c65134177bed7d0955ace8afa";

// ----------------------------
// helpers
// ----------------------------

runQuery() {
	axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
	    params: {
	   		'api-key': nytAPI,
	   		'q': this.props.topic,
	   		'begin_date': this.props.begin_date || 20100101,
	   		'end_date': this.props.end_date || 20170624

		}
		
	}).then(function (res) {
		console.log(res);
	}).catch(function (error) {
		console.log(error);
	});
}


export default helpers;