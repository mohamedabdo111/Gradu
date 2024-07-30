import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notify } from "../components/fixed/notify";
import {
  AddCommentAction,
  AddLikeAction,
  EnrollAction,
} from "../redux/actions/anyoneAction";
import { useNavigate } from "react-router-dom";

const AddCommentHook = (id) => {
  const [comments, setComment] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const onChangeComment = (e) => {
    setComment(e.target.value);
  };

  if (JSON.parse(localStorage.getItem("UserInf")) !== null) {
    var userId = JSON.parse(localStorage.getItem("UserInf")).userId;
  }

  const Submit = async () => {
    setLoading(true);
    if (comments === "") {
      return;
    }
    await dispatch(
      AddCommentAction({
        userID: userId,
        apartmentID: id,
        comment: comments,
      })
    );
    setLoading(false);
  };

  const SubmitLike = async () => {
    setLoading(true);
    await dispatch(
      AddLikeAction({
        userID: userId,
        apartmentID: id,
      })
    );
    setLoading(false);
  };
  const OnEnroll = async () => {
    setLoading(true);
    await dispatch(
      EnrollAction({
        userID: userId,
        apartmentID: id,
      })
    );
    setLoading(false);
  };

  const res = useSelector((item) => item.AnyOne.AddComment);
  const resLike = useSelector((item) => item.AnyOne.addLike);
  const Enroll = useSelector((item) => item.AnyOne.enroll);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data && res.data.statusCode === 200) {
        window.location.reload();
      } else if (res && res.status === 401) {
        navigate("/login");
      }

      if (resLike && resLike.data && resLike.data.statusCode === 200) {
        window.location.reload();
      } else if (resLike && resLike.status === 401) {
        navigate("/login");
      } else if (
        resLike &&
        resLike.data &&
        resLike.data.message === "Can't React,You Already reacted."
      ) {
        notify("Already like it", "warn");
      }
      //   if (Enroll && Enroll.data && Enroll.data.statusCode === 200) {
      //     notify("Done", "success");
      //   } else if (Enroll && Enroll.status === 401) {
      //     window.location.href = "/login";
      //   }

      if (Enroll && Enroll.status === 401) {
        navigate("/login");
      } else if (Enroll && Enroll.data && Enroll.data.statusCode === 200) {
        window.location.href = Enroll.data.data;
      }
    }
  }, [loading]);

  return [comments, loading, onChangeComment, Submit, SubmitLike, OnEnroll];
};

export default AddCommentHook;
