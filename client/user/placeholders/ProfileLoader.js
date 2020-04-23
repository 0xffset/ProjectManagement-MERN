import React from "react"
import ContentLoader from "react-content-loader" 
import {Container} from 'semantic-ui-react'
const ProfileLoader = () => (
    <Container style={{marginTop: '30px', align: 'center'}}
    
    >
  <ContentLoader 
    speed={2}
    width={400}
    height={475}
    viewBox="0 0 400 475"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    
    <rect x="6" y="368" rx="2" ry="2" width="140" height="10" /> 
    <rect x="6" y="341" rx="2" ry="2" width="204" height="15" /> 
    <rect x="6" y="22" rx="2" ry="2" width="275" height="275" /> 
    <rect x="6" y="392" rx="0" ry="0" width="144" height="13" /> 
    <rect x="6" y="433" rx="0" ry="0" width="152" height="12" />
  </ContentLoader>
  </Container>
)

export default ProfileLoader