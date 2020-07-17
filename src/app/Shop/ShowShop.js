import React, { Component } from 'react'
import CardShop from './cardShop'
import ConnectFacebook from './ConnectFacebook'

export default class ShowShop extends Component {
    render() {
        return (
            <>
                <div class="row pb-10">
                    <div class="col" align="right">
                        <button data-toggle="modal" data-target="#exampleModal" class="btn btn-light-success">เพิ่มการเชื่อมต่อเพจ</button>
                    </div>
                </div>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">เพิ่มการเชื่อมต่อเพจ</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <i aria-hidden="true" class="ki ki-close"></i>
                                </button>
                            </div>
                            <div class="modal-body" align="center">
                                <ConnectFacebook />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-4">
                        <CardShop />
                    </div>
                    <div class="col-4">

                    </div>
                    <div class="col-4">

                    </div>
                </div>
            </>
        )
    }
}
