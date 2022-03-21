import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
ListBill.propTypes = {
    list: PropTypes.array,
};

ListBill.defaultProps = {
    list: [],
};
export default function ListBill(props) {

    const { list } = props;
    return (
        <tbody>
            {list.map(list => (
                <tr>
                    <th scope="row">{list.maDon}</th>
                    <td>{list.ngayTao}</td>
                    <td>{list.nguoiNhan}</td>
                    <td>{list.sdt}</td>
                    <td>{list.diaChiGiao}</td>
                    <td>{list.tongTien.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                    <td>{list.tinhTrang}</td>
                    <td className="action d-flex justify-content-evenly align-items-center">
                        <Link to='/chitietdonhang' className="sua">Xem</Link>
                        <Link to='/managebill' className="xoa">Xóa</Link>
                        {list.tinhTrang ==="Chưa giao"? 
                        <Link to='/managebill' className="duyet">Duyệt</Link>
                        : null}
                    </td>                
                </tr>
            ))}
        </tbody>
    );
}

