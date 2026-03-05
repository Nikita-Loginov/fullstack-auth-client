export type Styles = {
  'button': string;
  'circle-size': string;
  'dashed-type': string;
  'default-size': string;
  'default-type': string;
  'link-type': string;
  'primary-type': string;
  'round-size': string;
  'square-size': string;
  'text-type': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
