const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE_NEW_MESSAGE_DATA';

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageData = state.newMessageData;
            state.messagesData.push({id: 7, message: newMessageData});
            state.newMessageData = '';
            return state;
        case UPDATE_NEW_MESSAGE_DATA:
            state.newMessageData = action.newMessageValue;
            return state;
        default:
            return state;
    }
};

export const addMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageValueCreator = (currentMessageValue) => ({
    type: UPDATE_NEW_MESSAGE_DATA,
    newMessageValue: currentMessageValue,
});

export default dialogPageReducer;