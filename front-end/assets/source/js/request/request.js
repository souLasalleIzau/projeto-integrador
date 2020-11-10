import $ from 'jquery';

export const getAllUsers = () => {

  $.get("http://localhost:3000/usuarios", function (data) {
    console.log(data);
  });
}

export const validateLogin = ({ email, password, profile }) => {
  email = "Alessandra";
  password = "Ale123";

  $.post("http://localhost:3000/login", { email, password, profile }, function (data) {
    if ((data || []).length) {
      window.location.href = "http://localhost/projeto-integrador.local/front-end/home-gestor.html";
    }
  }); 
}

export const registerUser = ({  }) => {

  $.post("http://localhost:3000/login", { email, password, profile }, function (data) {
    if ((data || []).length) {
      window.location.href = "http://localhost/projeto-integrador.local/front-end/home-gestor.html";
    }
  }); 
}