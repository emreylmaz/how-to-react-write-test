import { render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import Header from "../Header";

describe("Header Tests" , () => {

    test("Header must be rendered" , () => {
        render(<Header />);
        const headerText = screen.getByText(/Emoji Search/i);
        expect(headerText).toBeInTheDocument();
    })

});