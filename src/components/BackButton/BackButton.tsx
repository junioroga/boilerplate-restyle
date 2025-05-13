import React from "react";

import { Text } from "../Text/Text";
import { TouchableOpacityBox } from "../Box/Box";
import { Icon } from "../Icon/Icon";

const ICON_SIZE = 20;

export type BackButtonProps = {
  showBackLabel?: boolean;
};
export function BackButton({ showBackLabel }: BackButtonProps) {
  return (
    <TouchableOpacityBox
      testID="screen-back-button"
      flexDirection="row"
      alignItems="center"
      mr={showBackLabel ? "s10" : undefined}
      onPress={() => null}
    >
      <Icon size={ICON_SIZE} name="arrowLeft" color="primary" />
      {showBackLabel && (
        <Text preset="h6" fow="regular" ml="s8">
          Voltar
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
