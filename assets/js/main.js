$(function(){

  // 스크롤 내리면 배경처리
  let lastScrT = 0;

  $(window).scroll(function(){
    curr = $(this).scrollTop();
  
    if(curr >= 50) {
      if(curr > lastScrT) {
        $('.header').addClass('active');
      } else {
        $('.header').removeClass('active');
      }
    }
    lastScrT = curr;
  })
  
  // 마우스 이동에따라 이미지 움직임처리
  $('.sc-visual').mousemove(function(e){
    width = $(this).outerWidth()/2;
    // // console.log(width)
    x = (e.clientX - width)/7;
    // console.log(x)
    gsap.to('.image-area',{
      x:x
    })
  })

  // 스크롤시 이미지 움직임 처리
  gsap.to('.sc-visual .image-area', {
    scrollTrigger: {
      trigger:".sc-visual",
      start: "top 80%",
      end:"bottom 60%",
      scrub:1,
      // markers: true,
    },
    yPercent:20
  })

  gsap.from('.sc-visual .image-wrap img', {
    stagger: 0.1,
    yPercent: 20,
  })

  // sc-about 애니메이션
  const aboutAni = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-about",
      start: "top top",
      end: "+=2500%",
      // markers: true,
      scrub: 5,
      pin: true,
    },
  })
  aboutAni
  .addLabel('a')
  .to('.sc-about .txt-box1 .txt2.normal span',{yPercent:-100},'a')
  .to('.sc-about .txt-box1 .txt2.revers span',{yPercent:100},'a')
  .to('.sc-about .txt-box1 .txt3.normal span',{yPercent:-100},'a')
  .to('.sc-about .txt-box1 .txt3.revers span',{yPercent:100},'a')
  .to('.sc-about .txt-box1 p',{opacity:1, stagger:0.3}) 
  .to('.sc-about .txt-box1 p',{opacity:0})  
  .to('.sc-about .txt-box2',{'visibility': 'visible', opacity:1})
  .to('.sc-about .txt-box2 span',{opacity:1,yPercent:-100,stagger:0.2})
  .to('.sc-about .txt-box2 span',{opacity:0.1})
  .addLabel('b')
  .to('.sc-about .watch-area',{yPercent: -100, opacity:1})
  .to('.sc-about .watch-area .watch-box',{yPercent: -100, scale: 1, opacity:1,duration:2}, 'b+=1')
  .to('.sc-about .watch-area .screen-item',{opacity:1,stagger:7}, 'b+=2')
  .to('.sc-about .watch-area .title1 strong span',{yPercent: -100,opacity:1,stagger: 2, duration:2}, 'b+=3')
  .to('.sc-about .watch-area .title1 strong span',{opacity:0}, 'b+=9')
  .to('.sc-about .watch-area .title2 strong span',{yPercent: -100,opacity:1,stagger: 2, duration:2}, 'b+=10')
  .to('.sc-about .watch-area .title2 strong span',{opacity:0}, 'b+=16')
  .to('.sc-about .watch-area .title3 strong span',{yPercent: -100,opacity:1,stagger: 2, duration:2}, 'b+=17')
  .to('.sc-about .watch-area .title3 strong span',{opacity:0}, 'b+=23')
  .to('.sc-about .watch-area .watch-box',{yPercent: -100, opacity:0}, 'b+=24')


  // sc-quik-look 애니메이션
  $('.sc-quik-look .group-look .watch-img img').each(function(i, el){
    gsap.from(el,{
      scrollTrigger:{
        trigger: el,
        start: "top 80%",
        end: "bottom bottom",
        // markers: true,
        // scrub: 1,
      },
      duration:5,
      scale:1.1,
    })
  })
  // sc-quik-look 타이틀 애니메이션
  $('.sc-quik-look .feature-area .title').each(function(i, el){
    gsap.to(el,{
      scrollTrigger:{
        trigger: el,
        start: "top 80%",
        end: "top top",
        // markers: true,
        // scrub: 1,
      },
      opacity: 1,
      yPercent: -100,
    })
  })
  // sc-quik-look 아이템 애니메이션
  $('.sc-quik-look .feature-list').each(function(i, el){
    child = $(this).find('.feature-item');
    gsap.from(child,0.7,{
      scrollTrigger:{
        trigger: el,
        start: "top 80%",
        end: "bottom 60%",
        // markers: true,
        // scrub: 1,
      },
      stagger: 0.2,
      opacity: 0,
      yPercent: 20,
    })
  })

  // sc-story 애니메이션
  const storyAni = gsap.timeline({
    scrollTrigger:{
      trigger: ".sc-story",
      start: "top top",
      end: "+=1000%",
      // markers: true,
      pin: true,
      scrub:1,
    },
  })
  storyAni
  .addLabel('a')
  .to('.sc-story .txt1 .sub-txt span', {opacity:1, yPercent:-100}, 'a')
  .to('.sc-story .txt1 .main-txt span', {opacity:1, yPercent:-100}, 'a+=1')
  .to('.sc-story .txt1', {opacity:0}, 'a+=1.5')
  .to('.sc-story .bg-area .img1', {opacity: 0}, 'a+=2')
  .to('.sc-story .bg-area .img2', {opacity: 1}, 'a+=2.5')
  .to('.sc-story .txt2 .sub-txt span', {opacity:1, yPercent:-100}, 'a+=3')
  .to('.sc-story .txt2 .main-txt span', {opacity:1, yPercent:-100}, 'a+=4')
  .to('.sc-story .txt2', {opacity:0}, 'a+=4.5')
  .to('.sc-story .bg-area .img2', {opacity: 0}, 'a+=5')
  .to('.sc-story .bg-area .img3', {opacity: 1}, 'a+=5.5')
  .to('.sc-story .txt3 .sub-txt span', {opacity:1, yPercent:-100}, 'a+=6')
  .to('.sc-story .txt3 .main-txt span', {opacity:1, yPercent:-100}, 'a+=6.5')

})