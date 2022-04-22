export type PrismicRichText = any;

export type Homepage = {
    title?: PrismicRichText;
    content?: PrismicRichText;
}
export type Site = {
    _meta?:{
      uid?: string;
    }
    title?: string;
}

export type Sites = {
  _meta?: {
    uid?: string;
  };
  title?: string;
  slices: Array<
    TextSlice | ImageSlice | AccordionSlice | BooleanSlice
  >;
};

export type TextSlice = {
  type: 'text';
  variation: {
    primary: {
      text: PrismicRichText;
    };
  };
};
export type BooleanSlice = {
  type: 'boolean';
  variation: {
    primary: {
      question: PrismicRichText;
      bolean: Boolean;
    };
  };
};
export type ImageSlice = {
  type: 'image';
  variation: {
    primary: {
      image: {
        dimensions: {
          width: number;
          height: number;
        };
        alt: string;
        copyright: string;
        url: string;
      };
      caption: PrismicRichText;
    };
  };
};

export type AccordionSlice = {
  type: 'accordion';
  variation: AccordionSLiceDefaultVariation;
};

export type AccordionSLiceDefaultVariation = {
  primary: {
    title: PrismicRichText;
  };
  items: Array<AccordionItem>;
};

export type AccordionItem = {
  header: string;
  content: PrismicRichText;
};
