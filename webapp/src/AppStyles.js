import { makeStyles } from '@material-ui/core/styles';

const down = (size) => {
  const sizes = {
    xs: '575.98px',
    md: '991.98px',
  };

  return `@media (max-width: ${sizes[size]})`;
};

export default makeStyles({
  App: {
    width: '60%',
    margin: '0 auto',
    [down('md')]: {
      width: '70%',
    },
    [down('xs')]: {
      width: '90%',
    },
  },
  header: {
    textAlign: 'center',
    '& h1': {
      color: '#2c3e50',
      margin: '5vh 0 0 0',
      fontSize: '5rem',
      fontWeight: '300',
      '& span': {
        fontWeight: '700',
      },
      [down('xs')]: {
        fontSize: '4.5rem',
      },
    },
    '& h2': {
      color: '#9aa1a5',
      fontSize: '1rem',
      fontWeight: '300',
      [down('xs')]: {
        fontSize: '0.6rem',
      },
    },
  },
  link: {
    display: 'flex',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    color: '#81b3d2',
    fontSize: '0.7rem',
    position: 'relative',
    textDecoration: 'none',
    transition: '0.5s color ease',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  button: {
    margin: '5px',
  },
  field: {
    margin: '5px',
  },
});
