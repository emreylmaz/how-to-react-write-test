import {render,screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import React from 'react';
import App from "../App";

test('Clicking on the emoji copies it to the clipboard', async () => {
    render(<App />);

    const clickableEmoji = screen.getAllByTestId('emoji-result-row');

    // Bu attiribute'i kullanarak emoji'yi seçmeye çalışıyoruz.
    expect(clickableEmoji[0]).toHaveAttribute("data-clipboard-text");

});