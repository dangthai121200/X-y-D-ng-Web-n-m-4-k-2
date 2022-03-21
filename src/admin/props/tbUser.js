import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
ListUser.propTypes = {
    list: PropTypes.array,
};

ListUser.defaultProps = {
    list: [],
};
export default function ListUser(props) {

    const { list } = props;
    return (
        <tbody>
            {list.map(list => (
                <tr>
                    <th scope="row">{list.makh}</th>
                    <td>{list.ho} {list.ten}</td>
                    <td>{list.sdt}</td>
                    <td>{list.diachi} </td>
                    <td>{list.email}</td>
                    <td>{list.username}</td>
                    <td className="action d-flex justify-content-around align-items-center">
                        <Link to='/editkhachhang' className="sua">Sửa</Link>
                        <Link to='/managecus' className="xoa">Xóa</Link>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

