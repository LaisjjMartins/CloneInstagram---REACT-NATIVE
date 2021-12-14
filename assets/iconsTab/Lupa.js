import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    viewBox="0 0 64 64"
    {...props}
  >
    <Path
      d="M17.3 10.6C11.1 14.3 8 20.1 8 28c0 12.3 7.7 20 20.1 20 4.5 0 7.3-.6 9.5-1.9l3.1-1.9 5.9 5.9c3.2 3.2 6.6 5.9 7.6 5.9 3.4 0 1.8-3.5-4.1-9.4l-5.9-5.9 1.9-3.1c2.9-4.8 2.6-14.7-.6-20.2C41.8 11.1 36 8 27.9 8c-5.1 0-7.3.5-10.6 2.6zM35.8 15c6.9 4.2 9.4 13.9 5.2 20.8-7.9 13-28 7.4-28-7.8 0-11.6 12.9-19 22.8-13z"
      fill="#000"
      stroke="#000"
      strokeWidth={1}
    />
  </Svg>
)

export default SvgComponent

