export type Styles = {
  'color-dark-400': string;
  'h1': string;
  'h2': string;
  'h3': string;
  'p1': string;
  'p2': string;
  'p3': string;
  'p4': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
