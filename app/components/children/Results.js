// ----------------------------
// import dependencies
// ----------------------------
import React, {Component} from 'react';
// import Search from './Search';
import axios from 'axios';


// ----------------------------
// render to screen
// ----------------------------
class Results extends Component {
    
    constructor(props) {
        super(props);
        this.saveArticle = this.saveArticle.bind(this)
    }

    saveArticle(event) {
        const article = event.target.data
        axios.post('/api/savearticle', {
            'title': article.title,
            'date': article.date,
            'url': article.url
        }).then((res) => {
            console.log('saved')
        })
    }

    // componentWillReceiveProps(props) {
    //     const articleResults = props.results.map((search, i) => {
    //         // const click = this.clickToSave.bind(this, search);
    //         return <div className="list-group-item" key={i}>
    //         <a href={search.web_url} target="_blank">{search.headline.main}</a> {search.pub_date} <button className="btn btn-success" onClick={click}>Save Article</button></div>
    //     });

    //     this.setState({results: myResults});
    // }


    articleResults() {
        return this.props.res.data.response.docs.slice(0, 5).map((article) => {
            return(
                <div className='panel panel-primary' key={article._id}>
                    <div className='panel-heading'>
                        <h3 className='panel-title'>{article.headline.main}</h3>
                    </div>
                    <div className='panel-body'>
                        {article.lead_paragraph}
                        <p><a href={article.web_url}>Read more</a></p>
                        <p>Published: {new Date(article.pub_date).toString()}</p>
                        <button
                            className = 'btn btn-danger'
                            data-title = {article.headline.main}
                            data-url = {article.web_url}
                            data-date = {article.pub_date}
                            onClick = {this.saveArticle}>
                            Save Article
                        </button>
                    </div>
                </div>
            )
        })
    }
    // articleResults() {
        

    //     return this.props.res.data.response.docs[0].lead_paragraph.map((articles) => {
            
    //         return (
    //             <div className='articles'> 
    //                 <p className='title'>Article Topic</p>
                

    //                 <p>{article.lead_paragraph}</p>
    //                 <p>{article.web_url}</p>
                
    //             </div>
    //         )
    //     }) 

    // }

    render() {
        return (
            <div className='container'>
                <div id='results'> 

                    <div className='articles'> 
                    
                        <hr />
                        <h3 className='title'><strong>Article Results</strong></h3>
                        <hr />
                        <div>
                            {this.props.data ? this.articleResults() : <div></div>}
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}



export default Results;
