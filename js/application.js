// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){
    $('.tooltip-demo').tooltip({
      selector: "[data-toggle=tooltip]",
      container: "body"
    });

      $(".selecter_5").selecter();
      $(".selecter_3").selecter();

	$(".selecter_6").selecter();

	$(".linewrap>ul").width(screen.width*3);


	$("input[name = 'inputType']").on("click",function(){

        if($(this).val() == 1){
            $("#searchInput").hide();
            $("#searchArea").show();
        }else{
            $("#searchInput").show();
            $("#searchArea").hide();
        }
    });



    $('.radio input').iCheck({
        radioClass: 'iradio_flat',
        increaseArea: '20%'
    });

    $(document).ready(function(){

        var myChart1 = echarts.init(document.getElementById('line1'));
        var myChart2 = echarts.init(document.getElementById('line2'));
        var myChart3 = echarts.init(document.getElementById('line3'));
        var myChart4 = echarts.init(document.getElementById('line4'));
        var option1 = {
            title : {
                text: '耗时',
                subtext: ''
            },
            tooltip : {
                trigger: 'axis'
            },
            // legend: {
            //     data:['最高气温']
            // },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['17:07','17:08','17:09','17:10','17:11','17:12','17:13']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}%'
                    }
                }
            ],
            series : [
                {
                    name:'可用率',
                    type:'line',
                    data:[91 , 91.2 , 97 , 87 , 92 , 93 , 99.3 ],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    }
                    // ,
                    // markLine : {
                    //     data : [
                    //         {type : 'average', name: '平均值'}
                    //     ]
                    // }
                }

            ]
        };
        var option2 = {
            title : {
                text: '可用率曲线',
                subtext: ''
            },
            tooltip : {
                trigger: 'axis'
            },
            // legend: {
            //     data:['最高气温']
            // },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['17:07','17:08','17:09','17:10','17:11','17:12','17:13']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}%'
                    }
                }
            ],
            series : [
                {
                    name:'可用率',
                    type:'line',
                    data:[91 , 91.2 , 97 , 87 , 92 , 93 , 99.3 ],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    }
                    // ,
                    // markLine : {
                    //     data : [
                    //         {type : 'average', name: '平均值'}
                    //     ]
                    // }
                }

            ]
        };
        var option3 = {
            title : {
                text: '调用次数',
                subtext: ''
            },
            tooltip : {
                trigger: 'axis'
            },
            // legend: {
            //     data:['最高气温']
            // },
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['17:07','17:08','17:09','17:10','17:11','17:12','17:13']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value}%'
                    }
                }
            ],
            series : [
                {
                    name:'可用率',
                    type:'line',
                    data:[91 , 91.2 , 97 , 87 , 92 , 93 , 99.3 ],
                    markPoint : {
                        data : [
                            {type : 'max', name: '最大值'},
                            {type : 'min', name: '最小值'}
                        ]
                    }
                    // ,
                    // markLine : {
                    //     data : [
                    //         {type : 'average', name: '平均值'}
                    //     ]
                    // }
                }

            ]
        };


        // 为echarts对象加载数据
        myChart1.setOption(option1);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option2);


    })





      // $('#accordion2').collapse();
  })
}(window.jQuery)
