import { 
  TOGGLE_SIDEBAR,
  HIDE_SIDEBAR
} from '../actions/uiActions';

const initialState = {
    sidebar: false
};

export default function ui (state = initialState, action) {
    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            sidebar: !state.sidebar
        };
    } 
    else if (action.type === HIDE_SIDEBAR) {
        return {
            ...state,
            sidebar: false
        }
    }
    else {
        return state;
    }
}