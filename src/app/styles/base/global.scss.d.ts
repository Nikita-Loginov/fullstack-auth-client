export type Styles = {
  'icon': string;
  'icon--big': string;
  'main': string;
  'root': string;
  'wrapper': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
