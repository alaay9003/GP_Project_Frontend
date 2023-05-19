import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createUser } from "../Redux/Actions/userAction";
import { async } from "q";
import notify from "../hooks/useNotification";

const SignUpFormHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
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
  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("enter user name", "error");
      return;
    }
    if (phone.length <= 10) {
      notify("Enter Correct Phone Number", "error");
      return;
    }
    if (!password) {
      notify("Enter Password", "error");
      return;
    }
    if (password != confirmPassword) {
      notify("Confirm Password", "error");
      return;
    }
  };

  //save data
  const OnSubmit = async () => {
    validationValues();
    setLoading(true);
    setIsPress(true);
    await dispatch(
      createUser({
        password: password,
        email: email,
        userName: name,
        phoneNumber: phone,
      })
    );
    setLoading(false);
    setIsPress(false);
  };
  const res = useSelector((state) => state.UserReducer.user);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status) {
          notify("user has been Added successfully", "success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          notify(res.data.message, "warn");
        }
      }
    }
  }, [loading]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    OnSubmit,
    isPress,
  ];
};

export default SignUpFormHook;
