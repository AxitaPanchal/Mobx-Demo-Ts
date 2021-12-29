import React, { FC, useState } from "react";
import { observer } from "mobx-react-lite";
import MyStore from "../Store/Store";

type Props = {
  store: MyStore;
};

const Home: FC<Props> = ({ store }) => {
  const [userName, setUserName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };
  return (
    <>
      <h4>Home Page </h4> <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "lightgrey",
            height: "400px",
            width: "400px",
            borderRadius: "10px",
          }}
        >
          <h4 style={{ marginTop: "90px" }}>
            <span style={{ color: "blue" }}> Name : </span>
            <span
              style={{
                background: "skyblue",
                padding: "4px",
                borderRadius: "8px",
              }}
            >
              {store.userInfo.name}
            </span>
          </h4>
          <h4>
            <span style={{ color: "blue" }}> User : </span>
            <span
              style={{
                background: "skyblue",
                padding: "4px",
                borderRadius: "8px",
              }}
            >
              {store.userInfo.subject}
            </span>
          </h4>
          <br />
          <br />
          <input value={userName} onChange={handleChange} />
          <button onClick={() => store.setUsername(userName)}>
            change name
          </button>{" "}
          <br />
          <br />
          <input value={subject} onChange={handleChangeSubject} />
          <button onClick={() => store.addSubject(subject)}> Add user</button>
        </div>
      </div>
    </>
  );
};
export default observer(Home);
