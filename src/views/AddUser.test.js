import React from "react";
import { screen, fireEvent } from "@testing-library/dom";
import { renderWithProviders } from "helpers/renderWithThemeProvider";
import AddUser from "views/AddUser";
import Dashboard from "views/Dashboard";

describe("Form Field", () => {
  it("Render to the component", () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>,
    );
    fireEvent.change(screen.getByTestId("Name"), {
      target: {
        value: "Eli",
      },
    });
    fireEvent.change(screen.getByTestId("Attendance"), {
      target: {
        value: "55%",
      },
    });
    fireEvent.change(screen.getByTestId("Average"), {
      target: {
        value: "3.4",
      },
    });
    fireEvent.click(screen.queryByText("Add"));

    screen.getByText("Eli");
  });
});
