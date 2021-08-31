var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10145",
        "ok": "10145",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29250",
        "ok": "29250",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "21808",
        "ok": "21808",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5943",
        "ok": "5943",
        "ko": "-"
    },
    "percentiles1": {
        "total": "23046",
        "ok": "23046",
        "ko": "-"
    },
    "percentiles2": {
        "total": "26659",
        "ok": "26659",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29075",
        "ok": "29075",
        "ko": "-"
    },
    "percentiles4": {
        "total": "29241",
        "ok": "29241",
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
    "count": 50,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
        "ko": "-"
    }
},
contents: {
"req_get-all-custome-27e69": {
        type: "REQUEST",
        name: "get all customer details",
path: "get all customer details",
pathFormatted: "req_get-all-custome-27e69",
stats: {
    "name": "get all customer details",
    "numberOfRequests": {
        "total": "50",
        "ok": "50",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "10145",
        "ok": "10145",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "29250",
        "ok": "29250",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "21808",
        "ok": "21808",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "5943",
        "ok": "5943",
        "ko": "-"
    },
    "percentiles1": {
        "total": "23046",
        "ok": "23046",
        "ko": "-"
    },
    "percentiles2": {
        "total": "26659",
        "ok": "26659",
        "ko": "-"
    },
    "percentiles3": {
        "total": "29075",
        "ok": "29075",
        "ko": "-"
    },
    "percentiles4": {
        "total": "29241",
        "ok": "29241",
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
    "count": 50,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.667",
        "ok": "1.667",
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
