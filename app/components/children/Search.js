import React, {Component} from 'react';
// ----------------------------
// Render to screen
// ----------------------------
class Search extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-lg-12">
                    <div className="panel panel-primary">
                        <div className="panel-heading">
                            <h3 className="panel-title">Search</h3>
                        </div>
                        <div className="panel-body">
                            <p>Type in Search Query Here</p>
                            {/* <p>
                            <Link to="/Child1/GrandChild1"><button className="btn btn-warning btn-sm">Show Grandchild #1</button></Link>
                            <Link to="/Child1/GrandChild2"><button className="btn btn-success btn-sm">Show Grandchild #2</button></Link>
                            </p> */}
                            {/*this.props.children*/}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};

export default Search;
