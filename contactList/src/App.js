    import React from 'react';
	import api from './test/stubAPI'

    var ContactForm = React.createClass({
        render: function(){
          return (
            <tr>
              <td>
              <input type="text" className="form-control" />
              </td>
              <td>
              <input type="text" className="form-control"/>
              </td>
              <td>
              <input type="text" className="form-control" />
              </td>
              <td>
              <input type="button" className="btn btn-primary" value="Add"/>
              </td>
            </tr>
            )
        }
      });

    var Contact = React.createClass({
          render: function(){
              return (
                      <tr >
					   {/* display the name,address and phone number of that specific single contact. */}
                          <td>{this.props.oneSingleContact.name}</td> 
						  <td>{this.props.oneSingleContact.address}</td>
						  <td>{this.props.oneSingleContact.phone_number}</td>
                      </tr>
                ) ;
            }
          });

    var ContactList = React.createClass({
          render: function(){
			   {/* the contactRows variable is assigned all the contacts with each contact's address being used as their unique key. */}
              var contactRows = this.props.contacts.map( contact =>
			  { return <Contact key={contact.address} oneSingleContact={contact} /> });
              return (
                  <tbody >
				  {/* display all the contacts. */}
                      {contactRows}
                      <ContactForm />
                  </tbody>
                ) ;
            }
          });

    var ContactsTable = React.createClass({
          render: function(){
              return (
                <table className="table table-bordered">
                      <thead>
                        <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th></th>
                        <th></th>
                        </tr>
                      </thead>
                      <ContactList contacts={this.props.contacts}/>
                </table>
                );
          }
      });

       var ContactsApp = React.createClass({
          render: function(){
			var contacts = api.getAll() ;  
              return (
                    <div>
                       <h1>Contact List.</h1>
                       <ContactsTable contacts={contacts}  />
                    </div>
              );
          }
      });

      export default ContactsApp;