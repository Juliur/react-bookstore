import React  from 'react';
import {Link} from 'react-router-dom';

const CollectionsBannerItem = ({title, backgroundImg}) =>{
  return(
    <div className="banner-backgrnd">
      <div className="banner d-flex justify-content-center" style={{backgroundImage: 'url(' + backgroundImg + ')'}}>
        <div className="d-flex flex-column justify-content-center banner-inner-wrap mr-3 mr-lg-5">
          <h1 className="text-uppercase text-right banner-title">{title}</h1>
          <Link to={`/category/${title}`} className="btn banner-btn text-uppercase align-self-end" href="#" role="button">Learn more</Link>
        </div>      
      </div>
    </div>
  )
}

export default CollectionsBannerItem 
  
