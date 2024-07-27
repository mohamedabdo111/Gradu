import { useDispatch, useSelector } from "react-redux";
import { GetAllApartmentAction } from "../redux/actions/getAllApartmentAction";
import { useEffect, useState } from "react";

const GetAllApartmentHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetAllApartmentAction());
      setLoading(false);
    };
    get();
  }, []);

  const res = useSelector((item) => item.AllApartment.getApatments);

  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        setData(res.data);
      }
    }
  }, [loading]);

  return [loading, data];
};

export default GetAllApartmentHook;
