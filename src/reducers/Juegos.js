const imageUrl = 'https://drive.google.com/uc?export=view&id='

const iconos = [
    '1C0p4zi1ZbJ0_xT0gJI62cWXXqFYU_KHf',
    '14686wYOrygoE6fwYwFYLvvO6E6gcfOby',
    '1pc0o1sWwufFUDodKCvjFNeQ8FRMKt-rT',
    '1WcAdYvo6E_fKVWFuuBt46QknPhETlbNz'
]

const initState = {
    data: iconos,
    url: imageUrl,
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        default:
            return state
    }
}
