import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllApartmentAction } from "../redux/actions/getAllApartmentAction";

const GetAllApartmentHook = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  const limit = 2;
  const get = async (word) => {
    setLoading(true);
    await dispatch(GetAllApartmentAction(`PageSize=${limit}&Search=${word}`));
    setLoading(false);
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
    localStorage.setItem("search", e.target.value);
  };

  useEffect(() => {
    get(search);
  }, [search]);

  const onpres = async (e) => {
    let word = "";
    if (localStorage.getItem("search") !== null) {
      word = localStorage.getItem("search");
    }
    await dispatch(
      GetAllApartmentAction(`PageNumber=${e}&PageSize=${limit}&Search=${word}`)
    );
  };

  useEffect(() => {
    get("");
  }, []);

  const res = useSelector((item) => item.AllApartment.getApatments);
  useEffect(() => {
    if (loading === false) {
      if (res && res.data) {
        setData(res.data);
      }
    }
  }, [loading]);

  const items = res;
  return [loading, data, onpres, search, onChangeSearch, items];
};

export default GetAllApartmentHook;
