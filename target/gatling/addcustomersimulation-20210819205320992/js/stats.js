var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "200",
        "ok": "200",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "461",
        "ok": "461",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13999",
        "ok": "13999",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "7065",
        "ok": "7065",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5948",
        "ok": "5948",
        "ko": "-"
    },
    "percentiles1": {
        "total": "7037",
        "ok": "7037",
        "ko": "-"
    },
    "percentiles2": {
        "total": "13052",
        "ok": "13052",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13717",
        "ok": "13717",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13844",
        "ok": "13844",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 33,
    "percentage": 17
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 48,
    "percentage": 24
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 119,
    "percentage": 60
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "11.111",
        "ok": "11.111",
        "ko": "-"
    }
},
contents: {
"req_post-customer-41c5c": {
        type: "REQUEST",
        name: "Post customer",
path: "Post customer",
pathFormatted: "req_post-customer-41c5c",
stats: {
    "name": "Post customer",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "2714",
        "ok": "2714",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "13999",
        "ok": "13999",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "12861",
        "ok": "12861",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1373",
        "ok": "1373",
        "ko": "-"
    },
    "percentiles1": {
        "total": "13053",
        "ok": "13053",
        "ko": "-"
    },
    "percentiles2": {
        "total": "13558",
        "ok": "13558",
        "ko": "-"
    },
    "percentiles3": {
        "total": "13818",
        "ok": "13818",
        "ko": "-"
    },
    "percentiles4": {
        "total": "13867",
        "ok": "13867",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 100,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.556",
        "ok": "5.556",
        "ko": "-"
    }
}
    },"req_get-customer-by-4f8a4": {
        type: "REQUEST",
        name: "Get Customer By Id",
path: "Get Customer By Id",
pathFormatted: "req_get-customer-by-4f8a4",
stats: {
    "name": "Get Customer By Id",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "461",
        "ok": "461",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "11202",
        "ok": "11202",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1270",
        "ok": "1270",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1300",
        "ok": "1300",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1004",
        "ok": "1004",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1145",
        "ok": "1145",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2411",
        "ok": "2411",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5019",
        "ok": "5019",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 33,
    "percentage": 33
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 48,
    "percentage": 48
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 19,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5.556",
        "ok": "5.556",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
