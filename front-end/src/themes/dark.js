const dark = {
    title: 'dark',
    palette: {
        primary: {
            light: '#C8ABFF',
            main: '#FFFFFF',
            dark: '#9F05FF'
        },
        secondary: {
            light: '#B593C4',
            main: '#925db0',
            dark: '#dbc8e6'
        },
        background: {
            main: '#180c2e',
            medium: '#492a82',
            contrast: '#341d5e'
        },
        status: {
            error: '#DB2B1E',
            warning: '#FFC655',
            success: '#00C7A1'
        },
        opacity: {
            main: {
                30: 'rgba(24, 3, 64, .3)',
                50: 'rgba(24, 3, 64, .5)',
                60: 'rgba(24, 3, 64, .6)',
                80: 'rgba(24, 3, 64, .8)'
            },
            dark: {
                10: 'rgba(234, 225, 252, .1)',
                20: 'rgba(24, 3, 64, .2)',
                30: 'rgba(24, 3, 64, .3)',
                50: 'rgba(234, 225, 252, .3)'
            }
        }
    },
    typography: {
        font: "'Poppins', Verdana, sans-serif",
    }
}

export default dark;