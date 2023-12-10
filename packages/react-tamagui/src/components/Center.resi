@react.component
let make: (
  ~children: React.element,
  ~maxWidth: option<Types.cssStringOrNumber>,
  ~centerText: option<bool>,
  ~gutters: option<Types.cssStringOrNumber>,
  ~intrinsic: option<bool>,
) => React.element
