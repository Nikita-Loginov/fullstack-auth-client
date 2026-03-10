export type Styles = {
  'button': string;
  'button--big': string;
  'button--disabled': string;
  'button--icon': string;
  'button--medium': string;
  'button--small': string;
  'button--text': string;
  'button--theme-default': string;
  'button--theme-primary': string;
  'button--theme-secondary': string;
  'button--theme-success': string;
  'button--theme-warning': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
