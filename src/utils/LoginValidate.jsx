import * as Yup from "yup";

export const LoginValidate = Yup.object({
  email: Yup.string()
    .trim()
    .email("Email không hợp lệ")
    .required("Email là bắt buộc"),
  password: Yup.string()
    .trim()
    .required("Mat khau la bat buoc")
    .min(6, "Mat khau phai co it nhat 6 ki tu"),
  username: Yup.string()
    .trim()
    .max(16, "Username co nhieu nhat 16 ki tu")
    .required("Username la bat buoc"),
  secondPassword: Yup.string()
    .trim()
    .required("Mat khau la bat buoc")
    .oneOf([Yup.ref("password"), null], "Mat khau nhap khong giong nhau"), 
  confirm: Yup.boolean()
    .oneOf([true], "Bat buoc phai tich"), 
});