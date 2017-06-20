// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import Search from '../components/children/Search';
import {
  Link
} from 'react-router-dom';
// ----------------------------
// render to screen
// ----------------------------
class Main extends Component {

    render() { 

        return (

            <div className='container'>
            
                <hr />
                <h2 className='title'><strong>New York Times Article Search</strong></h2>
                <hr />

                {/*<Link to='/Search'><button className='btn btn-primary btn-lg'>Search Params</button></Link>*/}
            

                <div className='row'>

                    <Search />

                </div>
            </div>

        );
    }
};

// Export the component back for use in other files
export default Main;
