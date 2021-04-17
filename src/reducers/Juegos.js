const imageUrl = 'https://drive.google.com/uc?export=view&id='

const information = [
    {
        id: '1',
        image: '14686wYOrygoE6fwYwFYLvvO6E6gcfOby',
        title: 'Chimi',
        store: 'https://play.google.com/store/apps/details?id=mx.com.dualdev3.chimi'
    },
    {
        id: '2',
        image: '1pc0o1sWwufFUDodKCvjFNeQ8FRMKt-rT',
        title: 'No Toques',
        store: 'https://play.google.com/store/apps/details?id=mx.com.dualdev3.NoToques'
    },
    {
        id: '3',
        image: '1WcAdYvo6E_fKVWFuuBt46QknPhETlbNz',
        title: 'Slide Cube',
        store: 'https://play.google.com/store/apps/details?id=mx.com.dualdev3.slidecube'
    },
    {
        id: '4',
        image: '1C0p4zi1ZbJ0_xT0gJI62cWXXqFYU_KHf',
        title: 'Dr Dino',
        store: ''
    },
]

const dualInformation = {
    store: 'https://play.google.com/store/apps/developer?id=DUAL+Dev'
}

const initState = {
    data: information,
    url: imageUrl,
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        default:
            return state
    }
}
