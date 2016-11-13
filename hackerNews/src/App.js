    import React from 'react';
    import _ from 'lodash';
    import api from './test/stubAPI';

    var Form = React.createClass({
       getInitialState: function() {
           return { title: '', link: ''};
        },
		
       handleTitleChange: function(e) {
           this.setState({title: e.target.value});
       },
	   
       handleLinkChange: function(e) {
           this.setState({link: e.target.value});
       },
	   
	    handleSubmit: function(e) { {/* submit is the add button! */}
        e.preventDefault();
        var title = this.state.title.trim();
        var link = this.state.link.trim();
        if (!title ) {
          return;
        }
        this.props.addHandler(title,link);
        this.setState({title: '', link: ''});
       }, 
		
        render : function() {
			
           return (
		   
             <form style={{marginTop: '30px'}}>
                <h3>Add a new post</h3>
                <div className="form-group">
                  <input type="text"
                    className="form-control" placeholder="Title"
                    value={this.state.title} 
					onChange={this.handleTitleChange} ></input>
                </div>
                <div className="form-group">
                  <input type="text"
                     className="form-control" placeholder="Link"
                     value={this.state.link} 
					 onChange={this.handleLinkChange} ></input>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Post</button>
              </form>
            );
          }
       });

    var NewsItem = React.createClass({
		
			getInitialState : function() {
               return {
                status : '',
                title: this.props.post.title,
                link: this.props.post.address,
               } ;
            },
	
        handleVote : function() {
          this.props.upvoteHandler(this.props.post.id);
        },
		
        render : function() {
			
            var lineStyle = {
                 fontSize: '20px', marginLeft: '10px'  };
            var cursor = { cursor: 'pointer' } ;
            var line ;
            if (this.props.post.link ) {
               line = <a href= {this.props.post.link} > {/* q to ask: why can't i do a href = "http://www." + {this........link} */}
                            {this.props.post.title} </a> ;
            } else {
               line = <span>{this.props.post.title} </span> ;
            }
            return (
              <div >
                <span className="glyphicon glyphicon-thumbs-up" 
                    style={cursor} 
                    onClick={this.handleVote} ></span>
                {this.props.post.upvotes}
                <span style={lineStyle} >{line}<span>
                    <a href={'#/posts/' + this.props.post.id }>Comments</a>
                  </span>
                </span>
              </div>  
        );
        }
       }) ;

    var NewsList = React.createClass({
        render : function() {
          var items = this.props.posts.map(function(post,index) {
             return <NewsItem key={index} post={post} 
                        upvoteHandler={this.props.upvoteHandler}
						addHandler={this.props.addHandler} /> ;
            }.bind(this) )
          return (
            <div>
                  {items}
                  </div>
            );
        }
    }) ;  

    var HackerApp = React.createClass({
		
        incrementUpvote : function(id) {
          api.upvote(id) ;
          this.setState({});
        },    
		  
		 addPost : function(t,l) {
            if (api.add(t,l)) {
             this.setState({});
			}
          },
		  
        render: function(){
		
		var list = Phones.filter(function(p) {
        return p.name.toLowerCase().search(
        this.state.search.toLowerCase() ) !== -1 ;
        }.bind(this) );  
        var filteredList = _.sortBy(list, this.state.sort) ;
			
            return (
              <div className="container">
                 <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                       <div className="page-header">
                          <h1>Hacker News</h1>
                             <NewsList posts={posts} 
                                  upvoteHandler={this.incrementUpvote}  />
								  <Form addHandler={this.addPost} />
                       </div>
                     </div>
                  </div>
                </div>
            );
        }
    });

    export default HackerApp;