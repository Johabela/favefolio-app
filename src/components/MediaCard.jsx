import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from "react"


function MediaCard(props){

    const [isFaved, setFaved] = useState(false);

    const [isRecd, setRecd] = useState(false);


    const handleFaveClick = () => {
     setFaved(!isFaved);
    
    };

    const handleRecClick = () => {
        setRecd(!isRecd);
       
    };




    return (
        <Card style={{ width: '18rem', display: 'flex'}}>
        <Card.Body>
            <Card.Title>
                {props.cardTitle}
            </Card.Title>
            <Card.Img variant="top" src={props.imageUrl} style={{maxHeight: 342, maxWidth: 245, marginTop: 15}}  />
            <Card.Text>
            {props.cardRank}
            {props.typeMedia}
            </Card.Text>
            <Button  onClick={handleFaveClick} variant="primary"> 
                {isFaved ? 'Unfave' : 'Fave'}
            </Button>
            <Button  onClick={handleRecClick} variant="primary">
                {isRecd ? 'Unrec' : 'Rec'}
            </Button>
        </Card.Body>
        </Card>
    );
}

export default MediaCard;
