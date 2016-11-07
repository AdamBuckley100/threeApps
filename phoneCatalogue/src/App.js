    import React from 'react';
	{/* import './App.css' */}

    var SelectBox = React.createClass({
      render: function(){
           return (
             <div className="col-md-10">
            <input type="text" placeholder="Search" />
            Sort by:
            <select>
              <option value="name">Alphabetical</option>
              <option value="age">Newest</option>
            </select>
             </div>
            );
          }
       });

       var Phone = React.createClass({
		   render: function(){
			   return (
			   
			<li class="thumbnail phone-listing">

            <a href={this.props.oneSinglePhone.imageUrl} class="thumb"> 
			
            <img src={this.props.oneSinglePhone.imageUrl} alt={this.props.oneSinglePhone.name} /> </a>
			   
			<a href={this.props.oneSinglePhone.id}> {this.props.oneSinglePhone.name} </a>
				
            <p>{this.props.oneSinglePhone.snippet}</p>
			
			</li>
			   
			   );
		   }
	   });

       var FilteredPhoneList = React.createClass({
            render: function(){
                var displayedPhones = this.props.phones.map( phone => {
                  return <Phone key={phone.id} oneSinglePhone={phone} /> ;
                }) ;
                return (
                        <div className="col-md-10">
                          <ul className="phones">
                              {displayedPhones}
                          </ul>
                        </div>
                  ) ;
            }
        });

    var PhoneCatalogueApp = React.createClass({
      render: function(){
          return (
              <div className="view-container">
              <div className="view-frame">
                 <div className="container-fluid">
                   <div className="row">
                       <SelectBox />
                       <FilteredPhoneList phones={this.props.phones}  />
						</div>
                  </div>                   
                </div>
              </div>
          );
      }
    });

    export default PhoneCatalogueApp;