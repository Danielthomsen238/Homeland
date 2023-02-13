export interface Global {
  theme: {
    colors: {
      background: string;
      white: string;
      purple: string;
      darkgreen: string;
      red: string;
      opale: string;
      grey: string;
      darkgrey: string;
      interaction: string;
      border: string;
    };
    breakpoints: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
    development: {
      underDevelopment: boolean;
      border: string;
    };
  };
  show?: boolean;
}

export interface DefaultTheme {
  colors: {
    background: string;
    white: string;
    purple: string;
    darkgreen: string;
    red: string;
    opale: string;
    grey: string;
    darkgrey: string;
    interaction: string;
    border: string;
  };
  breakpoints: {
    xs: string;
    s: string;
    m: string;
    l: string;
    xl: string;
  };
  development: {
    underDevelopment: boolean;
    border: string;
  };
  show?: boolean;
}
