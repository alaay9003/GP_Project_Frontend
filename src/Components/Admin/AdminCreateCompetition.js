import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCompetition } from "../../Redux/Actions/CompetitionActions";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Textarea } from "@mui/joy";

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

function AdminCreateCompetition() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [prize, setPrize] = useState("");
  const [currency, setCurrency] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endtDate, setEndtDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setIsPress] = useState(false);
  const res = useSelector((state) => state.CompetitionReducer.Competitions);

  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      prize === "" ||
      startDate === "" ||
      endtDate === ""
    ) {
      return;
    }
    setIsPress(true);
    setLoading(true);
    await dispatch(
      createCompetition({
        title,
        description,
        prize,
        currency,
        startDate,
        endtDate,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setLoading(true);
      setIsPress(false);
      try {
        if (res.data.status) {
          setTitle("");
          setDescription("");
          setPrize("");
          setStartDate("");
          setEndtDate("");
          console.log("تم الانتهاء");
        }
      } catch {}
    }
  }, [loading]);

  return (
    <Container>
      <Row className="m-4 justify-content-center">
        <div className="update-user">
          <div
            className=" fw-bold fs-4 my-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Add New Competition
          </div>
          <CssTextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            id="standard-basic"
            variant="standard"
            label="Title"
            type={"text"}
            value={title}
          />
          <Textarea
            minRows={5}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            placeholder="description"
            color="danger"
            className="my-2"
          />
          {/* <textarea
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            style={{ resize: "none", width: "20rem" }}
            rows="7"
            placeholder="description"
          /> */}

          <CssTextField
            onChange={(e) => {
              setPrize(e.target.value);
            }}
            id="standard-basic"
            label="Prize"
            type={"text"}
            value={prize}
            variant="standard"
          />

          <input
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
            placeholder="Start Date"
            type={"datetime-local"}
            className="fit reduce my-2"
            value={startDate}
          />
          <input
            onChange={(e) => {
              setEndtDate(e.target.value);
            }}
            placeholder="End Date"
            type={"datetime-local"}
            className="fit reduce my-2"
            value={endtDate}
          />

          <Button className=" btn-card" onClick={onSubmit}>
            Save
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default AdminCreateCompetition;
