import React from 'react';
import {render, screen} from "@testing-library/react"
import ErrorMessage from "../atoms/error-message/error-message"
import PageTitle from "../atoms/page-title/page-title"
import Input from "../atoms/input/input"

it("Error Message ClassName In Document", () => {
	render(<ErrorMessage />)
	const ErrorElement = screen.queryByTestId("error-message");
	expect(ErrorElement).toHaveClass("error");
})

it("Page Title ClassName In Document", () => {
	render(<PageTitle />)
	const PageTitleElement = screen.queryByTestId("page-title");
	expect(PageTitleElement).toHaveClass("page-title");
})

it("Input ClassName In Document", () => {
	render(<Input />)
	const InputElement = screen.queryByTestId("input-title");
	expect(InputElement).toHaveClass("input-title");
})