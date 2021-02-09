import { FC, useState } from 'react';
import { Box, Button, OutlinedInput, Theme, Select, FormControl, Grid, FormHelperText } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { makeStyles } from '@material-ui/core/styles';
import { ServerResponseInterface } from '../shared.types';
import { urlSubscribeMembership } from '../api';
import Alert from './Alert';

const schema = yup.object().shape({
  FNAME: yup.string().required('Please fill in your first name.'),
  LNAME: yup.string().required('Please fill in your last name.'),
  COMPANY: yup.string().required('Please fill in your company.'),
  EMAIL: yup.string().email('Must be a valid E-mail address.').required('Please fill in your e-mail address.'),
  CEMAIL: yup.string()
    .test('matchEmail', 'Emails do not match', function matchEmail(email) {
      return email === this.parent?.EMAIL;
    }).required('Please confirm your e-mail address.'),
});

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    backgroundColor: theme.palette.common.white,
  },
  formContainer: {
    marginTop: theme.spacing(5),
  },
}));

const inputFields = [
  { name: 'SALUTATION', placeholder: 'Salutation', type: 'text', required: false },
  { name: 'FNAME', placeholder: 'First Name', type: 'text', required: true },
  { name: 'LNAME', placeholder: 'Last Name', type: 'text', required: true },
  { name: 'COMPANY', placeholder: 'Company', type: 'text', required: true },
  { name: 'TITLE', placeholder: 'Title', type: 'text', required: false },
  { name: 'EMAIL', placeholder: 'Your Email', type: 'email', required: true },
  { name: 'CEMAIL', placeholder: 'Confirm Email', type: 'email', required: true },
];

interface RequestObjectBody {
  MEMBERSHIP?: string;
  SALUTATION?: string;
  FNAME?: string;
  LNAME?: string;
  COMPANY?: string;
  TITLE?: string;
  EMAIL?: string;
}

const FormMembershipSubscribe: FC = () => {
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
    fetch(urlSubscribeMembership, requestSettings)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        setServerResponse({ type: 'success', message: 'You have been subscribed!' });
      })
      .catch((fetchError) => {
        // eslint-disable-next-line no-console
        console.log(fetchError);
        setServerResponse({ type: 'error', message: 'Please try again later.' });
      });
  };

  return (
    <Grid container justify="center" className={classes.formContainer}>
      <Grid item xs={12} md={10} lg={6}>
        {serverResponse && (
          <Alert severity={serverResponse.type} gutterBottom>
            {serverResponse.message}
          </Alert>
        )}
        {!serverResponse && (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Box display="flex" flexDirection="column">
              <Box display="flex" mb={2}>
                <FormControl className={classes.select} variant="outlined" fullWidth error={!!errors.MEMBERSHIP}>
                  <Select
                    native
                    inputProps={{
                      name: 'MEMBERSHIP',
                      id: 'membership-type',
                      ref: register,
                    }}
                  >
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Institutional">Institutional</option>
                  </Select>
                  <FormHelperText>{errors?.MEMBERSHIP?.message}</FormHelperText>
                </FormControl>
              </Box>
              {inputFields.map(({ name, placeholder, type, required }) => (
                <Box key={name} display="flex" mb={2}>
                  <FormControl fullWidth error={!!errors[name]}>
                    <OutlinedInput
                      type={type}
                      name={name}
                      className={classes.input}
                      placeholder={`${placeholder} ${required ? '*' : ''}`}
                      inputRef={register}
                    />
                    <FormHelperText>{errors[name]?.message}</FormHelperText>
                  </FormControl>
                </Box>
              ))}
              <Box display="flex" justifyContent="flex-end">
                <Button
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  variant="contained"
                  color="primary"
                  disabled={!dirty}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </form>
        )}
      </Grid>
    </Grid>
  );
};

export default FormMembershipSubscribe;
