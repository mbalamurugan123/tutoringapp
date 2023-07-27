import './styles/About.css'
import Navbar from './Navbar';

function About(){
 
  return(
    <div>
      <Navbar/>
      <div class="loader pulse">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </div>
  )
}
export default About;