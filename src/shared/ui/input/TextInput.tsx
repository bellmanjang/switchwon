import { Box, Flex, TextField } from "@radix-ui/themes";
import React, { type ChangeEvent, type FocusEvent } from "react";
import clsx from "clsx";

interface TextInputProps {
  className?: string;
  size?: "1" | "2" | "3" | "4" | "5" | "6" | "7";
  align?: "left" | "right";
  autoFocus?: boolean;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  suffix?: string;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onEnter?: () => void;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      size = "3",
      align = "left",
      autoFocus,
      label,
      placeholder,
      disabled,
      errorMessage,
      value,
      onChange,
      suffix,
      onBlur,
      onEnter,
    },
    ref,
  ) => {
    const inputSize = size === "1" || size === "2" || size === "3" ? size : "3";

    return (
      <Box>
        <Flex direction={"column"} gap={"2"}>
          <Flex justify={"between"} gap={"2"}>
            <h4 className={"font-medium text-text-tertiary"}>{label}</h4>
            <h4 className={"font-medium text-text-tertiary"}>{errorMessage}</h4>
          </Flex>
          <TextField.Root
            ref={ref}
            className={clsx(
              "custom",
              `custom-size-${size}`,
              align === "right" ? "align-right" : "",
              className,
            )}
            size={inputSize}
            autoFocus={autoFocus}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onEnter?.();
              }
            }}
          >
            {suffix && (
              <TextField.Slot
                data-side={"right"}
                style={{
                  padding: "0 0 0 10px",
                }}
              >
                <h4 className={"font-medium text-text-tertiary"}>{suffix}</h4>
              </TextField.Slot>
            )}
          </TextField.Root>
        </Flex>
      </Box>
    );
  },
);

TextInput.displayName = "TextInput";
