import React from "react";
import { TextStyle } from "react-native";

import { createText } from "@shopify/restyle";

import { Theme } from "@theme";

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

type TextVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const $fontSizes: Record<TextVariants, TextStyle> = {
  h1: {
    fontSize: 72,
    lineHeight: 108,
    letterSpacing: 8.64,
  },
  h2: {
    fontSize: 60,
    lineHeight: 90,
    letterSpacing: 7.2,
  },
  h3: {
    fontSize: 48,
    lineHeight: 72,
    letterSpacing: 5.76,
  },
  h4: {
    fontSize: 36,
    lineHeight: 54,
    letterSpacing: 4.32,
  },
  h5: {
    fontSize: 30,
    lineHeight: 45,
    letterSpacing: 3.6,
  },
  h6: {
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: 2.88,
  },
};

export const $fontFamily = {
  black: "UniNeueBlack",
  heavy: "UniNeueHeavy",
  bold: "UniNeueBold",
  regular: "UniNeueRegular",
  book: "UniNeueBook",
  light: "UniNeueLight",
  thin: "UniNeueThin",
};

export interface TextProps extends SRTextProps {
  preset?: TextVariants;
  fow?: keyof typeof $fontFamily;
}

export function Text({
  children,
  preset = "h3",
  fow = "regular",
  style,
  ...sRTextProps
}: TextProps) {
  const fontFamily = $fontFamily[fow];
  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], { fontFamily }, style]}
      {...sRTextProps}
    >
      {children}
    </SRText>
  );
}
