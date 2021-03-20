// Handsontable 的使用
var data = [
    ['Java', '1', '降', '-0.01%'],
    ['C', '2', '升', '+2.44%'],
    ['Python', '3', '升', '+1.41%'],
    ['C++', '4', '降', '-2.58%'],
    ['C#', '5', '升', '+2.07%'],
    ['Visual Basic .NET', '6', '降', '-1.17%'],
    ['JavaScript', '7', '降', '-0.85%'],

];

var container = document.getElementById('2020Language');

var hot = new Handsontable(container, {
    data: data,
    colHeaders: ['语言名称', '排名', '升或降', '变化幅度'], // 显示列表头
    className: 'htCenter htMiddle',
    colWidths: [150, 150, 150, 150],
    rowHeights: [40, 40, 40, 40, 40, 40, 40],
    licenseKey: 'non-commercial-and-evaluation'
});


// Echart 的使用

var myChart = echarts.init(document.getElementById('main'));

option = {
    title: {
        text: "JavaScript语言排名变化",
        subtext: ""
    },
    xAxis: {
        type: 'category',
        data: ['2000', '2005', '2010', '2015', '2020'],
        name: '年份'
    },
    yAxis: {
        type: 'value',
        name: '排名'
    },
    tooltip: {
        trigger: 'axis', 
        axisPointer: {
            type: 'line' 
        },
        formatter: '排名<br/>{b} : {c} <br/>',
    },
    series: [{
        data: [6, 9, 8, 8, 7],
        type: 'line'
    }]
};

myChart.setOption(option);
