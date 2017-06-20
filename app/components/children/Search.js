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
        

        this.handleTopic    = this.handleTopic.bind(this);
        this.handleSDate    = this.handleSYear.bind(this);
        this.handleEDate    = this.handleEYear.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
    }

    handleTopic(event) {
        this.setState({topic: event.target.value});
    }

    handleSYear(event) {
        this.setState({sYear: event.target.value});
    }

    handleEYear(event) {
        this.setState({eYear: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state)
        // helpers(event);
        runQuery: (url) => {
        // console.log(url)

        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json', {
            params: {
                'api-key': nytAPI,
                q: topic,
                'begin_date': begin_date || 20100101,
                'end_date': eDate || 20170624

            }
            
        }).then(function (res) {
            console.log(`this is the response: ${res}`);
        }).catch(function (error) {
            console.log(error);
        });
    }
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
                            <input className='input--border' type='number' value={this.state.sDate} onChange={this.handleSDate} />
                            <br/>
                            <br/>
                            <p>End Date</p>
                            <input className='input--border' type='number' value={this.state.eDate} onChange={this.handleEDate} />                    
                        </label>
                        <br />
                        <input className='btn btn-success' type='submit' value='Submit' />
                    </form>

                    <div id='results'>
                    </div>
                </div>
            </div>
        );
    }
}



export default Search;
