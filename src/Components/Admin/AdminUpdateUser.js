import React, { useState } from "react";
import img from "../../Images/avatar-06.png";
import { Button, Row, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createUser } from "../../Redux/Actions/userAction";
import { ToastContainer } from "react-toastify";
import notify from "../../hooks/useNotification";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#f8716e",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#f8716e",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#f8716e",
    },
    "&:hover fieldset": {
      borderColor: "#f8716e",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#f8716e",
    },
  },
});

const AdminUpdateUser = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const [ConfirmPassword, setConfirmPassword] = useState("false");

  const res = useSelector((state) => state.UserReducer.user);

  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();

    if (name === "" || password === "" || email === "" || phoneNumber === "") {
      notify("Plesse Complete Failds", "warn");
      return;
    }
    if (password != ConfirmPassword) {
      notify("There was Problem in Password", "warn");
      return;
    }
    setIsPress(true);
    setLoading(true);
    await dispatch(
      createUser({
        password: password,
        email: email,
        userName: name,
        phoneNumber: phoneNumber,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      setIsPress(false);
      console.log(res);
      if (res.data.status) {
        setName("");
        setPassword("");
        setEmail("");
        setPhoneNumber("");
        console.log("تم الانتهاء");
      }
      if (res.data.status) {
        notify("user has been Added successfully", "success");
      } else {
        notify(res.data.message, "warn");
      }
    }
  }, [loading]);

  return (
    <>
      <Row className="m-4 justify-content-center">
        <div className="update-user">
          <div className="createUserImg">
            <label htmlFor="upload">
              <img src={img} style={{ width: "150px" }} />
            </label>
          </div>
          <CssTextField
            id="standard-basic"
            label="User Name"
            variant="standard"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <CssTextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <CssTextField
            id="standard-basic"
            label="Phone Number"
            variant="standard"
            type="tel"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
          />
          <CssTextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
          <CssTextField
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={ConfirmPassword}
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            type="password"
          />
          <div className="btn-form">
            <Button variant="dark" className="fit" onClick={onSubmit}>
              Create
            </Button>
            {isPress ? (
              loading ? (
                <Spinner
                  animation="border"
                  variant="primary"
                  style={{ margin: "10px" }}
                />
              ) : (
                <h4>Finished</h4>
              )
            ) : null}
          </div>
          <ToastContainer />
        </div>
      </Row>
    </>
  );
};

export default AdminUpdateUser;
