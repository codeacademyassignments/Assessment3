// export const TOGGLE_HEART_LIKE = 'TOGGLE_HEART_LIKE';
// export const SET_STATE = 'SET_STATE';
export const INITIALIZE_STATE = 'INITIALIZE_STATE';

// export const toggleHeartLike = index => ({ type: TOGGLE_HEART_LIKE, index });
// export const setState = () => ({ type: SET_STATE });
export const initializeState = books => ({ type: INITIALIZE_STATE, books });
