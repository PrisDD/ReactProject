let renderEntireTree = () => {
    console.log ('state is changed');
}

let state = {
    profilePage:{
        postsData:  [
            { id: 1, message: 'Hi, hay?', like: '10' },
            { id: 2, message: 'Hi2, hay?', like: '20' },
            { id: 3, message: 'Hi3, hay?', like: '30' },
            { id: 4, message: 'Hi4, hay?', like: '40' }
        ],
        newPostText: 'Что у вас нового?'
    },

    dialogsPage:{
        dialogsData: [
            { id: 1, name: 'Tina' },
            { id: 2, name: 'Ann' },
            { id: 3, name: 'Mari' },
            { id: 4, name: 'Margo' },
            { id: 5, name: 'Lena' },
            { id: 6, name: 'Dar' }
        ],

        // avaData: [
        //     { id: 1, imgAva: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' },
        //     { id: 2, imgAva: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' },
        //     { id: 3, imgAva: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' },
        //     { id: 4, imgAva: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' },
        //     { id: 5, imgAva: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' },
        //     { id: 6, imgAva: 'https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png' }
        // ],
        messageData: [
            { id: 1, textMessage: 'Hello' },
            { id: 2, textMessage: 'hi' },
            { id: 3, textMessage: 'woow' },
            { id: 4, textMessage: 'no...' },
            { id: 5, textMessage: 'Lena,hi!' },
            { id: 6, textMessage: 'Hi, hau?' }
        ]
    }
}

export const addPost = () => {
    let newPost = {
        id: 8,
        message: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText)=>{
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const subscribe = (observer) => {
    renderEntireTree = observer; //наблюдатель patrn

}

export default state;
