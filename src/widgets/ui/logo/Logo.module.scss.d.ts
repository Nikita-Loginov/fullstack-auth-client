export type Styles = {
  'logo': string;
  'logo--medium': string;
  'logo--small': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
