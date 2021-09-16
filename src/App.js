import './App.css';
import './assets/css/animate.css';
import './assets/css/bootstrap-4.5.0.min.css';
import './assets/css/lineicons.css';
import './assets/css/style.css';
import './assets/css/style.css.map';
import shape1 from './assets/img/shape-1.svg';
import shape2 from './assets/img/shape-2.svg';
import shape3 from './assets/img/shape-3.svg';
import shape4 from './assets/img/shape-4.svg';
import shape5 from './assets/img/shape-5.svg';
import shape6 from './assets/img/shape-6.svg';
import img1 from './assets/img/img-1.svg';
import Form from './Components/Form';
import Counter from './Components/Counter';

function App() {
  return (
    <main class="main-14">
      <div class="main-wrapper demo-14">
        <img src={shape1} alt="" class="shape shape-1" />
        <img src={shape2} alt="" class="shape shape-2" />
        <img src={shape3} alt="" class="shape shape-3" />
        <img src={shape4} alt="" class="shape shape-4" />
        <img src={shape5} alt="" class="shape shape-5" />
        <img src={shape6} alt="" class="shape shape-6" />
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-5 col-lg-6 col-md-6">
              <div class="img-wrapper wow fadeInLeft" data-wow-delay=".2s">
                <img src={img1} alt="" />
              </div>
            </div>
            <div class="col-xl-7 col-lg-6 col-md-6 odd-col">
              <div class="content-wrapper">
                <h1 class="wow fadeInDown" data-wow-delay=".2s">
                  Coming Soon
                </h1>

                <Counter />
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
