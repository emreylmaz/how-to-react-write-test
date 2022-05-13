import { render , screen } from "@testing-library/react";
import React from 'react';
import App from "../App";

test("Emoji list must be rendered successfully ", () => {

    render(<App />)
    //Burada 20 tane emoji listesi basılacak
    const items = screen.getAllByTestId("emoji-result-row"); // Kolaylık olsun diye EmojiResultRow dosyasında en üstteki div'e data-testid olarak emoji-result-row atandı.
    expect(items.length).toEqual(20);
});



