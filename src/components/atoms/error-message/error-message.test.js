import React from 'react';
import {render, screen} from "@testing-library/react"
import ErrorMessage from "./error-message"

it("Error Message Is Document", () => {
	render(<ErrorMessage />)
	const ErrorElement = screen.queryByTestId("error-message");
	expect(ErrorElement).toBeInTheDocument();
})
it("Error Message ClassName In Document", () => {
	render(<ErrorMessage />)
	const ErrorElement = screen.queryByTestId("error-message");
	expect(ErrorElement).toHaveClass("error");
})