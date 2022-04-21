This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



## Components Created

To view the custom components, please look under 'components' folder. There you will find an additional folder named 'charts' which contains the components that render the chart and tooltips.
<ul>
    <li>Header - consists of the header and brief description of the project</li>
    <li>InputFields - consists of the two numerical input fields, initial and monthly investment</li>
    <li>CourseLineChart - fetches the data from API and converts data into suitable format to be rendered by <ComposedChart> from recharts library
    <li>ToolTipLabels - dynamically renders the ToolTip when hovering over the chart</li>
    <li>ToolTipTitle - formats and centralizes titles within the ToolTip</li>  
    <li>Dot - Dynamically renders dots according to the colour of the metric being represented</li>
</ul>


## Third-Party Libraries Used 
<ul>
  <li>react-bootstrap</li>
  <li>recharts</li>
</ul>
