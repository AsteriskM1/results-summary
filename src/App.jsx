import './index.css'
import { memory, reaction, verbal, visual } from './assets/images/index';

const App = () => {
  return (
    <section className="flex flex-col justify-center items-center mobile:pt-32">
      <div className="bg-shadow mobile:w-[630px] mobile:h-[450px] w-[375px] h-[850px] flex mobile:flex-row flex-col">
        <div className="card1-bg mobile:rounded-[25px] rounded-t-none rounded-b-[25px] mobile:w-[315px] mobile:h-[450px] w-[375px] h-[370px]">
          <h2 className="font-body font-medium text-2xl text-primaryText opacity-70 mt-6">Your Result</h2>
          <div className="rounded-full mobile:w-[169px] mobile:h-[169px] w-[120px] h-[120px] text-center mx-auto flex justify-center items-center flex-col mt-4 circle">
            <h1 className="text-[40px] font-body font-semibold text-primaryText">76</h1>
            <p className="text-lg text-primaryText font-body font-normal opacity-60">of 100</p>
          </div>
          <h1 className="font-bodyfont-medium text-4xl text-primaryText mt-6">Great</h1>
          <p className="font-bodyfont-light text-base text-primaryText opacity-80 max-w-[226px] mx-auto mt-4">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        <div className="ml-10 mt-6">
          <h2 className="text-2xl font-body font-semibold text-black text-left">Summary</h2>
          <div className="flex mobile:w-[226px] w-[313px] h-[45px] rounded-[10px] box-1 flex-wrap flex-row justify-around items-center mt-6">
            <div className="flex flex-row mobile:pr-7 pr-16"> 
              <img src={reaction} alt="reaction" className="fill-card1 pr-2" />
              <h3 className="text-card1 font-body font-semibold text-sm">Reaction</h3>
            </div>
            <p className="font-body font-semibold">80 <span className="opacity-60 font-normal">/ 100</span></p>
          </div>
          <div className="flex mobile:w-[226px] w-[313px] h-[45px] rounded-[10px] box-2 flex-wrap flex-row justify-around items-center mt-5">
            <div className="flex flex-row mobile:pr-7 pr-16"> 
              <img src={memory} alt="memory" className="fill-card2 pr-2" />
              <h3 className="text-card2 font-body font-semibold text-sm">Memory</h3>
            </div>
            <p className="font-body font-semibold">92 <span className="opacity-60 font-normal">/ 100</span></p>
          </div>
          <div className="flex mobile:w-[226px] w-[313px] h-[45px] rounded-[10px] box-3 flex-wrap flex-row justify-around items-center mt-5">
            <div className="flex flex-row mobile:pr-7 pr-16"> 
              <img src={verbal} alt="verbal" className="fill-card3 pr-2" />
              <h3 className="text-card3 font-body font-semibold text-sm">Verbal</h3>
            </div>
            <p className="font-body font-semibold">61 <span className="opacity-60 font-normal">/ 100</span></p>
          </div>
          <div className="flex mobile:w-[226px] w-[313px] h-[45px] rounded-[10px] box-4 flex-wrap flex-row justify-around items-center mt-5">
            <div className="flex flex-row mobile:pr-7 pr-16"> 
              <img src={visual} alt="visual" className="fill-card4 pr-2" />
              <h3 className="text-card4 font-body font-semibold text-sm">Visual</h3>
            </div>
            <p className="font-body font-semibold">72 <span className="opacity-60 font-normal">/ 100</span></p>
          </div>
          <button className="mt-6 mobile:w-[226px] w-[313px] h-[50px] text-center rounded-xl btn-bg font-medium text-primaryText text-lg">Continue</button>
        </div>
      </div>
      <div className="flex mt-8">
        <p className="font-body">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="font-semibold hover:underline underline-offset-1">Frontend Mentor</a>. Coded by <a href="https://github.com/AsteriskM1" target="_blank" className="font-semibold hover:underline underline-offset-1">Arthur</a>.</p>
      </div>
    </section>
  );
};

export default App;
