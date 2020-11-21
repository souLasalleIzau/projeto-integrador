import $ from 'jquery';

import { getParamsUrl } from '../helpers/getParamsUrl';
import { 
    getChallenge,
    getUser } from '../request/request';

export const viewChallenge = () => {
  const $challenge = $('#page-challenge');
    
  if ($challenge.length) {
    const codeUrl = getParamsUrl().get('code');
    const challenge = getChallenge(codeUrl)[0];

    const $content = $challenge.find('#challenge-content');
    const $tabs = $challenge.find('.module-tabs .tabs');
    const $contents = $challenge.find('.module-tabs .contents');

    $content.empty();
    $tabs.find('ul').empty();
    $contents.empty();

    if (challenge) {
      const href = $challenge.find('#edit-challenge').attr('href');

      $challenge.find('#edit-challenge').attr('href', `${href}?code=${challenge.code}`);

      const data_challenge = {
        codigo: challenge.code,
        nome: challenge.name,
        descricao: challenge.description,
        sorte: challenge.luck,
        revez: challenge.bad_luck,
      }

      Object.entries(data_challenge).map(data => $content.append(`
        <p>
          <small>${data[0]}: </small>
          ${data[1]}
        </p>`
      ));

      const players = challenge.players.map(player => getUser(player)[0]);

      if (players.length) {
        players.map((player, index) => {
        
          const challengePlayer = player.challenges.filter(playerChallenge => playerChallenge.code === challenge.code)[0]

          $tabs.find('ul').append(`
            <li class="${!index && 'active'}">
              <button type="button">
                ${player.name}
              </button>
            </li>
          `);

          $contents.append(`
            <div class="content-tab">
              <div class="container">
                <div class="module-text">
                  <div class="text-default">
                    <p>
                      <small>Nome: </small>
                      ${player.name}
                    </p>
                    <p>
                      <small>Email: </small>
                      ${player.email}
                    </p>
                    <p>
                      <small>Senso crítico: </small>
                      ${player.skills[0]}
                    </p>
                    <p>
                      <small>Trabalhar sob pressão: </small>
                      ${player.skills[1]}
                    </p>
                    <p>
                      <small>Agilidade: </small>
                      ${player.skills[2]}
                    </p>
                    ${challengePlayer && (`
                      <p>
                        <small>Solução: </small>
                        ${challengePlayer.solution}
                      </p>
                      <p>
                        <small>Sorte: </small>
                        ${challengePlayer.solution_luck}
                      </p>
                      <p>
                        <small>Revez: </small>
                        ${challengePlayer.solution_bad_luck}
                      </p>
                    `) || ""}
                  </div>
                </div>
                ${challengePlayer && (`
                  <span class="space space-top-medium">&nbsp;</span>
                  <div class="group-button">
                    <ul>
                      <li>
                        <a href="editar-usuario.html?email=${player.email}" class="button-default button-fill-primary">
                          <span>Avaliar</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                `) || ""}
              </div>
            </div>
          `);
        });
      }
    }
  }
}