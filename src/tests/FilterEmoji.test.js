import { render , screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import App from "../App";

test("Emoji Filter", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  let inputChild = input[0];
  inputChild = screen.getByText("100")
  expect(inputChild).toBeInTheDocument("100");
} )