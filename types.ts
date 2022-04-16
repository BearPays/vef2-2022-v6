export type PrismicRichText = any;

export type Homepage = {
    title?: PrismicRichText;
    content?: PrismicRichText;
}
export type Sites = {
    _meta?:{
      uid?: string;
    }
    title?: string;
}
