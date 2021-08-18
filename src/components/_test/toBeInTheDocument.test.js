import React from 'react';
import {render, screen} from "@testing-library/react"
import ErrorMessage from "../atoms/error-message/error-message"
import PageTitle from "../atoms/page-title/page-title"
import Input from "../atoms/input/input"

it("Page Title Is Document", () => {
	render(<PageTitle />)
	const PageTitleElement = screen.queryByTestId("page-title");
	expect(PageTitleElement).toBeInTheDocument();
})

it("Error Message Is Document", () => {
	render(<ErrorMessage />)
	const ErrorElement = screen.queryByTestId("error-message");
	expect(ErrorElement).toBeInTheDocument();
})

it("Input Is Document", () => {
	render(<Input />)
	const InputElement = screen.queryByTestId("input-title");
	expect(InputElement).toBeInTheDocument();
})

