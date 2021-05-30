import React, { useState } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    processColor,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Linking
} from 'react-native';

import { BarChart, LineChart, PieChart } from 'react-native-charts-wrapper'
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../../styles';


const BarCharts = ({values, label,valueFormatter, color, barShadowColor,highlightColor}) => {
    const [bar, setBar] = useState({
        
        legend: {
            enabled: true,
            textSize: 14,
            form: 'SQUARE',
            formSize: 15,
            xEntrySpace: 10,
            yEntrySpace: 10,
            formToTextSpace: 5,
            wordWrapEnabled: true,
            maxSizePercent: 0.5
        },
        data: {
            dataSets: [{
                values: values,
                label: label,
                config: {
                    color: color,
                    barShadowColor: barShadowColor,
                    highlightAlpha: 90,
                    highlightColor: highlightColor,
                }
            }],

            config: {
                barWidth: 0.5,
            }
        },
        highlights: [{ x: 3 }, { x: 6 }],
        xAxis: {
            valueFormatter: valueFormatter,
            granularityEnabled: true,
            granularity: 1
        }
    })
    return (
        <BarChart
            style={styles.chart}
            data={bar.data}
            xAxis={bar.xAxis}
            animation={{ durationX: 2000 }}
            legend={bar.legend}
            gridBackgroundColor={processColor(colors.dark)}
            visibleRange={{ x: { min: 5, max: 5 } }}
            drawBarShadow={false}
            drawValueAboveBar={true}
            drawHighlightArrow={true}
            //onSelect={this.handleSelect.bind(this)}
            highlights={bar.highlights}
            onChange={(event) => console.log(event.nativeEvent)}
        />


    );
}
export default BarCharts;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    chart: {
        height: 250,
        marginVertical:20,
        zIndex:0
    },
    title: {
        marginTop: 10,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bar: {
        marginTop: 10,
        height: Dimensions.get('window').height / 2,
        width: Dimensions.get('window').width
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// const [bar, setBar] = React.useState({
//     title: 'Egzersiz Miktarı',
//     detail: {
//         time_value_list: ['01.04.2021',
//             '02.04.2021', '03.04.2021', '04.04.2021', '05.04.2021', '06.04.2021', '07.04.2021',],
//         dataset: [
//             { '01.04.2021': 50 },
//             { '02.04.2021': 40 },
//             { '03.04.2021': 55 },
//             { '04.04.2021': 45 },
//             { '05.04.2021': 45 },
//             { '06.04.2021': 40 },
//             { '07.04.2021': 40 },

//         ]
//     }
// })
// const getRandomColor = () => {
//     var letters = '0123456789ABCDEF'
//     var color = '#'
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)]
//     }
//     return color
// }
// const style1 = {
//     barWidth: 0.1,
//     groupSpace: 0.2
// }
// const style2 = {
//     barWidth: 0.2,
//     groupSpace: 0.1
// }
// const style3 = {
//     barWidth: 0.3,
//     groupSpace: 0.2
// }

// const time = bar.detail.time_value_list
// const legend = bar.detail.legend_list
// const dataset = bar.detail.dataset

// var dataSetsValue = []
// var dataStyle = {}
// var legendStyle = {}
// var descStyle = {}
// var xAxisStyle = {}
// var chooseStyle = {}
// var valueLegend = []
// var colorLegend = []

// //verinin çokluğuna göre barların kalınlığı ve arasındaki boşluk değişir
// if (legend.length === 4) {
//     chooseStyle = style1
// } else if (legend.length === 3) {
//     chooseStyle = style2
// } else if (legend.length === 2) {
//     chooseStyle = style3
// }

// legend.map((legendValue) => {
//     var valueLegend = []

//     time.map((timeValue) => {
//         const datasetValue = dataset[legendValue]
//         const datasetTimeValue = datasetValue[timeValue]

//         valueLegend.push(parseInt(datasetTimeValue))
//         console.log(valueLegend)
//     })

//     const datasetObject = {
//         values: valueLegend,
//         label: legendValue,
//         config: {
//             drawValues: true,
//             colors: [processColor(getRandomColor())]
//         }
//     }
//     dataSetsValue.push(datasetObject)
// })

// legendStyle = {
//     enabled: true,
//     textSize: 14,
//     form: 'SQUARE',
//     formSize: 14,
//     xEntrySpace: 10,
//     yEntrySpace: 5,
//     wordWrapEnabled: true
// }
// dataStyle = {
//     dataSets: dataSetsValue,
//     config: {
//         barWidth: chooseStyle.barWidth, // 0.1
//         group: {
//             fromX: 0,
//             groupSpace: chooseStyle.groupSpace, // 0.2
//             barSpace: 0.1
//         }
//     }
// }
// xAxisStyle = {
//     valueFormatter: time,
//     granularityEnabled: true,
//     granularity: 1,
//     axisMaximum: 5,
//     axisMinimum: 0,
//     centerAxisLabels: true
// }

// return (
//     <View>
//         <BarChart
//             style={styles.bar}
//             xAxis={xAxisStyle}
//             chartDescription={{ text: 'Bar Charts' }}
//             data={dataStyle}
//             legend={legendStyle}
//             drawValueAboveBar={false}
//         />
//     </View>
// )