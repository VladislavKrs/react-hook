import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div className="container">
      <h2>Registration Form</h2>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            {...register("name", { required: true, minLength: 2, pattern: /[a-zA-Z0-9]+/ })}
            placeholder="Enter your name"
            required
          />
          {errors.name && <div className="text-danger small">Name should be valid</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            {...register("email", { required: true, pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/ })}
            placeholder="Enter your email"
            required
          />
          {errors.name && <div className="text-danger small">Email should be valid</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true, pattern: /^(?=.*\d)\w{3,20}$/m })}
            placeholder="Enter your password"
            required
          />
          {errors.name && <div className="text-danger small">Password should be valid</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            {...register("confirmPassword", { required: true, pattern: /^(?=.*\d)\w{3,20}$/m })}
            placeholder="Confirm your password"
            required
          />
          {errors.name && <div className="text-danger small">Confirm password should be valid</div>}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="terms"
            {...register("terms", { required: true })}
            required
          />
          <label className="form-check-label" htmlFor="terms">
            I agree to the terms and conditions
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
