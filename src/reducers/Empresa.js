const dualInformation = {
    store: 'https://play.google.com/store/apps/developer?id=DUAL+Dev',
    logo: '',
    name: 'Dual Dev',
}

const initState = {
    data: dualInformation,
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        default:
            return state
    }
}
