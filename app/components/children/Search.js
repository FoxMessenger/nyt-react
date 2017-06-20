// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
// import helpers from '../utils/helpers';
import axios from 'axios';

// ----------------------------
// render to screen
// ----------------------------
class Search extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            begin_date: '',
            end_date: ''
        };

        
        this.handleTopic        = this.handleTopic.bind(this);
        this.handleStartDate    = this.handleStartDate.bind(this);
        this.handleEndDate      = this.handleEndDate.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);
    }

    // runQuery() {
        // const nytAPI = 'a306a58c65134177bed7d0955ace8afa';

        // axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
        //     params: {
        //         'api-key': nytAPI,
        //         'q': this.state.topic,
        //         'begin_date': this.state.begin_date || 20100101,
        //         'end_date': this.state.end_date || 20170624
        //     }
            
        // }).then((res) => {
        //     console.log(res);
        // }).catch((error) => {
        //     console.log(error);
        // });
    // }

    handleTopic(event) {
        this.setState({topic: event.target.value});
    }

    handleStartDate(event) {
        this.setState({begin_date: event.target.value});
    }

    handleEndDate(event) {
        this.setState({end_date: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log(this.state)
        // runQuery();

        const nytAPI = 'a306a58c65134177bed7d0955ace8afa';

        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': nytAPI,
                'q': this.state.topic,
                'begin_date': this.state.begin_date || 20100101,
                'end_date': this.state.end_date || 20170624
            }
            
        }).then((res) => {
            console.log(res.data.response.docs);
            this.setState({
                
                // clear the query after the call
                topic: "",
                begin_date: '',
                end_date: ''

            })
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <form className='title' onSubmit={this.handleSubmit}>
                        <label>
                            <p>Article Topic</p>
                            <input className='input--border' type='text' value={this.state.topic} onChange={this.handleTopic} />
                            <br/>
                            <br/>
                            <p>Start Date</p>
                            <input className='input--border' type='number' value={this.state.begin_date} onChange={this.handleStartDate} />
                            <br/>
                            <br/>
                            <p>End Date</p>
                            <input className='input--border' type='number' value={this.state.end_date} onChange={this.handleEndDate} />                    
                        </label>
                        <br />
                        <input className='btn btn-success' type='submit' value='Submit' />
                    </form>
                    <div className='container'>
                        <div id='results'>
                            <div className='articles'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default Search;
