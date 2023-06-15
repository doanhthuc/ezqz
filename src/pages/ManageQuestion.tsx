import React from "react";
import classes from "./ManageQuestion.module.scss";
import Card from "../components/Card/Card";
const ManageQuestionPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Manage Question</div>
      <Card header="List question">
        <div>Hehe</div>
      </Card>
    </div>
  );
};
export default ManageQuestionPage;
