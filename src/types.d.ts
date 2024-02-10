export interface Quote {
    category: string,
    author: string,
    text: string;
};

export interface QuoteId extends Quote {
    id: string;
};

export interface Quotes {
    [id: string]: Quote;
};