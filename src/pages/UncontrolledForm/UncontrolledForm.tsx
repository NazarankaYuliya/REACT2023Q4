import styles from './UncontrolledForm.module.css';
import { useRef, useState } from 'react';
import { schema } from '../../utils/yup/schema';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  setName,
  setAge,
  setEmail,
  setPassword,
  setConfirmPassword,
  setGender,
  setTerms,
} from '../../store/reducers/formDatareducer';

interface FormValues {
  name: string | undefined;
  age: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  gender: string | undefined;
  acceptTerms: boolean | undefined;
  picture: File | undefined;
  country: string | undefined;
}

interface FormErrors {
  [key: string]: string | undefined;
}

function UncontrolledForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const acceptTermsRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLSelectElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FormValues = {
      name: nameRef.current?.value,
      age: ageRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      acceptTerms: acceptTermsRef.current?.checked,
      picture: pictureRef.current?.files?.[0],
      country: countryRef.current?.value,
    };

    try {
      await schema.validate(formData, { abortEarly: false });
      dispatch(setName(formData.name));
      dispatch(setAge(formData.age));
      dispatch(setEmail(formData.email));
      dispatch(setPassword(formData.password));
      dispatch(setConfirmPassword(formData.confirmPassword));
      dispatch(setGender(formData.gender));
      dispatch(setTerms(formData.acceptTerms));
      setFormErrors({});

      navigate('/');
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const newErrors: FormErrors = {};
        error.inner.forEach((e) => {
          if (!newErrors[e.path as keyof FormErrors]) {
            newErrors[e.path as keyof FormErrors] = e.message;
          }
        });
        setFormErrors(newErrors);
      }
    }
  };

  return (
    <div className={styles.form_container}>
      <h1 className={styles.form_title}>Uncontrolled Form</h1>
      <form className={styles.uncontrolled_form} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" ref={nameRef} />
          <div className={styles.error}>
            {formErrors.name && <p>{formErrors.name}</p>}
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" ref={ageRef} />
          <div className={styles.error}>
            {formErrors.age && <p>{formErrors.age}</p>}
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" ref={emailRef} />
          <div className={styles.error}>
            {formErrors.email && <p>{formErrors.email}</p>}
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
          />
          <div className={styles.error}>
            {formErrors.password && <p>{formErrors.password}</p>}
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            ref={confirmPasswordRef}
          />
          <div className={styles.error}>
            {formErrors.confirmPassword && <p>{formErrors.confirmPassword}</p>}
          </div>
        </div>

        <div className={styles.form_group}>
          <label>Gender:</label>
          <select id="gender" name="gender" ref={genderRef}>
            <option></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <div className={styles.error}>
            {formErrors.gender && <p>{formErrors.gender}</p>}
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="country">Country:</label>
          <select id="country" name="country" ref={countryRef}>
            <option></option>
            <option value="country1">Belarus</option>
            <option value="country2">Poland</option>
          </select>
          <div className={styles.error}>
            {formErrors.country && <p>{formErrors.country}</p>}
          </div>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="picture">Upload Picture:</label>
          <input type="file" id="picture" name="picture" ref={pictureRef} />
          <div className={styles.error}>
            {formErrors.picture && <p>{formErrors.picture}</p>}
          </div>
        </div>

        <div className={styles.form_group}>
          <label>
            Accept Terms & Conditions
            <input type="checkbox" name="acceptTerms" ref={acceptTermsRef} />
          </label>
          <div className={styles.error}>
            {formErrors.acceptTerms && <p>{formErrors.acceptTerms}</p>}
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
