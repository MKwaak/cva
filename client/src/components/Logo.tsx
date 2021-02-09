import React, { FC } from 'react';
import { makeStyles, Grid, Theme } from '@material-ui/core';

const custom = {
  palette: {
    tertiary: {
      // light-green
      light: '#5BBF8C60',
      main: '#5BBF8C',
    },
    quaternary: {
      // army green
      lightest: '#5A7E7740',
      light: '#5A7E7760',
      main: '#5A7E77',
      dark: '#545D50',
    },
    quinary: {
      // aqua
      light: '#007C9D60',
      main: '#007C9D',
    },
  },
};

const useStyles = makeStyles((theme: Theme) => ({
  logoContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  logo: {
    width: '245px',
  },
  logoColorFirst: { fill: theme.palette.primary.main },
  logoColorSecond: { fill: custom.palette.tertiary.main },
  logoColorThird: { fill: theme.palette.secondary.main },
  logoColorInner: { fill: custom.palette.quinary.main },
  logoColorInnerLight: { fill: custom.palette.quinary.light },
  logoColorDark: { fill: custom.palette.quaternary.dark },
  logoColor: { fill: custom.palette.quaternary.main },
  logoColorLight: { fill: custom.palette.quaternary.light },
  logoColorLightest: { fill: custom.palette.quaternary.lightest },
  logoColorOuter: { fill: custom.palette.tertiary.main },
  logoColorOuterLight: { fill: custom.palette.tertiary.light },
  logoColorExtraLight: { fill: theme.palette.secondary.light },
  logoColorExtra2Light: { fill: theme.palette.secondary.light },
  opacityOne: {
    opacity: '.66',
  },
  opacityTwo: {
    opacity: '.33',
  },
  logoWhite: {
    '& path': {
      fill: theme.palette.common.white,
    },
    '& circle': {
      fill: theme.palette.common.white,
    },
  },
  [theme.breakpoints.down('sm')]: {
    logo: {
      width: '200px',
    },
  },
}));

interface LogoProps {
  white?: boolean;
}

