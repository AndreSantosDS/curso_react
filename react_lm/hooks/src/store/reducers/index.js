import numberRecuder from './number'
import userReducer from './user'

export default function reducer(state,action){
    let newState = numberRecuder(state, action)
    return userReducer(newState,action)
}