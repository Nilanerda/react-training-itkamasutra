const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_DATA = 'UPDATE_NEW_MESSAGE_DATA';

let initialState = {
    messagesData: [
        {id: 1, message: 'Hi guys'},
        {id: 2, message: 'What\'s up?'},
        {id: 3, message: 'Svetlana is so pretty'},
        {id: 4, message: 'Dmytro hello'},
        {id: 5, message: 'Guy where is my money hah?'},
        {id: 6, message: 'Love peace'},
    ],
    recipientData: [
        {id: 1, name: 'Vasya'},
        {id: 2, name: 'Petro'},
        {id: 3, name: 'Svetlana'},
        {id: 4, name: 'Dmytro'},
        {id: 5, name: 'Pavel'},
        {id: 6, name: 'Anna'},
    ],
    newMessageData: ''
};

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessageData = state.newMessageData;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: newMessageData}],
                newMessageData: ''
            };
        case UPDATE_NEW_MESSAGE_DATA:
            return {
                ...state,
                newMessageData: action.newMessageValue
            };
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