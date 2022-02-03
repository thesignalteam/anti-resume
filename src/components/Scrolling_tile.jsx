import React from "react";
import { Card, Segment, Header} from 'semantic-ui-react'
import 'pure-react-carousel/dist/react-carousel.es.css';



function Scrolling_tile(props) {

  const pic = props.pic;
  var propic = '../tower.png';
  var style = "default";

  if (pic) {
    propic = pic;
    style = "center-cropped"
  }

  return <Card id="Scrolling_tile" textAlign="center" href={ "/resume/" + props.classT + "/" + props.index }>
    <Card.Content>

      <Segment basic padded className="tile_content">
      <img className={style} src={propic}></img>
      <Header className="name" as="h3">{ props.name }</Header>
      <Card.Meta className="year">{ props.classT }</Card.Meta>
      </Segment>

    </Card.Content>

  </Card>


}


export default Scrolling_tile;
