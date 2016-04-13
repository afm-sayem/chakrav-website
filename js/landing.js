window.onload = function () {
  Chart.defaults.global.responsive = true;
  Chart.defaults.global.maintainAspectRatio = false;
  Chart.defaults.global.legend.position = 'bottom';
  Chart.defaults.global.legend.labels.boxWidth = 20;
  Chart.defaults.global.elements.point.radius = 4;
  var data = {
    labels: ["October", "November", "December", "January", "February", "March"],
    datasets: [
    {
      label: "Banglalink",
      backgroundColor: "rgba(220,220,220,0.2)",
      borderColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [337485, 106157, 208807, 41898, 261013, 340885]
    },
    {
      label: "Grameenphone",
      backgroundColor: "rgba(151,187,205,0.2)",
      borderColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [339865, 461967, 165006, 158740, 240829, 170635]
    },
    {
      label: "Airtel",
      backgroundColor: "rgba(101,87,205,0.2)",
      borderColor: "rgba(101,87,205,1)",
      pointColor: "rgba(101,87,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(101,87,205,1)",
      data: [216905, 80872, 99630, 108532, 89716, 120457]
    },
    {
      label: "Robi",
      backgroundColor: "rgba(51,187,205,0.2)",
      borderColor: "rgba(51,187,205,1)",
      pointColor: "rgba(51,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(51,187,205,1)",
      data: [306992, 173142, 168191, 240180, 144091, 98510]
    }
    ]
  };
  var ctx = document.getElementById("chart").getContext("2d");

  var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {}
  });

};
