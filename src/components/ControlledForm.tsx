import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from '../utils/yup/schema';

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
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Controlled Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register('name')} />
          <p>{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" {...register('age')} />
          <p>{errors.age?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            {...register('confirmPassword')}
          />
          <p>{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <label>Gender:</label>
          <select {...register('gender')}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p>{errors.gender?.message}</p>
        </div>

        <div>
          <label>
            Accept Terms & Conditions
            <input type="checkbox" {...register('acceptTerms')} />
            <p>{errors.acceptTerms?.message}</p>
          </label>
        </div>

        <div>
          <label htmlFor="picture">Upload Picture:</label>
          <input type="file" id="picture" {...register('picture')} />
          <p>{errors.picture?.message}</p>
        </div>

        <div>
          <label htmlFor="country">Select Country:</label>
          <select id="country" {...register('country')}>
            <option value="country"></option>
            <option value="country1">Poland</option>
            <option value="country2">Belarus</option>
          </select>
          <p>{errors.country?.message}</p>
        </div>

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
