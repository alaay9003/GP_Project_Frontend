import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../Redux/Actions/courseAction";
import HtmlEditor, {
  Toolbar,
  Item,
  MediaResizing,
  TableContextMenu,
  ImageUpload,
} from "devextreme-react/html-editor";
import prettier from "prettier/standalone";
import parserHtml from "prettier/parser-html";
import { markup, tabs } from "./data.js";
import "devextreme/ui/html_editor/converters/markdown";
import { useEffect } from "react";
const sizeValues = ["8pt", "10pt", "12pt", "14pt", "18pt", "24pt", "36pt"];
const fontValues = [
  "Arial",
  "Courier New",
  "Georgia",
  "Impact",
  "Lucida Console",
  "Tahoma",
  "Times New Roman",
  "Verdana",
];
const headerValues = [false, 1, 2, 3, 4, 5];

function AddCourse() {
  const valueChanged = (e) => {
    setValueContent(e.value);
  };
  const [valueContent, setValueContent] = useState("");
  const [done, setDone] = useState(false);
  const [currentTab, setCurrentTab] = useState(tabs[2].value);
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [jupiter, setJupiter] = useState("");
  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const changeName = (e) => {
    e.persist();
    setTitle(e.target.value);
  };
  const changeDescription = (e) => {
    e.persist();
    setDescription(e.target.value);
  };
  const handleChange = (e) => {
    setJupiter(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(
      createCourse({
        title,
        description,
        durationPerDays: 0,
        constructorId: "0",
        isActive: true,
        htmlCentent: valueContent,
        jupiter,
      })
    );
    setLoading(false);
  };
  useEffect(() => {
    if (loading === false) {
      setTitle("");
      setJupiter("");
      setDone(true);
    }
  }, [loading]);

  return (
    <>
      <Container className="minH my-5 bg-white">
        <Row>
          <input
            placeholder="Course Name"
            value={title}
            onChange={changeName}
            type={"text"}
            className="fit reduce my-2"
          />
          <input
            placeholder="Course description"
            value={description}
            onChange={changeDescription}
            type={"text"}
            className="fit reduce my-2"
          />
        </Row>
        <Row>
          <label htmlFor="upload">
            <p>Jupiter File</p>
          </label>
          <input
            type={"file"}
            value={jupiter}
            onChange={handleChange}
            id="upload"
            className="fit"
          />
        </Row>
        <div className="widget-container">
          <HtmlEditor
            height={800}
            defaultValue={valueContent}
            // valueType={editorValueType}
            onValueChanged={valueChanged}
          >
            <MediaResizing enabled={true} />
            <ImageUpload fileUploadMode="base64" tabs={currentTab} />
            <Toolbar>
              <Item name="undo" />
              <Item name="redo" />
              <Item name="separator" />
              <Item name="size" acceptedValues={sizeValues} />
              <Item name="font" acceptedValues={fontValues} />
              <Item name="separator" />
              <Item name="bold" />
              <Item name="italic" />
              <Item name="strike" />
              <Item name="underline" />
              <Item name="separator" />
              <Item name="alignLeft" />
              <Item name="alignCenter" />
              <Item name="alignRight" />
              <Item name="alignJustify" />
              <Item name="separator" />
              <Item name="orderedList" />
              <Item name="bulletList" />
              <Item name="separator" />
              <Item name="header" acceptedValues={headerValues} />
              <Item name="separator" />
              <Item name="color" />
              <Item name="background" />
              <Item name="separator" />
              <Item name="link" />
              <Item name="image" />
              <Item name="separator" />
              <Item name="clear" />
              <Item name="codeBlock" />
              <Item name="blockquote" />
              <Item name="separator" />
              <Item name="insertTable" />
              <Item name="deleteTable" />
              <Item name="insertRowAbove" />
              <Item name="insertRowBelow" />
              <Item name="deleteRow" />
              <Item name="insertColumnLeft" />
              <Item name="insertColumnRight" />
              <Item name="deleteColumn" />
            </Toolbar>
            <TableContextMenu enabled={true} />
          </HtmlEditor>
          {/* 
                        <div className="options">

                            <div className="value-content">
                                {this.prettierFormat(valueContent)}
                            </div>
                        </div> */}
        </div>
        <Row className="justify-content-center btn-form">
          <Button
            variant="black"
            className="bg-black text-white fit  my-4"
            onClick={handleSubmit}
          >
            Save
          </Button>
          {done ? (
            <h1 className="text-center text-success fw-bold">
              Course Added Successfully
            </h1>
          ) : null}
        </Row>
      </Container>
    </>
  );
}

export default AddCourse;
