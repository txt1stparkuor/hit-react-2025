import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required("Phai dien email"),
  password: yup.string().min(8),
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  }); 

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // throw new Error();
      console.log(data);
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email: </label>
        <input {...register("email")} type="text" placeholder="Email" />
      </div>
      {errors.email && (
        <div>{errors.email.message}</div>
      )}
      <div>
        <label>Password: </label>
        <input {...register("password")} type="password" placeholder="Password" />
      </div>
      {errors.password && (
        <div>{errors.password.message}</div>
      )}
      <button disabled={isSubmitting} type="submit">
        {isSubmitting ? "Loading..." : "Submit"}
      </button>
      {errors.root && <div>{errors.root.message}</div>}
    </form>
  );
};

export default ReactHookForm;