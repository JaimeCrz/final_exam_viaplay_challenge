import React from 'react'
import { Segment } from 'semantic-ui-react'

const Header = () => {
  return (
    <Segment raised inverted>
    <img className='viaplay-logo' src='https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg' />
    </Segment>
  )
}

export default Header