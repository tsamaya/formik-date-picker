import React from 'react';
import {
  Button,
  LinearProgress,
  Container,
  CssBaseline,
  Paper,
} from '@material-ui/core';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from 'formik-material-ui';
import { KeyboardDatePicker } from 'formik-material-ui-pickers';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';

import useStyles from './AppStyles';

const App = () => {
  const classes = useStyles();

  const initialValues = {
    name: '',
    birthday: null,
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    birthday: Yup.date().typeError('Birthday is mandatory').required(),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false);
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values, null, 2));
    }, 100);
  };

  return (
    <Container maxWidth="md">
      <CssBaseline />
      <header className={classes.header}>
        <h1>
          Material-UI & <span>DatePicker</span>
        </h1>
        <h2>Timezone issue when selecting date</h2>
      </header>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
            submitForm,
            resetForm,
            ...rest
          }) => (
            <React.Fragment>
              <Paper className={classes.paper}>
                <Form>
                  <div className={classes.fields}>
                    <Field
                      className={classes.field}
                      component={TextField}
                      required
                      fullWidth
                      name="name"
                      type="text"
                      label="Name"
                    />
                    <Field
                      className={classes.field}
                      component={KeyboardDatePicker}
                      required
                      clearable={true}
                      label="Date of Birth"
                      name="birthday"
                      format="dd/MM/yyyy"
                      onChange={(value) => {
                        // override bindings to prevent issue with timezone
                        if (!value) return;
                        let date;
                        try {
                          date = value.toISOString();
                          setFieldValue('birthday', date);
                        } catch (e) {
                          setFieldValue('birthday', null);
                        }
                      }}
                    />
                  </div>

                  {isSubmitting && <LinearProgress />}
                  <div className={classes.buttons}>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="primary"
                      disabled={isSubmitting}
                      onClick={submitForm}
                    >
                      Submit
                    </Button>
                    <Button
                      className={classes.button}
                      variant="contained"
                      color="default"
                      disabled={isSubmitting}
                      onClick={resetForm}
                    >
                      Reset
                    </Button>
                  </div>
                </Form>
              </Paper>
              <br />
              <Paper>
                values<pre>{JSON.stringify(values, null, 2)}</pre>
                touched<pre>{JSON.stringify(touched, null, 2)}</pre>
                errors<pre>{JSON.stringify(errors, null, 2)}</pre>
              </Paper>
            </React.Fragment>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </Container>
  );
};

export default App;
