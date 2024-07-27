import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetApartmentDetailsAction } from "../redux/actions/getAllApartmentAction";

const GetApartmentDetailsHook = (id) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setDate] = useState("");

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      await dispatch(GetApartmentDetailsAction(id));
      setLoading(false);
    };

    get();
  }, []);

  const res = useSelector((item) => item.ApartmentDetails.getDetails);

  useEffect(() => {
    if (loading === false) {
      setDate(res.data);
    }
  }, [loading]);

  return [loading, data];
};

export default GetApartmentDetailsHook;
