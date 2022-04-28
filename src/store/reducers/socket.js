import {
  OPEN_SOCKET,
} from '../actionTypes';

import {
  openSocket,
} from '../actions/socket';


const DEFAULT_STATE = {
};


export default (state=DEFAULT_STATE, action) => {
  state = Object.freeze(state);
  switch(action.type) {
    case OPEN_SOCKET:
      return {
        socket: io.connect(process.env.REACT_APP_SERVER_URL),
      };
    default: 
      return state;
  }
}

