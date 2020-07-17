import React, { Component } from 'react'
import {
    Button,
    Modal,
    Card,
    Form,
    ListGroup
} from "react-bootstrap";

export default class DetailCard extends Component {
    render() {
        return (
            <>
                <Card bg="warning" text="white" className="shadow" style={{ cursor: 'pointer', width: '25rem' }}>
                    <Card.Body>
                        <div className="row p-0 m-0 ">
                            <div className="col-4 p-0 m-0">
                                <Card.Title className="p-0 m-0"><i style={{ color: '#ECE9EE', fontSize: '50px',  padding: '0' }} class="fas fa-book p-0 m-0" ></i></Card.Title>
                            </div>
                            <div className="col-8 p-0 m-0">
                                <Card.Text className="pt-3 m-0">
                                   <strong className="h1">รายละเอียด</strong>
                                </Card.Text>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
