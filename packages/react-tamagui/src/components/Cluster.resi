@react.component
let make: (
  ~children: React.element,
  ~justify: option<[#flexStart | #flexEnd | #center | #spaceBetween | #spaceAround | #spaceEvenly]>,
  ~align: option<[#flexStart | #flexEnd | #center | #stretch | #baseline]>,
  ~space: option<Types.cssStringOrNumber>,
) => React.element
