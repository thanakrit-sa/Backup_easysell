import React, { Component } from 'react'
import { Form } from "react-bootstrap";

export default class CateList extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            moreChoice: true
        };
    }

    moreChoice = (keyword) => {
        console.log(keyword);
        keyword === '000' ?
            this.setState({ moreChoice: false }) : this.setState({ moreChoice: true })
    }
    render() {
        return (
            <>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>หมวดหมู่สินค้า</Form.Label>
                    <Form.Control as="select" onChange={(event) => this.moreChoice(event.target.value)}>
                        <option value="0">กรุณาเลือกหมวดหมู่สินค้า</option>
                        <option value="1">เครื่องแต่งกาย</option>
                        <option value="000">อื่นๆ...</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group hidden={this.state.moreChoice} controlId="formGroupName">
                    <Form.Label>หมวดหมู่เพิ่มเติม</Form.Label>
                    <Form.Control type="text" placeholder="กรุณากรอกชื่อหมวดหมู่" />
                </Form.Group>
            </>
        )
    }
}
