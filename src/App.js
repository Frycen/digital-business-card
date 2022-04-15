import './App.css';
import logo from './images/Logo.png';

function App() {
  return (
      <div className="card-border modal-content rounded-6 shadow">
        <div className="modal-dialog">
          <div className="modal-body p5">
            <img className="business-logo" src={logo} />
            <h2 className='name'>Ivan Matias</h2>
            <p className='description'>Frontend Developer</p>
            <div className='row'>
              <div className="email-linkedin col-xs-4">
                <button type="button" className='email-btn btn btn-block btn-primary' data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="ivanmatias1331@gmail.com">
                  <i className="fa fa-envelope"></i> Email
                </button>
                <button href="linkedin.com/in/ivan-matias/8171991ba/" className='linkedin-btn btn btn-block btn-info'><i className=""></i> LinkedIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
