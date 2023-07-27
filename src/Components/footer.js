import './styles/footer.css'
import whatsapp from './images/whatsapp.svg';
import instagram from './images/instagram.svg';
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import telegram from './images/telegram.svg'
function Footer(){
  return(
    <div className="footer-main">
      <footer>
    <div class="footer">
        <p></p>
        <ul class="socials">
            <li><a><img className='footer-logo' src={whatsapp}></img></a></li>
            <li>
              <a><img className='footer-logo' src={facebook}></img></a></li>
            <li>
              <a><img className='footer-logo' src={instagram}></img></a></li>
            <li>
              <a><img className='footer-logo' src={twitter}></img></a></li>
            <li><a><img className='footer-logo' src={telegram}></img></a></li>
        </ul>
        <div class="footer-copyright">
            <p>copyright &copy;2023 </p>
        </div>
    </div>
</footer>
    </div>
  );
}
export default Footer