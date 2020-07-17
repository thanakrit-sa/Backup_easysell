import React, { Component } from 'react'

export default class Data extends Component {
    render() {
        // const { minWeight } = this.props.data
        return (
            <>
                <tr>
                    <th class="pt-7" scope="row">1</th>
                    <td class="pt-7">0</td>
                    <td class="pt-7">10 กก.</td>
                    <td class="pt-7">$ 56</td>
                    <td class="pt-7">$ 56</td>
                    <td>
                        <div class="btn-group py-3">
                            <button type="button" class="btn btn-light-dark btn-sm dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">จัดการข้อมูล</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">แก้ไขรายการ</a>
                                <a class="dropdown-item" href="#">ลบรายการ</a>
                            </div>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}
