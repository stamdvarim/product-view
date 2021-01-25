import './App.css';
import Form from './components/Form';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const App = () => {
  const useStylesFooter = makeStyles((theme) => ({
    footer: {
      backgroundColor:
        theme.palette.type === 'light'
          ? theme.palette.grey[200]
          : theme.palette.grey[800],
    },
  }));
  const classesFooter = useStylesFooter();

  return (
    <div className='all'>
      <div>
        <Form />
      </div>
      <footer className={classesFooter.footer} style={{ textAlign: 'center' }}>
        <Container maxWidth='sm'>
          <Typography variant='body1' style={{ fontSize: '0.9rem' }}>
            ליצירת קשר יש לפנות ל- creativetohar@gmail.com
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default App;
