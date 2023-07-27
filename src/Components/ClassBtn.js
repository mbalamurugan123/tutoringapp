import './styles/classBtn.css';
import Navbar from './Navbar';
function ClassBtn(){
  return(

    <div>
    <Navbar />
    <div className='btn-class'>
      <div className='class-btn1'>
        <button className='class-btn '>
          Virtual Classroom
        </button>
      </div>
      <div className='class-btn2'>
        <button className='class-btn'>
          Online References
        </button>
      </div>
    </div>
  </div>
    )
}
export default ClassBtn;