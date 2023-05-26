function buildCharts(sample){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) =>{
        
        let samples = data.samples;
        let resultArray = samples.filter((sampleDictionary) => sampleDictionary.id == sample);
        let result = resultArray[0];

        // Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual

        let otuIDs = result.otu_ids;
        let bacteria = result.otu_labels;
        let sampleValues = result.sample_values;

        // Code bar chart tick marks
        let xticks = sampleValues.slice(0,11).reverse();
        let yticks = otuIDs.slice(0,11).map(entry => `OTU ${entry}`).reverse();
        let hoverlabel = bacteria.slice(0,11).reverse();

        let barchart = {
        x: xticks,
        y: yticks,
        text: hoverlabel,
        type: "bar",
        orientation: "h"
        };

        let barData = [barchart];
        
        let bartitle = {
        title: `Top 10 OTUs per Individual`
        margin: {t: 20, l: 150}

        };

        // Use Plotly to plot the data with the layout for the bar chart
        Plotly.newPlot("bar", barData, bartitle);

// ---------------------------------------------------------------------------------------

        // Create a bubble chart that displays each sample
        let bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: {t:0},
            hovermode: "closest",
            xaxis: {title: "Operational taxonomic unit (OTU) IDs"},
            margin: {t:20}
        };

        // Create the trace for the bubble chart
        let bubbleData = [
            {  x: otuIDs,
                y: sampleValues,
                text: bacteria,
                mode: "markers",
                marker: {
                    size: sampleValues,
                    color: otuIDs,
                    colorscale: "BlueRed"
                }
            }
        ]
    });
}

// Display the sample metadata

function buildMetadata(sample){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) =>{
        let metadata = data.metadata;
        let resultArray = metadata.filter((sampleDictionary) => sampleDictionary.id == sample);
        let result = resultArray[0];
        let PANEL = d3.select("#sample-metadata");
        PANEL.html("");

        for (key in result) {
             PANEL.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
        }
