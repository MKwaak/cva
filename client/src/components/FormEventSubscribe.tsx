import { FC, useState } from 'react';
import { Grid, Box, Button, OutlinedInput, Theme, FormControl, FormHelperText } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import { ServerResponseInterface } from '../shared.types';
import { urlSubscribeMailchimp } from '../api';
import Alert from './Alert';

const schema = yup.object().shape({
  EMAIL: yup.string().email('Must be a valid E-mail address.').required('Please fill in your e-mail address.'),
  FNAME: yup.string().required('Please fill in your first name.'),
  LNAME: yup.string().required('Please fill in your last name.'),
  MMERGE6: yup.string().required('Please fill in your profession.'),
});

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    backgroundColor: theme.palette.common.white,
    width: '100%',
  },
  white: {
    color: theme.palette.common.white,
  },
  error: {
    color: theme.palette.error.main,
  },
}));

const inputFields = [
  { name: 'EMAIL', id: 'mce-EMAIL', placeholder: 'Email Address', type: 'email', required: true },
  { name: 'FNAME', id: 'mce-FNAME', placeholder: 'First Name', type: 'text', required: true },
  { name: 'LNAME', id: 'mce-LNAME', placeholder: 'Last Name', type: 'text', required: true },
  { name: 'MMERGE6', id: 'mce-MMERGE6', placeholder: 'Profession', type: 'text', required: true },
];

interface RequestObjectBody {
  EMAIL?: string;
  FNAME?: string;
  LNAME?: string;
  MMERGE6?: string;
}

const FormEventSubscribe: FC = () => {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: 'onChange',
    validationSchema: schema,
  });
  const { dirty } = formState;
  const classes: ClassNameMap<string> = useStyles({});
  const [serverResponse, setServerResponse] = useState<ServerResponseInterface>();

  const onSubmit = (data: RequestObjectBody): void => {
    const requestSettings = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
    fetch(urlSubscribeMailchimp, requestSettings)
      .then((res) => {
        // eslint-disable-next-line no-console
        console.log('response ===> ', res);
        if (res.ok) {
          setServerResponse({ type: 'success', message: 'You have been subscribed!' });
        } else if (res.status === 422) {
          setServerResponse({ type: 'warning', message: 'You have already been subscribed.' });
        } else {
          setServerResponse({ type: 'error', message: 'Please try again later.' });
        }
        return res.json();
      }).catch((fetchError) => {
        // eslint-disable-next-line no-console
        console.log(fetchError);
        setServerResponse({ type: 'error', message: 'Please try again later.' });
      });
  };

  return (
    <Grid container className={classes.formContainer}>
      <Grid item xs={12} md={10} lg={6}>
        {serverResponse && (
          <Alert severity={serverResponse.type} gutterBottom>
            {serverResponse.message}
          </Alert>
        )}
        {!serverResponse && (
          <form
            action="https://creatingvalueconf.us19.list-manage.com/subscribe/post?u=275128d8e166d053af088aa66&amp;id=5c96284a31&amp;SIGNUP=eventpage3conference"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <Box display="flex" flexDirection="column">
                {inputFields.map(({ name, id, placeholder, type, required }) => (
                  <Box key={name} display="flex" mb={2}>
                    <FormControl fullWidth error={!!errors[name]}>
                      <OutlinedInput
                        type={type}
                        name={name}
                        className={classes.input}
                        placeholder={`${placeholder} ${required ? '*' : ''}`}
                        id={id}
                        inputRef={register}
                      />
                      <FormHelperText>{errors[name]?.message}</FormHelperText>
                    </FormControl>
                  </Box>
                ))}
                <Box display="flex" mb={1}>
                  <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="b_275128d8e166d053af088aa66_5c96284a31" tabIndex={-1} defaultValue="" />
                  </div>
                  <div className="response" id="mce-error-response" style={{ display: 'none' }} />
                  <div className="response" id="mce-success-response" style={{ display: 'none' }} />
                </Box>
                <Box display="flex" justifyContent="flex-end">
                  <Button
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    variant="contained"
                    color="primary"
                    disabled={!dirty}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Box>
            </div>
          </form>
        )}
      </Grid>
    </Grid>
  );
};

export default FormEventSubscribe;
