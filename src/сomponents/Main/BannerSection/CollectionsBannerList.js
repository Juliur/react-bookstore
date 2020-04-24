import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CollectionsBannerItem from './CollectionsBannerItem';

const CollectionsBannerList = ({collections, collectionId}) =>{
  return(
    <Container>
      <Row>
        <Col>
          {
          collections
            .filter(item => item.id === collectionId)
            .map(({id, name, images}) => 
              <CollectionsBannerItem
                key = {id}
                title={name.en}
                backgroundImg={images[0].url}
              />)
          }
        </Col>
      </Row>
    </Container>
  )
}

export default CollectionsBannerList