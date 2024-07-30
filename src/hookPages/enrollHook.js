import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EnrollAction } from "../redux/actions/anyoneAction";
import { useNavigate } from "react-router-dom";

const EnrollHook = (id) => {
  const navigate = useNavigate();
  const [loadingEnroll, setloadingEnrol] = useState(true);
  const dispatch = useDispatch();

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  }

  const OnEnroll = async () => {
    setloadingEnrol(true);
    await dispatch(
      EnrollAction({
        userID: userId,
        apartmentID: id,
      })
    );
    setloadingEnrol(false);
  };

  const Enroll = useSelector((item) => item.AnyOne.enroll);

  useEffect(() => {
    if (loadingEnroll === false) {
      if (Enroll && Enroll.status === 401) {
        navigate("/login");
      } else if (Enroll && Enroll.data && Enroll.data.statusCode === 200) {
        window.location.href = Enroll.data.data;
      }
    }
  }, [loadingEnroll]);

  return [loadingEnroll, OnEnroll];
};

export default EnrollHook;
