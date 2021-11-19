const light = {
    title: 'light',
    palette: {
        primary: {
            light: '#B39CD1',
            main: '#fff',
            dark: '#e6c3fa'
        },
        secondary: {
            light: '#B593C4',
            main: '#925db0',
            dark: '#452259'
        },
        background: {
            main: '#452259',
            medium: '#3c0d54',
            contrast: '#80499c'
        },
        status: {
            error: '#DB2B1E',
            warning: '#FFC655',
            success: '#00C7A1'
        },
        opacity: {
            main: {
                30: 'rgba(234, 225, 252, .3)',
                50: 'rgba(234, 225, 252, .5)',
                60: 'rgba(234, 225, 252, .6)',
                80: 'rgba(234, 225, 252, .8)'
            },
            dark: {
                10: 'rgba(24, 3, 64, .1)',
                20: 'rgba(24, 3, 64, .2)',
                30: 'rgba(24, 3, 64, .3)',
                50: 'rgba(24, 3, 64, .5)'
            }
        }
    },
    typography: {
        font: "'Poppins', Verdana, sans-serif",
    }
}

export default light;