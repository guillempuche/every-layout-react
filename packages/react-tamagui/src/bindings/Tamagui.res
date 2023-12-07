// @module("@tamagui/core")
// external // external stack: React.component<{..}> = "Stack"
// stack: React.component<'props> = ({..}) => React.component<'props> = "Stack"
// @module("@tamagui/core") external stack: React.element = "Stack"

// @module("@tamagui/web")
// external stack: ()

// @module("@tamagui/core")
// external text: React.component<{..}> = "Text"

module Stack = {
  @module("@tamagui/core") @react.component external make: {..} => React.element = "Stack"
}
