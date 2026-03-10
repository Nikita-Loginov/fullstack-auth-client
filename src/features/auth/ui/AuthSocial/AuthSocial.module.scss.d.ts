export type Styles = {
  'social': string;
  'social-btns': string;
  'social-decor': string;
  'text': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
