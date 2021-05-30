import { Field, ErrorMessage, Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}

function Login(): JSX.Element {
  const dispatch = useDispatch();

  const schema = Yup.object({
    email: Yup.string()
      .email('Must be a valid email')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .when('password', {
        is: (val: string) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref('password')],
          'Confirm password must equal password'
        )
      })
  });

  const handleSubmit = (values: Values, helpers: FormikHelpers<Values>) => {
    dispatch({
      type: 'SIGN_IN_REQUEST',
      payload: values
    });
  };

  return (
    <div className="container p-5">
      <Formik
        initialValues={{ email: '', password: '', confirmPassword: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form noValidate>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <Field
              id="email"
              name="email"
              type="text"
              className="form-control"
              required
            />
            <ErrorMessage name="email" className="" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              className="form-control"
            />
            <ErrorMessage name="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <Field
              id="confirm-password"
              name="confirmPassword"
              type="password"
              className="form-control"
            />
            <ErrorMessage name="confirmPassword" />
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="display-password"
            />
            <label className="form-check-label" htmlFor="display-password">
              Check to display password
            </label>
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Login;
