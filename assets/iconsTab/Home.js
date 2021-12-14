import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 0 225 225"
    {...props}
  >
    <Path d="m86 87.6-25 24.8.2 24.5.3 24.6h39l.5-15c.6-16.2 1.4-19 6.6-21.3 5.1-2.4 11.1-.8 14.1 3.7 1.4 2.1 1.9 5.5 2.3 17.6l.5 15h39l.3-24.7.2-24.6-25.6-24.4c-14.1-13.3-26-24.5-26.5-24.6C111.4 63 99.7 74 86 87.6zm55.4 8.4 18.5 17.5v22.3l.1 22.2-16.2-.2-16.3-.3-.5-14.2c-.6-15.8-1.4-18.2-8.1-21.5-6.3-3.3-14-1.4-18.3 4.5-1.8 2.5-2.2 4.7-2.6 17l-.5 14.2-16.2.3-16.3.2v-44.2l23.2-22.7 23.3-22.8 5.7 5.1c3.1 2.8 14 13 24.2 22.6z" 
     fill="#000"
      stroke="#000"
      strokeWidth={5}
      />
  </Svg>
)

export default SvgComponent
