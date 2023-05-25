function buildCharts(sample){
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) =>{
        
        let samples = data.samples;
        let resultArray = samples.filter((sampleDictionary) => sampleDictionary.id == sample);
        let result = resultArray[0];


        let otuIDs =result.otu_ids;
        let otuLabels = result.otu_labels;
        let sampleValues = result.sample_values;