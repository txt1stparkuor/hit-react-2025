import * as Yup from "yup";

export const LoginValidate = Yup.object({
  username: Yup.string()
    .trim()
    .required("Username la bat buoc"),
  password: Yup.string()
    .trim()
    .required("Password la bat buoc")
    .min(6, "Password phai co it nhat 6 ki tu"),
});
