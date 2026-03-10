export type Styles = {
  'error': string;
  'input-box': string;
  'input-box__block': string;
  'input-box__error': string;
  'input-box__info': string;
  'input-box__label': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
