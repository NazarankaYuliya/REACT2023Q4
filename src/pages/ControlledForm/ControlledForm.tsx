import styles from './ControlledForm.module.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../../utils/yup/schema';
import { useDispatch } from 'react-redux';
import {
  setName,
  setAge,
  setEmail,
  setPassword,
  setConfirmPassword,
  setGender,
  setTerms,
} from '../../store/reducers/formDatareducer';
import { useNavigate } from 'react-router-dom';

interface FormData {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
  gender: string;
  acceptTerms?: boolean;
  picture?: FileList;
  country: string;
}

function ControlledForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: FormData) => {
    dispatch(setName(data.name));
    dispatch(setAge(data.age));
    dispatch(setEmail(data.email));
    dispatch(setPassword(data.password));
    dispatch(setConfirmPassword(data.confirmPassword));
    dispatch(setGender(data.gender));
    dispatch(setTerms(data.acceptTerms));

    navigate('/');
  };

  return (
    <div className={styles.form_container}>
      <h1 className={styles.form_title}>Controlled Form</h1>
      <form
        className={styles.controlled_form}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={styles.form_group}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register('name')} />

          <div className={styles.error}>
            <p>{errors.name?.message}</p>
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" {...register('age')} />
          <div className={styles.error}>
            <p>{errors.age?.message}</p>
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email')} />
          <div className={styles.error}>
            <p>{errors.email?.message}</p>
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register('password')} />
          <div className={styles.error}>
            <p>{errors.password?.message}</p>
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword')}
          />
          <div className={styles.error}>
            <p>{errors.confirmPassword?.message}</p>
          </div>
        </div>

        <div className={styles.form_group}>
          <label>Gender:</label>
          <select {...register('gender')}>
            <option></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className={styles.error}>
            <p>{errors.gender?.message}</p>
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="country">Select Country:</label>
          <select id="country" {...register('country')}>
            <option></option>
            <option value="country1">Poland</option>
            <option value="country2">Belarus</option>
          </select>
          <div className={styles.error}>
            <p>{errors.country?.message}</p>
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="picture">Upload Picture:</label>
          <input type="file" id="picture" {...register('picture')} />
          <div className={styles.error}>
            <p>{errors.picture?.message}</p>
          </div>
        </div>

        <div className={styles.form_group}>
          <label>
            Accept Terms & Conditions
            <input type="checkbox" {...register('acceptTerms')} />
            <div className={styles.error}>
              <p>{errors.acceptTerms?.message}</p>
            </div>
          </label>
        </div>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
