import request from 'superagent';

export const TOP_5 = 'TOP_5';

// If running on local, change baseUrl to 3000:localhost
const baseUrl = 'https://ohmmmm.herokuapp.com';

const top5 = top5 => ({
  type: TOP_5,
  top5
});

export const addScore = (score, gameTypeId) => (dispatch, getState) => {
  const playerId = getState().currentUser.userId;

  request
    .post(`${baseUrl}/scores`)
    .send({ score, playerId, gameTypeId })
    .catch(error => error);
};

export const getPlayerTop5 = gameTypeId => (dispatch, getState) => {
  const playerId = getState().currentUser.userId;

  request
    .get(`${baseUrl}/playerTop5?playerId=${playerId}&gameTypeId=${gameTypeId}`)
    .then(response => dispatch(top5(response.body.score)))
    .catch(error => error);
};
