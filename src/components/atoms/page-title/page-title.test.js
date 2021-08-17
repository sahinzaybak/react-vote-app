import React from 'react';
import {render, screen} from "@testing-library/react"
import PageTitle from "./page-title"

it("Page Title Is Document", () => {
	render(<PageTitle />)
	const PageTitleElement = screen.queryByTestId("page-title");
	expect(PageTitleElement).toBeInTheDocument();
})
it("Page Title ClassName In Document", () => {
	render(<PageTitle />)
	const PageTitleElement = screen.queryByTestId("page-title");
	expect(PageTitleElement).toHaveClass("page-title");
})