const Logo: FC<LogoProps> = ({ white }) => {
  const classes = useStyles({});
  return (
    <Grid
      className={`${classes.logoContainer} ${white && classes.logoWhite}`}
      direction="row"
      container
      itemScope
      itemType="http://schema.org/Organization"
    >
      <Grid item itemProp="logo">
        <svg
          className={classes.logo}
          xmlns="http://www.w3.org/2000/svg"
          x="0"
          y="0"
          viewBox="0 0 1121.54 482.21"
          role="img"
          aria-labelledby="logoID"
          width="245px"
          height="144px"
        >
          <title id="logoID">Creating Value Alliance</title>
          <path
            className={classes.logoColorFirst}
            d="M710.56 240.16c-9.36 9.23-21.45 13.52-34.58 13.52-33.8 0-48.1-23.27-48.23-46.93s15.34-48 48.23-48a47 47 0 0133.41 13.91L698 183.74a31.26 31.26 0 00-22-8.58c-22 0-31.46 16.38-31.33 31.59s8.84 30.81 31.33 30.81a33.5 33.5 0 0022.88-9.23zM729.66 187.51l1.17 7.41c4.95-7.93 11.57-9.1 18.08-9.1s13 2.6 16.51 6.11l-7.15 13.78a15.84 15.84 0 00-11.44-4.16c-8.32 0-16 4.42-16 16.25v33.8H715v-64.09zM784.91 225.21c1 7.93 7.93 13.65 19.11 13.65 5.85 0 13.52-2.21 17.17-6l10.14 10c-6.76 7-17.81 10.4-27.57 10.4-22.1 0-35.23-13.65-35.23-34.19 0-19.5 13.26-33.54 34.06-33.54 21.46 0 34.85 13.26 32.38 39.65zm34.85-13.13c-1-8.32-7.55-12.48-16.65-12.48-8.58 0-15.6 4.16-17.94 12.48zM898 187.51h15.21v64.09h-15l-.78-9.36c-3.64 7.54-13.65 11.18-20.8 11.31-19 .13-33-11.57-33-34.06 0-22.1 14.69-33.67 33.41-33.54 8.58 0 16.77 4 20.41 10.4zm-38.48 32c0 12.22 8.45 19.5 19 19.5 25 0 25-38.87 0-38.87-10.52-.02-18.99 7.13-18.99 19.35zM946.24 169.44v18.2h17.68v13.65h-17.81V229c0 6.11 3.38 9.1 8.32 9.1a18.12 18.12 0 007.67-2l4.42 13.52a35.43 35.43 0 01-13.13 2.73c-13.91.52-23-7.41-23-23.4v-27.66h-12v-13.65h12v-16.51zM993 169.44c0 12.35-18.72 12.35-18.72 0s18.72-12.35 18.72 0zm-17.29 17.81v64.35h15.86v-64.35zM1053.1 251.6v-33.54c0-9.75-5.33-17.16-15.47-17.16-9.75 0-16.38 8.19-16.38 17.94v32.76h-15.73v-64.22h14.17l1 8.71c6.5-6.37 13-9.62 21.06-9.62 15.08 0 27.17 11.31 27.17 31.46v33.67zM1132.92 181l11.7 8.84-7.15 9.1c4.94 5.59 6.76 12 6.76 19 0 7.93-3 19.11-13.52 23.92 10.66 5.33 13.26 13 13.26 21.19 0 17.68-13.52 28.6-32.11 28.6s-32.5-11.31-32.5-28.6h15.73c0 8.32 7.67 13.78 16.77 13.78s16.25-4.94 16.25-13.78-8.32-12.87-16.25-12.87c-20 0-32.5-12.22-32.5-32.24s14.56-32.5 32.5-32.5c5.07 0 10.27.65 14.69 3.64zm-37.83 36.92c0 11.18 7.54 17.81 16.77 17.81s16.64-6.76 16.64-17.81-7.54-18.07-16.64-18.07-16.77 6.9-16.77 18.08z"
            transform="translate(-23.08 -25.81)"
          />
          <path
            className={classes.logoColorSecond}
            d="M679.75 324h-17.81l-37.83-91.4h19.24l27.43 70.85 27.56-70.85h19.24zM766.85 259.51h15.21v64.09h-14.95l-.78-9.36c-3.64 7.54-13.65 11.18-20.8 11.31-19 .13-33-11.57-33-34.06 0-22.1 14.69-33.67 33.41-33.54 8.58 0 16.77 4 20.41 10.4zm-38.48 32c0 12.22 8.45 19.5 19 19.5 25 0 25-38.87 0-38.87-10.55-.02-19 7.13-19 19.35zM811.17 232.73v90.87h-15.73v-90.87zM841.33 259.51v33.54c0 9.75 5.33 17.16 15.47 17.16 9.76 0 16.39-8.19 16.39-17.94v-32.76h15.73v64.22h-14.17l-1-8.71c-6.64 6.5-12.75 9.62-21.72 9.62-15.34 0-26.52-11.57-26.52-31.46v-33.67zM916.47 297.21c1 7.93 7.93 13.65 19.11 13.65 5.86 0 13.53-2.21 17.17-6l10.14 10c-6.76 7-17.81 10.4-27.57 10.4-22.1 0-35.23-13.65-35.23-34.19 0-19.5 13.26-33.54 34.06-33.54 21.46 0 34.85 13.26 32.38 39.65zm34.85-13.13c-1-8.32-7.54-12.48-16.64-12.48-8.59 0-15.61 4.16-17.95 12.48z"
            transform="translate(-23.08 -25.81)"
          />
          <path
            className={classes.logoColorThird}
            d="M695 378.44h-47.62l-7.8 17.16H621l40.82-91h18.72l40.82 91h-18.73zm-23.79-54.73l-16.9 38.74h33.8zM742.28 304.73v90.87h-15.74v-90.87zM771.91 304.73v90.87h-15.73v-90.87zM803.11 313.44c0 12.35-18.72 12.35-18.72 0s18.72-12.35 18.72 0zm-17.29 17.81v64.35h15.86v-64.35zM866.82 331.51H882v64.09h-15l-.78-9.36c-3.64 7.54-13.65 11.18-20.8 11.31-19 .13-33-11.57-33-34.06 0-22.1 14.69-33.67 33.41-33.54 8.58 0 16.77 4 20.41 10.4zm-38.49 32c0 12.22 8.45 19.5 19 19.5 25 0 25-38.87 0-38.87-10.55-.02-19 7.13-19 19.35zM942.6 395.6v-33.54c0-9.75-5.33-17.16-15.47-17.16-9.75 0-16.38 8.19-16.38 17.94v32.76H895v-64.22h14.17l1 8.71c6.5-6.37 13-9.62 21.06-9.62 15.08 0 27.17 11.31 27.17 31.46v33.67zM1027.1 387.41c-7.41 7.28-15.21 10.14-24.7 10.14-18.59 0-34.06-11.18-34.06-33.93s15.47-33.93 34.06-33.93c9.1 0 16.12 2.6 23.14 9.49l-10 10.53a19.47 19.47 0 00-12.87-5.07c-10.66 0-18.46 7.8-18.46 19 0 12.22 8.32 18.72 18.2 18.72 5.07 0 10.14-1.43 14-5.33zM1050.24 369.21c1 7.93 7.93 13.65 19.11 13.65 5.85 0 13.52-2.21 17.16-6l10.14 10c-6.76 7-17.81 10.4-27.56 10.4-22.1 0-35.23-13.65-35.23-34.19 0-19.5 13.26-33.54 34.06-33.54 21.45 0 34.84 13.26 32.37 39.65zm34.84-13.13c-1-8.32-7.54-12.48-16.64-12.48-8.58 0-15.6 4.16-17.94 12.48z"
            transform="translate(-23.08 -25.81)"
          />
          <circle className={classes.logoColorLightest} cx="143.53" cy="42.75" r="7.72" />
          <circle className={classes.logoColor} cx="196.95" cy="94.31" r="23.16" />
          <circle className={classes.logoColorOuter} cx="174.87" cy="58.73" r="15.44" />
          <circle className={classes.logoColorLightest} cx="340.63" cy="30.91" r="7.72" />
          <circle className={classes.logoColor} cx="291.9" cy="91.31" r="23.16" />
          <circle className={classes.logoColorInnerLight} cx="333.34" cy="66.09" r="15.44" />
          <circle className={classes.logoColorSecond} cx="247.37" cy="36.12" r="7.72" />
          <circle className={classes.logoColorLightest} cx="239.68" cy="6.99" r="5.79" />
          <circle className={classes.logoColorLightest} cx="186.13" cy="132.95" r="5.79" />
          <circle className={classes.logoColorLightest} cx="150.92" cy="103.94" r="5.79" />
          <circle className={classes.logoColorDark} cx="184.36" cy="27.45" r="5.79" />
          <circle className={classes.logoColorLightest} cx="239.68" cy="75.01" r="15.44" />
          <circle className={classes.logoColor} cx="356.36" cy="441.53" r="7.72" />
          <circle className={classes.logoColorLightest} cx="341.25" cy="390.57" r="7.72" />
          <circle className={classes.logoColor} cx="474.39" cy="288.72" r="7.72" />
          <circle className={classes.logoColorExtraLight} cx="289.89" cy="399.66" r="23.16" />
          <circle className={classes.logoColorExtraLight} cx="323.45" cy="437.66" r="15.44" />
          <circle className={classes.logoColorLightest} cx="139.05" cy="442.7" r="7.72" />
          <circle className={classes.logoColorLightest} cx="262.32" cy="458.65" r="7.72" />
          <circle className={classes.logoColorLight} cx="372.83" cy="403.4" r="7.72" />
          <circle className={classes.logoColorLightest} cx="417.23" cy="340.25" r="7.72" />
          <circle className={classes.logoColor} cx="292.09" cy="446.33" r="7.72" />
          <circle className={classes.logoColorLightest} cx="72.93" cy="365.73" r="7.72" />
          <circle className={classes.logoColor} cx="430.37" cy="275.1" r="7.72" />
          <circle className={classes.logoColorSecond} cx="348.16" cy="418.2" r="7.72" />
          <circle className={classes.logoColor} cx="196.56" cy="393.9" r="23.16" />
          <circle className={classes.logoColorInner} cx="181.12" cy="441.53" r="15.44" />
          <circle className={classes.logoColor} cx="243.43" cy="451.12" r="7.72" />
          <circle className={classes.logoColorExtra2Light} cx="250.83" cy="476.38" r="5.79" />
          <circle className={classes.logoColorLightest} cx="297.3" cy="352.63" r="5.79" />
          <circle className={classes.logoColorExtra2Light} cx="436.97" cy="334.33" r="5.79" />
          <circle className={classes.logoColorExtra2Light} cx="353.51" cy="296.42" r="5.79" />
          <circle className={classes.logoColorExtra2Light} cx="288.96" cy="476.42" r="5.79" />
          <circle className={classes.logoColorExtra2Light} cx="422.17" cy="375.77" r="5.79" />
          <circle className={classes.logoColorExtra2Light} cx="155.75" cy="418.2" r="5.79" />
          <circle className={classes.logoColorExtraLight} cx="354.08" cy="182.37" r="5.79" />
          <circle className={classes.logoColorLightest} cx="292.9" cy="128.1" r="5.79" />
          <circle className={classes.logoColorInner} cx="292.9" cy="39.3" r="5.79" />
          <circle className={classes.logoColorExtra2Light} cx="308.69" cy="57.06" r="5.79" />
          <circle className={classes.logoColorInner} cx="211.99" cy="21.53" r="5.79" />
          <circle className={classes.logoColorDark} cx="269.22" cy="9.69" r="5.79" />
          <circle className={classes.logoColorDark} cx="251.97" cy="421.14" r="15.44" />
          <circle className={classes.logoColorInner} cx="452.12" cy="132.72" r="7.72" />
          <circle className={classes.logoColorLight} cx="368.88" cy="49.16" r="7.72" />
          <circle className={classes.logoColorLightest} cx="400.05" cy="200.29" r="23.16" />
          <circle className={classes.logoColorInner} cx="436.15" cy="175.58" r="15.44" />
          <circle className={classes.logoColorInner} cx="417.16" cy="116.92" r="7.72" />
          <circle className={classes.logoColorInner} cx="415.53" cy="76.8" r="7.72" />
          <circle className={classes.logoColorInner} cx="338.23" cy="96.2" r="7.72" />
          <circle className={classes.logoColorInner} cx="345.57" cy="146.76" r="23.16" />
          <circle className={classes.logoColorLight} cx="381.98" cy="121.36" r="15.44" />
          <circle className={classes.logoColorInner} cx="397.18" cy="292.37" r="23.16" />
          <circle className={classes.logoColorInner} cx="448.33" cy="305.54" r="15.44" />
          <circle className={classes.logoColorInner} cx="440.42" cy="352.52" r="7.72" />
          <circle className={classes.logoColorLight} cx="381.06" cy="328.99" r="7.72" />
          <circle className={classes.logoColorInner} cx="452.22" cy="275.64" r="7.72" />
          <circle className={classes.logoColorInner} cx="402.84" cy="396.02" r="7.72" />
          <circle className={classes.logoColorInner} cx="137.99" cy="402.41" r="7.72" />
          <circle className={classes.logoColorInner} cx="394.54" cy="150.8" r="7.72" />
          <circle className={classes.logoColorLight} cx="315.6" cy="28.44" r="7.72" />
          <circle className={classes.logoColorInner} cx="344.44" cy="345.12" r="23.16" />
          <circle className={classes.logoColorInner} cx="389.53" cy="364.39" r="15.44" />
          <circle className={classes.logoColorInner} cx="458.03" cy="224.65" r="7.72" />
          <circle className={classes.logoColorInner} cx="483.42" cy="251.01" r="5.79" />
          <circle className={classes.logoColorInner} cx="470.37" cy="179.56" r="5.79" />
          <circle className={classes.logoColorInner} cx="382.7" cy="86.66" r="5.79" />
          <circle className={classes.logoColorInner} cx="266.26" cy="61" r="5.79" />
          <circle className={classes.logoColor} cx="427.04" cy="245.95" r="15.44" />
          <circle className={classes.logoColorLightest} cx="30.38" cy="340.75" r="7.72" />
          <circle className={classes.logoColorLight} cx="11.63" cy="263.78" r="7.72" />
          <circle className={classes.logoColorInner} cx="96.5" cy="293.84" r="23.16" />
          <circle className={classes.logoColorSecond} cx="69.4" cy="328.62" r="15.44" />
          <circle className={classes.logoColor} cx="88.58" cy="406.72" r="7.72" />
          <circle className={classes.logoColorInner} cx="39.37" cy="291.52" r="7.72" />
          <circle className={classes.logoColorInner} cx="213.5" cy="59.49" r="7.72" />
          <circle className={classes.logoColorInner} cx="82.73" cy="135.99" r="7.72" />
          <circle className={classes.logoColor} cx="147.5" cy="344.83" r="23.16" />
          <circle className={classes.logoColorInner} cx="112.27" cy="369.63" r="15.44" />
          <circle className={classes.logoColorInner} cx="46.04" cy="136.49" r="7.72" />
          <circle className={classes.logoColorInner} cx="39.32" cy="208.03" r="7.72" />
          <circle className={classes.logoColor} cx="288.96" cy="7.72" r="7.72" />
          <circle className={classes.logoColorOuter} cx="92.62" cy="204.06" r="23.16" />
          <circle className={classes.logoColorInner} cx="58.17" cy="175.51" r="15.44" />
          <circle className={classes.logoColor} cx="83.23" cy="103.1" r="7.72" />
          <circle className={classes.logoColorInner} cx="93.1" cy="159.35" r="7.72" />
          <circle className={classes.logoColorInner} cx="138.81" cy="187.16" r="7.72" />
          <circle className={classes.logoColorInner} cx="470.52" cy="205.07" r="7.72" />
          <circle className={classes.logoColorInner} cx="24.51" cy="183.18" r="7.72" />
          <circle className={classes.logoColor} cx="146.87" cy="147.54" r="23.16" />
          <circle className={classes.logoColorDark} cx="118.42" cy="111.39" r="15.44" />
          <circle className={classes.logoColorLight} cx="46.54" cy="255.63" r="7.72" />
          <circle className={classes.logoColorInner} cx="5.79" cy="233.19" r="5.79" />
          <circle className={classes.logoColor} cx="434.49" cy="209.99" r="5.79" />
          <circle className={classes.logoColorInner} cx="108.24" cy="82.86" r="5.79" />
          <circle className={classes.logoColorInner} cx="71.81" cy="240.98" r="15.44" />
          <circle className={classes.logoColor} cx="244.61" cy="139.6" r="30.26" />
          <circle className={classes.logoColorInner} cx="136.57" cy="246.34" r="30.26" />
          <circle className={classes.logoColorInner} cx="353.41" cy="246.93" r="30.26" />
          <circle className={classes.logoColorInner} cx="244.61" cy="354.19" r="30.26" />

          <circle className={classes.logoColorFirst} cx="299.72" cy="192.61" r="30.26" />
          <circle className={classes.logoColorFirst} cx="191.48" cy="192.16" r="30.26" />
          <path
            className={classes.logoColorFirst}
            d="M253.37 233.37a30.1 30.1 0 01-8.74-18.82l-33.34 33.34.25.25a30.24 30.24 0 0127.07 27.06l.19.19a30.25 30.25 0 0133.7-33.12l.13-.12a30.19 30.19 0 01-19.26-8.78z"
            transform="translate(-23.08 -25.81)"
          />
          <path
            className={classes.logoColorFirst}
            d="M307.49 256.81a30.06 30.06 0 0118.81-8.75L293 214.73l-.25.25A30.26 30.26 0 01265.66 242l-.2.19a30.25 30.25 0 0133.12 33.7l.13.13a30.12 30.12 0 018.78-19.21z"
            transform="translate(-23.08 -25.81)"
          />

          <circle className={classes.logoColorSecond} cx="191.49" cy="300.84" r="30.26" />
          <circle className={classes.logoColorSecond} cx="300.13" cy="300.8" r="30.26" />
          <path
            className={classes.logoColorSecond}
            d="M330.26 297.09a30.25 30.25 0 01-31.32-31.31l-.63-.64a30.27 30.27 0 01-32.48 37.28l.21.21a30.25 30.25 0 0127.19 27.2l13.06 13.06L341.17 308z"
            transform="translate(-23.08 -25.81)"
          />
          <path
            className={classes.logoColorSecond}
            d="M244 333.61a30.25 30.25 0 0131.31-31.31l.64-.63a30.28 30.28 0 01-37.28-32.49l-.21.22a30.26 30.26 0 01-27.19 27.19l-13.07 13.06 34.88 34.88z"
            transform="translate(-23.08 -25.81)"
          />

          <circle className={classes.logoColorThird} cx="245.83" cy="246.5" r="30.26" />
        </svg>
      </Grid>
    </Grid>
  );
};

export default Logo;
