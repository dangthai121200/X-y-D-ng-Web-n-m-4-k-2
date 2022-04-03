import React from "react";
import laptest from "../../images/lap1.jpg";


const addToCart = (pid, pimg, pname, pcpu, pram, pvga, pocung, pmanhinh, pgia) => {
  var cartItems = new Array();
  if (sessionStorage.cartitems === undefined) {
    var product = {
      'id': pid,
      'img': pimg,
      'name': pname,
      'cpu': pcpu,
      'ram': pram,
      'vga': pvga,
      'ocung': pocung,
      'manhinh': pmanhinh,
      'gia': pgia,
      'quantity': 1
    }
    cartItems.push(product);
    sessionStorage.setItem('cartitems', JSON.stringify(cartItems));

  }
  else {
    cartItems = JSON.parse(sessionStorage.cartitems);
    var flag = checkCart(pid, cartItems);
    if(flag){
      cartItems = updateItemInCart(pid,cartItems);
      sessionStorage.setItem('cartitems',JSON.stringify(cartItems));
    }else{
      var product = {
        'id' : pid,
        'img' : pimg,
        'name' : pname,
        'cpu' : pcpu,
        'ram' : pram,
        'vga' : pvga,
        'ocung' : pocung,
        'manhinh' : pmanhinh,
        'gia' : pgia,
        'quantity' : 1
      }
      cartItems.push(product);
      sessionStorage.setItem('cartitems',JSON.stringify(cartItems));
    }

  }

}

const updateItemInCart = (cid, cobj) => {
  for (let prod in cobj) {
    if (cobj[prod].id == cid){
      cobj[prod].quantity += 1;
    }
  }
  return cobj;
}

const checkCart = (cid, cobj) => {
  for (let prod in cobj) {
    console.log(cobj[prod].id == cid);
    if (cobj[prod].id == cid)
      return true;
  }
  return false;
}

export default function Card({ id, img, name, cpu, ram, vga, ocung, manhinh, gia }) {
  return (
    <div className="item">
      <div className="item__image">
        <img src={img} alt="" />
        <a href="#" className="image__more">
          Xem thêm
        </a>
      </div>
      <h3 className="item__name">{name}</h3>
      <div className="item__detail">
        <table>
          <tbody>
            <tr>
              <th>CPU:</th>
              <td>{cpu}</td>
            </tr>
            <tr>
              <th>RAM:</th>
              <td>{ram}</td>
            </tr>
            <tr>
              <th>VGA:</th>
              <td>{vga}</td>
            </tr>
            <tr>
              <th>Ổ cứng:</th>
              <td>{ocung}</td>
            </tr>
            <tr>
              <th>Màn hình:</th>
              <td>{manhinh}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="item__button">

        <input type="hidden" name="masp" value="" />
        <button className="cart" onClick={() => addToCart(id, img, name, cpu, ram, vga, ocung, manhinh, gia)}>
          <i className="fa-solid fa-cart-arrow-down"></i>
        </button>

        <div className="price">{gia.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })}</div>
      </div>
    </div>
  );
}
