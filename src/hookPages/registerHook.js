import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RegisterAction } from "../redux/actions/AuthAction";
import { notify } from "../components/fixed/notify";

const RegisterHook = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [Phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [gender, setGender] = useState("");
  const [userType, setUseType] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfrimPass = (e) => {
    setConfirmPass(e.target.value);
  };
  const onChangeGender = (e) => {
    setGender(e.target.value);
  };
  const onChangeUserType = (e) => {
    setUseType(e.target.value);
  };

  //   validation for empty inputs
  const validation = () => {
    if (username === "") {
      return notify("UserName is empty", "error");
    } else if (email === "") {
      return notify("Email is empty", "error");
    } else if (Phone === "") {
      return notify("phone is empty", "error");
    } else if (Phone.length < 11) {
      return notify("Phone number must be 11 numbers", "error");
    } else if (password === "") {
      return notify("Password is empty", "error");
    } else if (confirmPass === "") {
      return notify("Confirm password is empty", "error");
    } else if (gender === "") {
      return notify("Select your gender", "error");
    } else if (userType === "none") {
      return notify("Select your type", "error");
    } else if (userType === "") {
      return notify("Select your type", "error");
    } else if (password !== confirmPass) {
      return notify("Password not match !", "error");
    } else if (password.length < 8) {
      return notify(
        "The password must be 8 letters , numbers and symbols",
        "error"
      );
    }
  };
  const submit = async (e) => {
    validation();
    const formdata = new FormData();
    formdata.append("UserName", username);
    formdata.append("Phone", Phone);
    formdata.append("Email", email);
    formdata.append("Gender", gender);
    formdata.append("UserType", userType);
    formdata.append("Password", password);
    formdata.append("ConfirmPassword", confirmPass);
    setLoading(true);
    await dispatch(RegisterAction(formdata));
    setLoading(false);
  };

  const res = useSelector((item) => item.Auth.register);
  useEffect(() => {
    console.log(res);
    if (
      res &&
      res.data &&
      res.data.message === "Email Or Name is Already Registered"
    ) {
      return notify("Email Or Name is Already Registered", "warn");
    } else if (res && res.data && res.data.statusCode === 200) {
      notify("Confirm this email before login", "warn");
      window.location.href = "/login";
    } else if (
      res &&
      res.data &&
      res.data.message ===
        "Passwords must have at least one non alphanumeric character. ,Passwords must have at least one lowercase ('a'-'z'). ,Passwords must have at least one uppercase ('A'-'Z'). ,"
    ) {
      return notify(
        "Passwords must have at least one non alphanumeric character. ,Passwords must have at least one lowercase ('a'-'z'). ,Passwords must have at least one uppercase ('A'-'Z'). ,",
        "warn"
      );
    }
  }, [loading]);
  return [
    onChangeUserName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfrimPass,
    onChangeGender,
    onChangeUserType,
    username,
    email,
    Phone,
    password,
    confirmPass,
    gender,
    userType,
    submit,
  ];
};

export default RegisterHook;
