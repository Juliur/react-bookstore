import React  from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import {Link} from 'react-router-dom';

const CollectionsBannerItem = ({title, backgroundImg}) =>{
  return(
    <div className="banner-backgrnd">
      <Jumbotron className="banner" style={{backgroundImage: 'url(http://' + backgroundImg + ')'}}>
        <div className="d-flex flex-column banner-inner-wrap">
          <h1 className="display-4 text-uppercase text-right banner-title">{title}</h1>
          <Link to={`/category/${title}`} className="btn banner-btn text-uppercase" href="#" role="button">Learn more</Link>
        </div>      
      </Jumbotron>
    </div>
  )
}

export default CollectionsBannerItem 
  
