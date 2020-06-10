$(document).ready(function () {
  $(".preview-slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    nextArrow: ".preview-next",
    prevArrow: "none",
    swipeToSlide: true,

    dotsClass: "preview-dots",
  });
});
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function trans(answers = ["trans1", "trans2", "trans3"]) {
  this.answers = answers;
}
function test(
  right = getRandomInt(3),
  answers = new trans().answers,
  word = "Word"
) {
  (this.right = right), (this.answers = answers), (this.word = word);
}
function testgroup(title = "group", tests = [new test()]) {
  (this.title = title), (this.tests = tests);
}
function testsection(
  title = "section",
  theme = "red",
  groups = [new testgroup()]
) {
  (this.title = title), (this.groups = groups), (this.theme = theme);
}
function testdata(title = "data", sections = [new testsection()]) {
  (this.title = title), (this.sections = sections);
}
let sections = ["red", "green", "blue"];
datainput = `
{"title":"data","sections":[{"title":"xxxxxxxxxx xxxxx ","groups":[{"title":"groupgroup groupgroup group group","tests":[{"right":0,"answers":["xxxxxxxxxxxxxxxx","xxxxxxxxxxx xxxxxxxxxx","xxxxx"],"word":"XXXXXXX"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]}],"theme":"red"},{"title":"глаг","groups":[{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"}]}],"theme":"green"},{"title":"прил.","groups":[{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"}]},{"title":"group","tests":[{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":2,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":0,"answers":["trans1","trans2","trans3"],"word":"Word"},{"right":1,"answers":["trans1","trans2","trans3"],"word":"Word"}]}],"theme":"blue"}]}
`;

data = JSON.parse(datainput);

