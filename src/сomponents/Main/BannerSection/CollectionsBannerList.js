import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CollectionsBannerItem from './CollectionsBannerItem';

const CollectionsBannerList = ({collections, collectionId, title}) =>{
  return(
    <Container>
      <Row>
        <Col>
          {
          collections
            .filter(item => item.id === collectionId)
            .map(({id, images}) => 
              <CollectionsBannerItem
                key = {id}
                title={title}
                backgroundImg={images[0].url}
                collectionId={collectionId}
              />)
          }
        </Col>
      </Row>
    </Container>
  )
}

export default CollectionsBannerList