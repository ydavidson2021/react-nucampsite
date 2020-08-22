import React, { Component } from 'react'; 
import { Card, CardImg, CardText, CardBody, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';

class CommentForm extends Component {
    render() {
        return(
            <div>
                <Button outline>
                    <i className="fa fa-pencil fa-lg" /> {' '}
                    Submit Comment
                </Button>
            </div> 
        );
    }
}

function RenderCampsite({campsite}){
    return(
        <div className="col-md-5 m-1">
            <Card>
                <CardBody>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardText>{campsite.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

function RenderComments({comments}){
    if(comments){
        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => {
                    return(<div><p>
                        {comment.text}
                        <br/>
                        -- {comment.author}, 
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                        </p></div>)
                })}
                <CommentForm/>
            </div>
        );
    }
}
function CampsiteInfo(props){
    if(props.campsite){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className = "row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div/>;
}

export default CampsiteInfo; 