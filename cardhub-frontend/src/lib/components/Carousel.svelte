<script>
    import { register } from 'swiper/element/bundle';
    import Swiper, { Pagination, EffectCards } from 'swiper';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import Card from "./Card.svelte"; 
  
    register();
  
    const onProgress = (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress)
    };
    const onSlideChange = (e) => {
      console.log('slide changed')
    };

    let swiperEl;

    function handleNext() {
        swiperEl.swiper.slideNext();
    };

    function handlePrev() {
        swiperEl.swiper.slidePrev();
    };
  </script>

<swiper-container
    bind:this={swiperEl}
    slides-per-view={2}
    space-between={9}
    centered-slides={true}
    pagination={{
      hideOnClick: true,
    }} image.png
    on:progress={onProgress}
    on:slidechange={onSlideChange}
    modules={[EffectCards, Pagination]}
  >
  <div>
      <swiper-slide> <Card/> </swiper-slide>
      <swiper-slide> <Card/> </swiper-slide>
      <swiper-slide> <Card/> </swiper-slide>
  </div>
  

</swiper-container>

<button on:click={handleNext}>Next</button>
<button on:click={handlePrev}>Prev</button>