const INITIAL_STATE = {
    bookingDetails:{}
};

const reducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
        case 'BOOKING_DETAILS':{
            return {
                ...state,
                bookingDetails:action.payload
            }
        }
        default:{
            return state;
        }
    }
}
export default reducer;