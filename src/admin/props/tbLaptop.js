import React from 'react';
import { API_URL } from "../../redux/constants";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
ListLaptop.propTypes = {
    list: PropTypes.array,
};

ListLaptop.defaultProps = {
    list: [],
};
export default function ListLaptop(props) {

    const { list } = props;
    return (
        <tbody id="products">
            {list.map(list => (
                <tr>
                    <th scope="row">{list.maSp}</th>
                    <td><img src={`https://laptopso1vn.herokuapp.com/${list.hinh}`} alt="" /></td>
                    <td>{list.tenSp}</td>
                    <td> {list.gia.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</td>
                    <td>{list.soLuong}</td>
                    <td>{list.tinhTrang}</td>
                    <td className="action d-flex justify-content-around align-items-center">
                        <Link to="/editlaptop" className="sua">Sửa</Link>
                        <Link to="/manageproduct" className="xoa">Xóa</Link>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

