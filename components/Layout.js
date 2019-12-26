import { Container } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#2d3436'
        },
        secondary: {
            main: '#636e72'
        },
    },
});

const layoutStyle = {
    'konten': {
        minHeight: '90vh',
        paddingTop: 50,
        paddingBottom: 50
    }
};

const Layout = props => (
    <ThemeProvider theme={theme}>
        {/* top navigation component here */}
        <Container maxWidth="lg">
            <div style={layoutStyle.konten}>
                {props.children}
            </div>
        </Container>
        {/* footer component here */}
    </ThemeProvider>


);

export default Layout;