// export const API_URL="https://laptopso1vn.herokuapp.com/";
export const API_URL="http://localhost:8080/laptopso1vn-backend/";

export const HTTP_STATUS = Object.freeze({
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED'
})

export const validEmail = new RegExp(
    /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
 );
 export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
 export const validUsername= new RegExp("^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$");
