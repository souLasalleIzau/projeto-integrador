import $ from 'jquery';

export const getAllUsers = () => {

  $.get("http://localhost:3000/usuarios", function (data) {
    console.log(data);
  });
}

export const validLogin = (email, password, type) => {
  email = "Alessandra";
  password = "Ale123";

  $.post("http://localhost:3000/login", { email, password, type }, function (data) {
    if ((data || []).length) {
      window.location.href = "http://localhost/projeto-integrador.local/front-end/home-gestor.html";
    }
  }); 
}