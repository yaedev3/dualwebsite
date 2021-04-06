const imagenes = [
    'https://drive.google.com/file/d/1nfnw1cyVBwxEZTZqkTnLmIsEwxxP2GZY/view?usp=sharing',
    'https://drive.google.com/file/d/1X4vShWSUSpmCrJAi6-QPmS6XinzptiWl/view?usp=sharing',
    'https://drive.google.com/file/d/17WMaS8MQ4ekTDf6J4VqBKZY_OQO8NBhC/view?usp=sharing',
    'https://drive.google.com/file/d/1WCPiQtIF3QsBbVEAcav_cV43Voa0sDZp/view?usp=sharing',
]

const iconos = [
    'https://drive.google.com/file/d/1pc0o1sWwufFUDodKCvjFNeQ8FRMKt-rT/view?usp=sharing',
    'https://drive.google.com/file/d/1C0p4zi1ZbJ0_xT0gJI62cWXXqFYU_KHf/view?usp=sharing',
    'https://drive.google.com/file/d/14686wYOrygoE6fwYwFYLvvO6E6gcfOby/view?usp=sharing',
    'https://drive.google.com/file/d/1WcAdYvo6E_fKVWFuuBt46QknPhETlbNz/view?usp=sharing',
]

const initState = {
    data: imagenes,
}

export default function reducer(state = initState, action) {
    switch (action.type) {
        default:
            return state
    }
}
