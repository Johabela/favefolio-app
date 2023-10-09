import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MediaCard(props) {
  return (
    <Card style={{ width: '18rem', display: 'flex'}}>
      <Card.Body>
        <Card.Title>
            {props.cardTitle}
        </Card.Title>
        <Card.Img variant="top" src={props.imageUrl} style={{maxHeight: 342, maxWidth: 245, marginTop: 15}} className="mx-auto" />
        <Card.Text>
          {props.cardRank}
          {props.typeMedia}
        </Card.Text>
        <Button variant="primary">
         Select
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MediaCard;
