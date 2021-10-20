import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// میگه که من میخوام لوکال استورج به عنوان استورج پیش فرض باشه 
import storage from 'redux-persist/lib/storage';// localStorege on windows browser


import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';

const persistConfig ={
    key : 'root',
    storage,
    whitelist: ['cart'] 
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export default persistReducer(persistConfig, rootReducer)