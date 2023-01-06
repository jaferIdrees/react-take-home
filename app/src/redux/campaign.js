const RETRIEVE_MISSIONS = 'RETRIEVE_MISSIONS';
const ERROR = 'ERROR';

const initialState = {};

export default function reducer(state = initialState, action = {}) {
    const { type, payload } = action;
    switch (type) {
        case RETRIEVE_MISSIONS:
            {
                const newState = [];
                newState = payload;
                return newState;
            }
            default: return state;
    }
}

export const retrieveCampaigns = () => async (dispatch) => {
    try {
      const response = await GetCampaigns();
      dispatch({
        type: RETRIEVE_MISSIONS,
        payload: response.data,
      });
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: { err },
      });
    }
  };
  