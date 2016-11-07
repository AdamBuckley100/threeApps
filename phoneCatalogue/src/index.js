    import React from 'react';
    import ReactDOM from 'react-dom';
    import PhoneCatalogueApp from './App';
    import '../node_modules/bootstrap/dist/css/bootstrap.css';
    import Phones from  './data';

    ReactDOM.render(
      <PhoneCatalogueApp phones={Phones}/>,
      document.getElementById('root')
    );