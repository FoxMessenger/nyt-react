// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import Search from './Search';
// import helpers from '../utils/helpers';
import axios from 'axios';


// ----------------------------
// render to screen
// ----------------------------
class Results extends Component {
    
    consoleLog() {
        console.log(`this is result data ${this.props.res.data}`);
        console.log('\n')
        console.log('\n')
        console.log(`this is result response docs ${this.props.res.data.response.docs}`);
    }

    articleResults() {
        return this.props.res.data.response.docs.map((articles) => {
            
            return (
                <div className='articles'> 
                    <p className='title'>Article Topic</p>
                

                    <p>{article.lead_paragraph}</p>
                    <p>{article.web_url}</p>
                
                </div>
            )
        }) 

    }

    render() {
        return (
            <div className='container'>
                <div id='results'> 

                    <div className='articles'> 
                    
                    <hr />
                    <h3 className='title'><strong>Article Results</strong></h3>
                    <hr />
                        <p>{this.articleResults}</p>
                    
                    </div>
                </div>
            </div>
        );
    }
}



export default Results;
