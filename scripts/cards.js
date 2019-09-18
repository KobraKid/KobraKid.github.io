var projects = [
  {
    date: "August - September 2019",
    image: "projects/huvo/huvo.png",
    title: "DJ HuVo Website",
    text: "Designed a business website for DJ HuVo, backed by Wordpress.",
    link: "#"
  },
  {
    date: "December 2018",
    image: "projects/kickstarter/kickstarter.png",
    title: "Kickstarter Project Evaluator",
    text: "Our task was to predict the success of a Kickstarter project based on its initial conditions, such as category and funding goal.",
    link: "#"
  },
  {
    date: "May 2018",
    image: "projects/hackathon/wirelesskeyboard.png",
    title: "Wireless Keyboard BadHack",
    text: "A voice-controlled keyboard combined with a gestured-controlled mouse, developed during NU BadHacks 2018.",
    link: "#"
  },
  {
    date: "April 2018",
    image: "projects/catcal/catcal.png",
    title: "CatCal",
    text: "A group scheduling app for iOS. MVP won 3<sup>rd</sup> place at Northwestern's 2018 .dev showcase.",
    link: "#"
  },
  {
    date: "March 2018",
    image: "projects/journalplusplus/journal.png",
    title: "JournalPlusPlus",
    text: "A digital bullet journal for facilitating productivity and creativity, developed as a class project.",
    link: "#"
  },
  {
    date: "March 2018",
    image: "projects/malloc/malloc.png",
    title: "Malloc Lab",
    text: "Class assignment to program our own implementation of the <code>malloc()</code> function in the C programming language.",
    link: "#"
  }
];

for (var i = 0; i < projects.length; i++) {
  $("#projects-content div div div").first().append("\
    <div class='card text-white bg-dark'>\
      <div class='card-header'>" + projects[i].date + "</div>\
      <img src='" + projects[i].image + "' class='card-img-top'>\
      <div class='card-body'>\
        <h5 class='card-title'>" + projects[i].title + "</h5>\
        <p class='card-text'>" + projects[i].text + "</p>\
        <a href='" + projects[i].link + "' class='btn btn-primary'>More details</a>\
      </div>\
    </div>\
  ");
}
