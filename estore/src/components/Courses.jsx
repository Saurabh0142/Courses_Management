import React from "react";

import{
    Card,
    CardBody,
    
    CardSubtitle,CardText, Container, Button,
    
} from "reactstrap";
import axios from "axios";
import base_url from "./../api/bootapi";
import { toast } from "react-toastify";

const Courses = ({course,update})=>{
    const deleteCourse=(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{    
                toast.success("deleted successfully");
                update(id);
            },
            (error)=>{
                toast.error("cant be deleted");
            }
        );

    };
    return (
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="font-weight-bold">{course.title} </CardSubtitle>
                <CardText>{course.description }</CardText>
                <Container className="text-center">
                    <Button color="danger" onClick={()=>{
                        deleteCourse(course.id); 
                    }}>delete</Button>
                    <Button color="warning margin-left: 2 ">update</Button>
                </Container>

            </CardBody>
        </Card>
    );
};
export default Courses;
