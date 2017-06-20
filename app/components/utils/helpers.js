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

const helpers = {
	runQuery: (url) => {
		console.log(url)

		axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
		    params: {
		   		'api-key': nytAPI,
		   		q: topic,
		   		'begin_date': sDate || 20100101,
		   		'end_date': eDate || 20170624

			}
			
		}).then(function (res) {
			console.log(res);
		}).catch(function (error) {
			console.log(error);
		});
	}
};


export default helpers;