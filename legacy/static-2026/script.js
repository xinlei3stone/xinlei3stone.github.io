(function () {
  "use strict";

  // Category filters
  var filterButtons = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll("#work-grid .card");
  var emptyNote = document.getElementById("filter-empty");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.dataset.filter;
      var visible = 0;

      filterButtons.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", active ? "true" : "false");
      });

      cards.forEach(function (card) {
        var show = filter === "all" || card.dataset.category === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });

      emptyNote.hidden = visible > 0;
    });
  });
})();
