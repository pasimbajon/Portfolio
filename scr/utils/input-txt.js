const inputTxt = () =>{

  const heroText = {
    heroTitle: "WEB DEVELOPER.",
    heroSubtitle: "Hello, I'm Paul",
    heroDesc: "A motivated <strong>Web developer</strong> with the ability and experience to design elegant solutions. Capable in using web development tools such as <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>PHP</strong>, <strong>Mysql</strong>. Can express ideas clearly and effectively as well as collaborate with others towards a common goal."
  };

  const aboutTexts = {
    aboutTitle: "About",
    aboutDescription: [
      "Hello! I'm Paul <strong>Web developer</strong> living in Cagayan de Oro City.I graduated with Bachelor of Science Computer Science in Ateneo De Cagayan - Xavier University.",
      "I like to sit and use my computer all day. Love to lean new things everyday.",
      "I like to code and drink coffee. Turn on my computer and just code all day."
    ],
    aboutSubtitlte: "Technologies",
  };
  const techList = ["JavaScript(ES6+)", "CSS", "HTML", "ReactJS", "Bootstrap", "Laravel"];

  document.getElementsByClassName("hero__title")[0].innerHTML = heroText.heroTitle;
  document.getElementsByClassName("hero__subtitle")[0].innerHTML = heroText.heroSubtitle;
  document.getElementsByClassName("hero__description")[0].innerHTML = heroText.heroDesc;
  document.getElementsByClassName("about__title")[0].innerHTML = aboutTexts.aboutTitle;
  document.getElementsByClassName("about__subtitle")[0].innerHTML = aboutTexts.aboutSubtitlte;
  let projectListOfTechsOne = document.getElementsByClassName("prod__one");
  let projectListOfTechsTwo = document.getElementsByClassName("prod__two");
  let aboutDescs = document.getElementsByClassName("about__description");
  let aboutListOfTech = document.getElementsByClassName("about__list");
  for(var ctr = 0; ctr < aboutDescs.length; ctr++){
    aboutDescs[ctr].innerHTML = aboutTexts.aboutDescription[ctr];
  }
  for(var ctnr = 0; ctnr < aboutListOfTech.length; ctnr++){
    aboutListOfTech[ctnr].innerHTML = techList[ctnr];
  }
  for(var ctr = 0; ctr < projectListOfTechsOne.length; ctr++){
    projectListOfTechsOne[ctr].innerHTML = techList[ctr];
  }
  for(var ctr = 0; ctr < projectListOfTechsTwo.length; ctr++){
    projectListOfTechsTwo[ctr].innerHTML = techList[ctr];
  }



  
}

export default inputTxt;