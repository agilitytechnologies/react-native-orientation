const React = require('react')
const IsMounted = require('react-is-mounted-hook')
const Orientation = require("./index")

const hasPortraitString = (o) => o.includes("PORTRAIT") || o.includes("UNKNOWN")

module.exports = {
  isOrientationPortrait() {
  const isMounted = IsMounted.useIsMounted()
  const [portrait, setPortrait] = React.useState(hasPortraitString(Orientation.getInitialOrientation()))
  Orientation.addOrientationListener((orientation) => {
    if (isMounted) {
      setPortrait(hasPortraitString(orientation))
    }
  })
  return portrait
}
}
