// Themes begin
am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Add data
chart.data = [{
  "Població": "Cornella",
  "Visitants": 1500
}, {
  "Població": "L'Hospitalet",
  "Visitants": 1250
}, {
  "Població": "Sant Boi",
  "Visitants": 1175
}, {
  "Població": "El Prat de Llobregat",
  "Visitants": 941
}, {
  "Població": "Sabadell",
  "Visitants": 785
}, {
  "Població": "Terrassa",
  "Visitants": 780
}, {
  "Població": "Sant Vicenç dels Horts",
  "Visitants": 270
}];

// Create axes

var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Població";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 30;

categoryAxis.renderer.labels.template.adapter.add("dy", function(dy, target) {
  if (target.dataItem && target.dataItem.index & 2 == 2) {
    return dy + 25;
  }
  return dy;
});

var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "Visitants";
series.dataFields.categoryX = "Població";
series.name = "Visits";
series.columns.template.tooltipText = "[bold]{valueY}[/]";
series.columns.template.fillOpacity = .4;

var columnTemplate = series.columns.template;
columnTemplate.strokeWidth = 2;
columnTemplate.strokeOpacity = 1;
