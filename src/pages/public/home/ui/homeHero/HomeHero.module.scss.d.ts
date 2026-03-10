export type Styles = {
  'hero': string;
  'hero-btns': string;
  'hero-inner': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
