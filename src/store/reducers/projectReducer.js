const initState = {
    projects: [
        {id: 1, title: 'Titulo 1', content: 'lorem lorem '},
        {id: 2, title: 'Titulo 2', content: 'lorem lorem '},
        {id: 3, title: 'Titulo 3', content: 'lorem lorem '}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
};

export default projectReducer