/**
 * The Cluster component is used for grouping items, with control over the margin between them.
 *
 * More on Every Layout [Cluster](https://every-layout.dev/layouts/cluster/).
 */
@react.component
let make = (~children, ~justify=Some(#flexStart), ~align=Some(#flexStart), ~space=?) => {
  <stack flexDirection={#row} flexWrap="wrap" justifyContent=justify alignItems=align space>
    children
  </stack>
}
