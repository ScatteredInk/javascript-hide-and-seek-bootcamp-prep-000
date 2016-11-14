function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var elem = document.getElementById('nested');
  return elem.querySelector('.target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list li')
  for (let i = 0, l = ranks.length; i < l; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString();
  }
}

function deepestChild() {
  var grand = document.querySelector('#grand-node');
  var num_children = grand.childElementCount;
  var current = grand.querySelector('div');
  while (num_children != 0) {
    current = current.querySelector('div');
    num_children = current.childElementCount;
  }
  return current;

}
