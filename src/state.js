let store = {
    _state: {
        dialogPage: {
            messagesData: [
                {id: 1, message: 'Hi guys'},
                {id: 2, message: 'What\'s up?'},
                {id: 3, message: 'Svetlana is so pretty'},
                {id: 4, message: 'Dmytro hello'},
                {id: 5, message: 'Guy where is my money hah?'},
                {id: 6, message: 'Love peace'}
            ],
            recipientData: [
                {id: 1, name: 'Vasya'},
                {id: 2, name: 'Petro'},
                {id: 3, name: 'Svetlana'},
                {id: 4, name: 'Dmytro'},
                {id: 5, name: 'Pavel'},
                {id: 6, name: 'Anna'}
            ]
        },
        profilePage: {
            postsData: [
                {
                    id: 1,
                    post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque dicta dolore dolorum ex id in necessitatibus numquam pariatur perspiciatis praesentium quae quam rem soluta tempora temporibus vel vero, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. '
                },
                {
                    id: 2,
                    post: 'Accusantium ad adipisci aliquam assumenda consectetur dolorum ipsam omnis, ratione saepe veniam! Assumenda corporis inventore iusto labore magni quam quisquam repellat sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at explicabo harum iste nemo quam quisquam sequi sunt vero! Blanditiis dolorem, est exercitationem magnam minus molestiae nemo temporibus voluptatem?'
                },
                {
                    id: 3,
                    post: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda atque dicta dolore dolorum ex id in necessitatibus numquam pariatur perspiciatis praesentium quae quam rem soluta tempora temporibus vel vero, voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci aliquam assumenda consectetur dolorum ipsam omnis, ratione saepe veniam! Assumenda corporis inventore iusto labore magni quam quisquam repellat sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet at explicabo harum iste nemo quam quisquam sequi sunt vero! Blanditiis dolorem, est exercitationem magnam minus molestiae nemo temporibus voluptatem?'
                }
            ],
            newPostValue: ''
        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
    },
    addPost() {
        let newPostData = {
            id: 4,
            post: this._state.profilePage.newPostValue,
        };
        this._state.profilePage.postsData.push(newPostData);
        this._state.profilePage.newPostValue = '';
        this._callSubscriber(this._state);
    },
    updateNewPostValue(updatedValue) {
        this._state.profilePage.newPostValue = updatedValue;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
};

export default store;