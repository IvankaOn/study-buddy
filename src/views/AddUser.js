import React, { useState, useContext } from "react";
import FormField from "components/molecules/UsersListItem/FormField/FormField";
import Button from "components/atoms/Button/Button";
import CenteredContainer from "components/atoms/CenteredContainer/CenteredContainer";
import MainWrapper from "components/atoms/MainWrapper/MainWrapper";
import { Title } from "components/atoms/Title/Title";
import { UserContext } from "providers/UsersProvider";

const initialFormState = {
  name: "",
  attendance: "",
  average: "",
};

const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const context = useContext(UserContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    context.handleAddUser(formValues);
    setFormValues(initialFormState);
  };

  return (
    <CenteredContainer>
      <MainWrapper as="form" onSubmit={handleSubmitUser}>
        <Title>Add new user</Title>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}></FormField>
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange}></FormField>
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange}></FormField>
        <Button type="submit">Add</Button>
      </MainWrapper>
    </CenteredContainer>
  );
};

export default AddUser;
