const BASE_URL = "http://localhost/projeto-integrador.local/front-end/";

export const logout = () => {
  localStorage.removeItem('user');

  window.location.href = `${BASE_URL}login.html`;
}


// USERS

export const getCurrentUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return user;
}

export const isUser = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  return user.profile === "usuario";
}

export const isManager = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  
  return user.profile === "gestor";
}

export const listAllUsers = () => {
  const users = (JSON.parse(localStorage.getItem('users')) || []);

  return users;
}

export const listUsers = () => {
  const users = (JSON.parse(localStorage.getItem('users')) || []);

  return users.filter(user => user.profile === "usuario");
}

export const listManager = () => {
  const users = (JSON.parse(localStorage.getItem('users')) || []);

  return users.filter(user => user.profile === "gestor");
}

export const getUser = email => {
  const users = (JSON.parse(localStorage.getItem('users')) || []);

  return users.filter(user => user.email === email);
}

export const validateLogin = ({ email, password, profile }) => {

  if (email === "admin@admin.com.br" && password === "admin") {
    window.location.href = `${BASE_URL}home-gestor.html`;
  } else {
    const users = (JSON.parse(localStorage.getItem('users')) || []);

    if (users.length) {
      const user = users.filter(user => user.email === email && user.password === password && user.profile === profile);
    
      if (user.length) {
        localStorage.setItem('user', JSON.stringify(user));

        if (profile === "gestor") {
          window.location.href = `${BASE_URL}home-gestor.html`;
        } else {
          window.location.href = `${BASE_URL}desafios.html`;
        }
      }
    }
  }
}

export const registerUser = ({ name, email, profile, password, skills }) => {
  
  const users = (JSON.parse(localStorage.getItem('users')) || []);
  const registered = { name, email, profile, password, skills, challenges: [] };

  localStorage.setItem('users', JSON.stringify([...users, registered]));

  window.location.href = `${BASE_URL}home-gestor.html`;
}

export const editUser = ({ name, email, profile, password, skills, challenges }) => {
  
  const users = (JSON.parse(localStorage.getItem('users')) || []);

  users.map(user => {
    if (user.email === email) {
      user.name = name;
      user.profile = profile;
      user.password = password;
      user.skills = skills;
      user.challenges = challenges;
    }
  });

  localStorage.setItem('users', JSON.stringify([...users]));

  window.location.href = `${BASE_URL}home-gestor.html`;
}

export const registerResponse = ({ userEmail, code, solution, chosenSuppliers }) => {
  
  const users = (JSON.parse(localStorage.getItem('users')) || []);
  users.map(user => {
    if (user.email === userEmail) {
      const challenge = user.challenges.filter(challenge => challenge.code === code)[0];
      challenge.solution = solution;
      challenge.supplier = chosenSuppliers;
    }
  });

  localStorage.setItem('users', JSON.stringify([...users]));

  window.location.href = `${BASE_URL}sorte-revez.html?user=${userEmail}&code=${code}`;
}

export const registerLuck = ({ userEmail, code, solution_luck, solution_bad_luck }) => {
  
  const users = (JSON.parse(localStorage.getItem('users')) || []);
  users.map(user => {
    if (user.email === userEmail) {
      const challenge = user.challenges.filter(challenge => challenge.code === code)[0];
      challenge.solution_luck = solution_luck;
      challenge.solution_bad_luck = solution_bad_luck;
    }
  });

  localStorage.setItem('users', JSON.stringify([...users]));

  window.location.href = `${BASE_URL}desafios.html`;
}


// CHALLENGES

export const listChallenges = () => {
  const challenges = (JSON.parse(localStorage.getItem('challenges')) || []);

  return challenges;
}

export const getChallenge = code => {
  const challenges = (JSON.parse(localStorage.getItem('challenges')) || []);

  return challenges.filter(challenge => challenge.code === code);
}

export const registerChallenge = ({ name, time, code, description, luck, bad_luck, players, status }) => {
  
  const challenges = (JSON.parse(localStorage.getItem('challenges')) || []);
  const users = (JSON.parse(localStorage.getItem('users')) || []);
  const registered = { name, time, code, description, luck, bad_luck, players, status };

  users.map(user => {
    if (players.includes(user.email)) {
      user.challenges = [...user.challenges, { code }];
    }
  });
  
  localStorage.setItem('challenges', JSON.stringify([...challenges, registered]));
  localStorage.setItem('users', JSON.stringify([...users]));

  window.location.href = `${BASE_URL}archive-desafio-gestor.html`;
}

export const editChallenge = ({ name, time, code, description, luck, bad_luck, players, status }) => {
  
  const challenges = (JSON.parse(localStorage.getItem('challenges')) || []);
  const users = (JSON.parse(localStorage.getItem('users')) || []);

  challenges.map(challenge => {
    
    users.map(user => {
      let findChallenge = null;
      user.challenges.map((userChallenge, index) => {
        if (userChallenge.code === challenge.code) {
          findChallenge = index;
        }
      });

      if (challenge.players.includes(user.email) && !players.includes(user.email)) { // Remover os antigos
        if (findChallenge !== null) { 
          user.challenges.splice(findChallenge, 1);
        }
      } else if (players.includes(user.email)) { // Adicionar novos
        if (findChallenge === null) {
          user.challenges.push({ code: challenge.code });
        }
      }
    });

    if (challenge.code === code) {
      challenge.name = name;
      challenge.time = time;
      challenge.description = description;
      challenge.luck = luck;
      challenge.bad_luck = bad_luck;
      challenge.players = players;
      challenge.status = status;
    }
  });

  localStorage.setItem('challenges', JSON.stringify([...challenges]));
  localStorage.setItem('users', JSON.stringify([...users]));

  window.location.href = `${BASE_URL}archive-desafio-gestor.html`;
}