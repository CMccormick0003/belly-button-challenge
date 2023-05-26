# belly-button-challenge
Dashboard is live at:  https://cmccormick0003.github.io/belly-button-challenge/

## Background
The task is to build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. (http://robdunnlab.com/projects/belly-button-biodiversity/)

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

Steps Completed:
Use the D3 library to read in samples.json from the URL 
Data Source: https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json.
Add the visuals noted below (i.e., bar chart, bubble chart, gauge, per-patient metadata).

## Dashboard visual:  Horizontal bar chart

Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
Use sample_values as the values for the bar chart.
Use otu_ids as the labels for the bar chart.
Use otu_labels as the hovertext for the chart.

## Dashboard visual: Bubble chart

Create a bubble chart to displas each sample of of per OTU for the patient.
Use otu_ids for the x values.
Use sample_values for the y values.
Use sample_values for the marker size.
Use otu_ids for the marker colors.
Use otu_labels for the text values.

## Dashboard visual: Sample metadata per patient, e.g.,, an individual's demographic information.

Display each key-value pair from the metadata JSON object somewhere on the page.
Update all the plots when a new sample is selected. (This was accomplished with the optionChanged function and a for loop.)

## Dashboard visual: Gauge chart of number of scrubs per week

Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/Links to an external site. to plot the weekly washing frequency of the individual.
Modify the example gauge code to account for values ranging from 0 through 9.
Update the chart whenever a new sample is selected.



## Example of a patient with a high number of belly button washes per week.
## Subject 952 Dashboard:
![image](https://github.com/CMccormick0003/belly-button-challenge/assets/120672518/d2415bf0-ec5e-4557-92c8-e6340c466322)
![image](https://github.com/CMccormick0003/belly-button-challenge/assets/120672518/377f4ea6-e008-416f-b37f-c8e07ce310fd)

## Example of a patient with a low number of belly button washes per week.
## Subject 1601 Dashboard:
![image](https://github.com/CMccormick0003/belly-button-challenge/assets/120672518/d03d6063-b2a5-4ddd-9baa-f7bfa42bfdaf)
![image](https://github.com/CMccormick0003/belly-button-challenge/assets/120672518/250be042-8505-4b3f-92ac-cd785b357567)
