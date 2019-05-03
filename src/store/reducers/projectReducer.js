const initState = {
    projects: [
        {id: 1, title: 'Titulo 1', content: 'lorem lorem '},
        {id: 2, title: 'Titulo 2', content: 'lorem lorem '},
        {id: 3, title: 'Titulo 3', content: 'lorem lorem '}
    ]
};

const projectReducer = (state = initState, action) => {
    return state
};

export default projectReducer