let data1 = new testdata("data", [
  new testsection("xxxxxxxxxx xxxxx ", "red", [
    new testgroup("groupgroup groupgroup group group", [
      new test(
        0,
        ["xxxxxxxxxxxxxxxx", "xxxxxxxxxxx xxxxxxxxxx", "xxxxx"],
        "XXXXXXX"
      ),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
  ]),
  new testsection("глаг", "green", [
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
  ]),
  new testsection("прил.", "blue", [
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
    new testgroup("group", [
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
      new test(),
    ]),
  ]),
]);

data2 = JSON.stringify(data);
for (let i = 0; i < data1.sections.length; i++) {
  data.sections[i] = Object.assign(data.sections[i], data1.sections[i]);
}

let previewEndList = document.querySelectorAll(".preview-end");
let previewNextList = document.querySelectorAll(".preview-next");
let preview = document.querySelector(".preview");

let header = document.querySelector(".header");
//ссылки страниц
let home_page = document.querySelector(".main");
let test_page = document.querySelector(".test");
let prof_page = document.querySelector(".profile");
//ссылки на секций и из блоки на главной
let sectionTitles = document.querySelector(".main-section-titles");
let sectionList = document.querySelectorAll(".main-section");

let testSectionList = document.querySelectorAll(".test-section");

//создания контента и массивов ссылок
let sectionTitleList = [];
let groupList = [];

let sectionActive = 0;
let groupActive = 0;
let testActive = 0;

let testGroupList = [];
let testList = [];
let wrongList = [];
let correctList = [];
let transList = [];
let dotList = [];

for (let i = 0; i < data.sections.length; i++) {
  var sectiontitle = document.createElement("li");
  sectiontitle.classList.add("main-section-title");
  sectiontitle.classList.add(sections[i]);

  var p = document.createElement("p");
  sectiontitle.appendChild(p);
  p.innerHTML = data.sections[i].title;
  sectionTitles.appendChild(sectiontitle);
  sectionTitleList.push(sectiontitle);
  groupList.push([]);

  testGroupList.push([]);
  testList.push([]);
  wrongList.push([]);
  correctList.push([]);
  transList.push([]);
  dotList.push([]);

  for (let j = 0; j < data.sections[i].groups.length; j++) {
    var grouptitle = document.createElement("li");
    grouptitle.classList.add("main-group");
    grouptitle.innerHTML = data.sections[i].groups[j].title;
    sectionList[i].appendChild(grouptitle);
    groupList[i].push(grouptitle);

    var testGroup = document.createElement("li");
    testGroup.classList.add("test-group");
    testGroup.classList.add("hidden");
    testGroupList[i][j] = testGroup;

    var testDots = document.createElement("ul");
    testDots.classList.add("test-dots");

    testList[i].push([]);
    wrongList[i].push([]);
    correctList[i].push([]);
    dotList[i].push([]);
    transList[i].push([]);

    for (let l = 0; l < data.sections[i].groups[j].tests.length; l++) {
      var testContent = document.createElement("div");
      testContent.classList.add("test-content");
      testContent.classList.add("hidden");
      testList[i][j][l] = testContent;
      var testStatus = document.createElement("div");
      testStatus.classList.add("test-status");

      var testWrong = document.createElement("div");
      testWrong.classList.add("test-wrong");
      testWrong.classList.add("hidden-fast");
      testWrong.innerHTML = "Неверно";
      wrongList[i][j][l] = testWrong;

      var testCorrect = document.createElement("div");
      testCorrect.classList.add("test-correct");
      testCorrect.classList.add("hidden-fast");
      testCorrect.innerHTML = "Верно";
      correctList[i][j][l] = testCorrect;

      testStatus.appendChild(testWrong);
      testStatus.appendChild(testCorrect);
      testContent.appendChild(testStatus);

      var testWord = document.createElement("div");
      testWord.classList.add("test-word");
      testWord.innerHTML = data.sections[i].groups[j].tests[l].word;
      testContent.appendChild(testWord);

      var testTranList = document.createElement("ul");
      testTranList.classList.add("test-tran-list");

      transList[i][j].push([]);

      for (
        let y = 0;
        y < data.sections[i].groups[j].tests[l].answers.length;
        y++
      ) {
        var testTran = document.createElement("ul");
        testTran.classList.add("test-tran");
        testTran.innerHTML = data.sections[i].groups[j].tests[l].answers[y];
        testTranList.appendChild(testTran);
        transList[i][j][l][y] = testTran;
      }

      testContent.appendChild(testTranList);
      var testDot = document.createElement("li");
      testDot.classList.add("test-dot");
      testDot.innerHTML = `<button></button>`;
      testGroup.appendChild(testContent);
      testDots.appendChild(testDot);
      dotList[i][j][l] = testDot;
    }
    testGroup.appendChild(testDots);

    testSectionList[i].appendChild(testGroup);
  }
}

//появление исчезновение элементов
function view(obj) {
  obj.classList.add("show");
  obj.classList.remove("hidden");
  if (obj.classList.contains("hidden-fast")) {
    obj.classList.remove("hidden-fast");
  }
}
function viewFast(obj) {
  obj.classList.add("show-fast");
  obj.classList.remove("hidden-fast");
}
function unview(obj) {
  obj.classList.add("hidden");
  obj.classList.remove("show");
}
function unviewFast(obj) {
  obj.classList.add("hidden-fast");

  obj.classList.remove("show-fast");
}

function prevmain() {
  view(footer);
  view(header);
  view(home_page);
  unview(preview);
}
function closesections() {
  for (let i = 0; i < sectionList.length; i++) {
    unview(sectionList[i]);
  }
}
function closetestspages(sectionActive, groupActive) {
  for (let i = 1; i < testList[sectionActive][groupActive].length; i++) {
    unview(testList[sectionActive][groupActive][i]);
    dotList[sectionActive][groupActive][i].classList.remove("dot-active");
  }
}

//футер ккнопки
let footer = document.querySelector(".footer");

let home_btn = document.getElementById("home");
let test_btn = document.getElementById("test");
let prof_btn = document.getElementById("profile");
let open_btn = home_btn;
let open_page = home_page;

let profile_btn = document.querySelector(".profile-btn");
let profile_input = document.querySelector(".profile-input");
let name = document.querySelector(".name");

function openTestpage() {
  unviewFast(open_btn.children[0]);
  viewFast(open_btn.children[1]);
  open_btn = test_btn;
  viewFast(open_btn.children[0]);
  unviewFast(open_btn.children[1]);
  unview(open_page);
  open_page = test_page;
  view(open_page);
  view(header);

  view(testSectionList[sectionActive]);
  view(testGroupList[sectionActive][groupActive]);
  view(testList[sectionActive][groupActive][testActive]);
  dotList[sectionActive][groupActive][0].classList.add("dot-active");
}
function closeTestpage() {
  unview(testSectionList[sectionActive]);
  unview(testGroupList[sectionActive][groupActive]);
  unview(testList[sectionActive][groupActive][testActive]);
  dotList[sectionActive][groupActive][testActive].classList.remove(
    "dot-active"
  );
  testActive = 0;
  unview(wrongList[sectionActive][groupActive][testActive]);
  unview(correctList[sectionActive][groupActive][testActive]);
}
function openHomepage() {
  unviewFast(open_btn.children[0]);
  viewFast(open_btn.children[1]);
  open_btn = home_btn;
  viewFast(open_btn.children[0]);
  unviewFast(open_btn.children[1]);
  unview(open_page);
  open_page = home_page;
  view(open_page);
  view(sectionTitles);
  view(header);
  closesections();
}
function openPreviewpage() {
  unviewFast(open_btn.children[0]);
  viewFast(open_btn.children[1]);
  open_btn = prof_btn;
  viewFast(open_btn.children[0]);
  unviewFast(open_btn.children[1]);
  unview(open_page);

  // closeTestpage();
  open_page = prof_page;
  view(open_page);
  unview(header);
}

unview(home_page);
test_btn.addEventListener("click", () => {
  openTestpage();
});

home_btn.addEventListener("click", () => {
  openHomepage();

  closeTestpage();
});
prof_btn.addEventListener("click", () => {
  openPreviewpage();
  closeTestpage();
});

previewNextList[previewEndList.length - 1].addEventListener("click", () => {
  prevmain();
});
for (let previewend of previewEndList) {
  previewend.addEventListener("click", () => {
    prevmain();
  });
}

// function openPage(page){

// }
// function closePage(page){
//   if (page==test_page){
//     unview(testSectionList[sectionActive]);
//     unview(page);
//   }
//   else if(page==home_page){
//     unview(page);
//     view(sectionTitles);
//   view(header);

//   }

//профиль
profile_input.addEventListener("click", () => {
  profile_input.classList.add("profile-input--active");
});
profile_btn.addEventListener("click", () => {
  name.innerHTML = profile_input.value;
  profile_input.classList.remove("profile-input--active");
});

//Выбор группы
for (let i = 0; i < sectionTitleList.length; i++) {
  sectionTitleList[i].addEventListener("click", () => {
    unview(testSectionList[sectionActive]);
    sectionActive = i;
    unview(sectionTitles);

    view(sectionList[i]);
  });
  for (let j = 0; j < groupList[i].length; j++) {
    groupList[i][j].addEventListener("click", () => {
      //unview(testGroupList[sectionActive][groupActive]);
      closetestspages(sectionActive, groupActive);
      groupActive = j;
      testActive = 0;
      openTestpage();
    });
    for (let l = 0; l < testList[i][j].length; l++) {
      for (let y = 0; y < transList[i][j][l].length; y++) {
        transList[i][j][l][y].addEventListener("click", () => {
          if (y == data.sections[i].groups[j].tests[l].right) {
            unviewFast(wrongList[sectionActive][groupActive][testActive]);
            view(correctList[sectionActive][groupActive][testActive]);

            setTimeout(function () {
              if (
                testActive <
                testList[sectionActive][groupActive].length - 1
              ) {
                unview(testList[sectionActive][groupActive][testActive]);
                dotList[sectionActive][groupActive][
                  testActive
                ].classList.remove("dot-active");
                unview(correctList[sectionActive][groupActive][testActive]);
                testActive++;
                dotList[sectionActive][groupActive][testActive].classList.add(
                  "dot-active"
                );
                view(testList[sectionActive][groupActive][testActive]);
              } else {
                openHomepage();
                closeTestpage();
              }
            }, 500);
          } else {
            view(wrongList[sectionActive][groupActive][testActive]);
          }
        });
      }
    }
  }
}
