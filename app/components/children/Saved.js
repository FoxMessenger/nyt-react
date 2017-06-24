// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
import axios from 'axios';

// ----------------------------
// render to screen
// ----------------------------
class Saved extends Component {

    constructor(props) {
        super(props);
        this.state = {articles: null};
    }

    // getInitialState() {
    //     return {
    //         articles: res.data
    //     }
    // }


    // clickToDelete(res) {
    //     this.props.deleteArticle(res);
    // }
    
    componentDidMount(){
        axios.get('/api/saved')
            .then((res) => {
                this.setState({
                    articles: res
                })
            })
    }

    componentWillReceiveProps(props) {
        console.log('this is props.articles: ' + JSON.stringify(props))
        const myResults = props.articles.map((search, i) => {
        const click = this.clickToDelete.bind(this, search);
        return <div className="list-group-item" key={i}><a href={search.url} target="_blank">{search.title}</a>{search.date}<button type="button" className="btn btn-danger" onClick={click}>Delete</button></div>
    });

        this.setState({articles: myResults});
    }
    
    componentDidUpdate(prevProps, prevState){
        console.log("this is the current state: " + JSON.stringify(this.state));
        if(prevState.topic != this.state.topic){
            
            Search.handleSubmit(this.state.topic, this.state.begin_date, this.state.end_date)
            .then((data) => {
                console.log(data);
                if (data != this.state.results)
                {
                    this.setState({
                        results: data
                    })
                }
            })
        }
    }


    render() {

        return(

            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Saved Articles</h3>
                </div>
                <div className="panel-body">
                    {this.state.articles}
                </div>
            </div>

        )
    }
};


export default Saved;