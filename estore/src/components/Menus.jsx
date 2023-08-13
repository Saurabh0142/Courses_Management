import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{
    return(
        <ListGroup>
            <Link tag="a" to="/" action >
                Home 
            </Link>
            <Link tag="a" to="/Add-course" action >
                Add courses 
            </Link>
            <Link tag="a" to="/view-course" action >
                view courses
            </Link>
            <Link tag="a" to="#!" action >
                about
            </Link>
            <Link tag="a" to="#!" action >
                contact
            </Link>
        </ListGroup>

    );
};
export default Menus;