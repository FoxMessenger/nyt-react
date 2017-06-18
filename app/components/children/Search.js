import React, {Component} from 'react';
// ----------------------------
// Render to screen
// ----------------------------
class Search extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            topic: '',
            sDate: '',
            eDate: ''
        };
        

        this.handleTopic    = this.handleTopic.bind(this);
        this.handleSDate    = this.handleSYear.bind(this);
        this.handleEDate    = this.handleEYear.bind(this);
        this.handleSubmit   = this.handleSubmit.bind(this);
    }

    handleTopic(event) {
        this.setState.topic({value: event.target.value});
    }

    handleSYear(event) {
        this.setState.sYear({value: event.target.value});
    }

    handleEYear(event) {
        this.setState.eYear({value: event.target.value});
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className='container'>
                <div className='row row--border'>
                    <form className='title' onSubmit={this.handleSubmit}>
                        <label>
                            <p>Topic</p>
                            <input type='text' value={this.state.topic} onChange={this.handleTopic} />
                            
                            <p>Start Date</p>
                            <input type='number' value={this.state.sDate} onChange={this.handleSDate} />
                            
                            <p>End Date</p>
                            <input type='number' value={this.state.eDate} onChange={this.handleEDate} />                    
                        </label>
                        <br />
                        <input type='submit' value='Submit' />
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;
