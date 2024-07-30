import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProfileAction,
  UpdateProfileAction,
} from "../redux/actions/ownerAction";
import { notify } from "../components/fixed/notify";

const OwnerGetProfileInfoHook = () => {
  const dispatch = useDispatch();
  const [mail, setmail] = useState("");
  const [username, setuserName] = useState("");
  const [phone, setPhone] = useState("");
  const [imageVal, setImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(true);

  const onChangeUserName = (e) => {
    setuserName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setmail(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  } else {
    userId = "";
  }

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetProfileAction(userId, userId));
      setLoading(false);
    };
    get();
  }, []);

  const onSubmit = async () => {
    const formdata = new FormData();
    formdata.append("Name", username);
    formdata.append("Phone", phone);
    formdata.append("Email", mail);
    formdata.append("Picture", imageVal);
    setLoadingSubmit(true);
    await dispatch(UpdateProfileAction(formdata));
    setLoadingSubmit(false);
  };

  const res = useSelector((item) => item.AdminReducer.profileInfo);
  const resUpdate = useSelector((item) => item.AdminReducer.Updateprofile);

  useEffect(() => {
    if (loadingSubmit === false) {
      if (resUpdate.data.message === "Exist Name Already!") {
        notify("this name is exist already", "warn");
      } else if (resUpdate.data.statusCode === 200) {
        notify("your data has been updated", "success");

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
  }, [loadingSubmit]);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.data) {
        setuserName(res.data.data.userName);
        setmail(res.data.data.email);
        setPhone(res.data.data.phone);
        setImage(res.data.data.imagePath);
      }
    }
  }, [loading]);

  return [
    onChangeUserName,
    onChangeEmail,
    onChangePhone,
    onChangeImage,
    onSubmit,
    mail,
    username,
    phone,
    imageVal,
    loading,
    loadingSubmit,
  ];
};

export default OwnerGetProfileInfoHook;