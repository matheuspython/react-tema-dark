import React, {useContext} from 'react'
import Switch from 'react-switch'
import {ThemeContext} from 'styled-components'

import {Container} from './styles'
const Header: React.FC = ()=>{
  const {colors}= useContext(ThemeContext)
  
  return(
    <Container>
      hello word

      <Switch 
      onChange={()=>{}}
      checked={true}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor=""
      onColor={colors.secundary}
/>
    </Container>
  )
}
export default Header