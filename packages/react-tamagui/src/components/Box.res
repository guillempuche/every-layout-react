// Import utilities
@module("./utils") external toDimensionValue: 'a => string = "toDimensionValue"
@module("./utils") external toNumber: 'a => int = "toNumber"

// Define BoxProps type
type boxProps = {
  "padding": option<Types.cssStringOrNumber>,
  "borderWidth": option<Types.cssStringOrNumber>,
  "invert": option<bool>,
  // Add other StackProps here
}

/**
 * The Box component is a generic container that provides padding, border width,
 * and an optional inverted theme.
 *
 * More on Every Layout [Box](https://every-layout.dev/layouts/box/).
 */
@react.component
let make = (~padding=?, ~borderWidth=?, ~invert=?, children) => {
  let paddingValue = switch padding {
  | Some(value) => toDimensionValue(value)
  | None => "var(--s1)"
  }

  let borderWidthValue = switch borderWidth {
  | Some(value) => toNumber(value)
  | None => "var(--border-thin)"
  }

  let backgroundColor = invert == Some(true) ? "var(--color-light)" : "inherit"

  <Tamagui.stack
    {"padding":paddingValue,
    "borderWidth":borderWidthValue,
    "borderColor":"black",
    "backgroundColor":backgroundColor,}>
    children
  </Tamagui.stack>
}
