import React  from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Link} from 'react-router-dom';

const CollectionsBannerItem = ({title, backgroundImg}) =>{
  return(
    <div className="banner-backgrnd">
      <Jumbotron className="banner" style={{backgroundImage: 'url(' + backgroundImg + ')'}}>
        <div className="d-flex flex-column banner-inner-wrap">
          <h1 className="text-uppercase text-right banner-title">{title}</h1>
          <Link to={`/react-bookstore/category/${title}`} className="btn banner-btn text-uppercase align-self-end " href="#" role="button">Learn more</Link>
        </div>      
      </Jumbotron>
    </div>
  )
}

export default CollectionsBannerItem 
  
