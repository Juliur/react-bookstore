import React  from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

const CollectionsBannerItem = ({title, backgroundImg}) =>{
  return(
    <div className="banner-backgrnd">
      <Jumbotron className="banner" style={{backgroundImage: 'url(http://' + backgroundImg + ')'}}>
        <div className="d-flex flex-column banner-inner-wrap">
          <h1 className="display-4 text-uppercase text-right banner-title">{title}</h1>
          <a className="btn banner-btn text-uppercase" href="#" role="button">Learn more</a>
        </div>      
      </Jumbotron>
    </div>
  )
}

export default CollectionsBannerItem 
  
