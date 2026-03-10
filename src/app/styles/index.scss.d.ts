export type Styles = {
  'h1': string;
  'h2': string;
  'h3': string;
  'icon': string;
  'icon--big': string;
  'light': string;
  'main': string;
  'p1': string;
  'p2': string;
  'p3': string;
  'p4': string;
  'root': string;
  'wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
