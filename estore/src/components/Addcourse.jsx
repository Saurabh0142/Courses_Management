import React, { Fragment, useEffect } from "react";
import { useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Addcourse=()=>{
    useEffect(()=>{
        document.title="Add Courses"; 
    },[]);

    const [course,setCourse]=useState({});

    // form handler  function
    const handleForm=(e)=>{
        console.log(course);
        postDatatoserver(course); 

        e.preventDefault();
    };
    // creting function to post data on server
    const postDatatoserver=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response )=>{
                console.log(response);
                console.log("success");
                toast.success("course added successfully");
                // setCourse({id:"" ,title:"",description:""});

            },
            (error)=>{
                console.log(error);
                console.log("error");
                toast.success("Went wrong something ");

            }
        )
    };


    return (
        <Fragment>
            <h1 className="text-center">Fill course details </h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">course id</label>
                    <Input
                    id="text"
                    name="userId"
                    placeholder="enter here "
                    type="userId"
                    onChange={(e)=>{
                        setCourse({...course,id: e.target.value});
                    }}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">course title</label>
                    <Input type="text" placeholder="enter title here" id="title"
                    onChange={(e)=>{
                        setCourse({...course,title: e.target.value});
                    }}
                    ></Input>
                    
                
                </FormGroup>

                <FormGroup>
                <label for="description" >description</label>
                <Input type="text" placeholder="enter description" id=" description" style={{height: 100}}
                onChange={(e)=>{
                    setCourse({...course,description: e.target.value});
                }}
                ></Input>
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success ">Add Course</Button>
                    <Button type="reset" color="warning  ml-2" onClick={(e)=>{setCourse({});}}>clear</Button>
                </Container>



            </Form>
        </Fragment>
    )

};
export default Addcourse;