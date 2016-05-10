window.onload = function () {
  Chart.defaults.global.responsive = true;
  Chart.defaults.global.maintainAspectRatio = false;
  Chart.defaults.global.legend.position = 'bottom';
  Chart.defaults.global.legend.labels.boxWidth = 20;
  Chart.defaults.global.elements.point.radius = 4;

  $.getJSON('js/data/social.json', function (json) {
    var socialCtx = document.getElementById("social").getContext("2d");
    var socialChart = new Chart(socialCtx, {
      type: 'line',
      data: json,
      options: {}
    });
  });

  $.getJSON('js/data/mention.json', function (json) {
    var ctx = document.getElementById("mentions").getContext("2d");
    var chart = new Chart(ctx, {
      type: 'bar',
      data: json,
      options: {}
    });
  });

  $.getJSON('js/data/competitivedata.json', function (json) {
    var ctx = document.getElementById("advert").getContext("2d");
    var chart = new Chart(ctx, {
      type: 'pie',
      data: json,
      options: {}
    });
  });
};
