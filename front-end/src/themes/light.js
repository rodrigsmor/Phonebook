const light = {
    title: 'light',
    palette: {
        primary: {
            light: '#8F61E4',
            main: '#8554E2',
            dark: '#290966'
        },
        secondary: {
            light: '#B27ECE',
            main: '#944BBB',
            dark: '#54296C'
        },
        background: {
            main: '#eae1fc',
            medium: '#f5f0ff',
            contrast: '#ffffff'
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
                40: 'rgba(24, 3, 64, .4)',
                50: 'rgba(24, 3, 64, .5)'
            }
        }
    },
    typography: {
        font: "'Poppins', Verdana, sans-serif",
    }
}

export default light;