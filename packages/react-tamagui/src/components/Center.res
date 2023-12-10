@module("./utils") external toDimensionValue: 'a => string = "toDimensionValue"

// type centerProps = {
//   "maxWidth": option<Types.cssStringOrNumber>,
//   "centerText": option<bool>,
//   "gutters": option<Types.cssStringOrNumber>,
//   "intrinsic": option<bool>,
// }

/**
 * The Center component is used for horizontally centering a block-level element,
 * with a max-width value representing the typographic measure.
 *
 * More on Every Layout [Center](https://every-layout.dev/layouts/center/).
 */
@react.component
let make = (~children: React.element, ~maxWidth=?, ~centerText=?, ~gutters=?, ~intrinsic=?) => {
  // let maxWidthValue = switch maxWidth {
  // | Some(value) => toDimensionValue(value)
  // | None => "none"
  // }

  // let paddingHorizontalValue = switch gutters {
  // | Some(value) => toDimensionValue(value)
  // | None => "none"
  // }

  // let alignItemsValue = intrinsic == Some(true) ? "center" : "undefined"
  // let flexDirectionValue = intrinsic == Some(true) ? "column" : "undefined"

  <Stack
    maxWidth=maxWidthValue
    marginHorizontal="auto"
    paddingHorizontal={gutters}
    alignItems={intrinsic ? Some(#center) : None}
    flexDirection={intrinsic ? Some(#column) : None}>
    {centerText ? <Tamagui.text textAlign={#center}> children </Tamagui.text> : children}
  </Stack>
}
