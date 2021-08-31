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
        "total": "748",
        "ok": "748",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5620",
        "ok": "5620",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4776",
        "ok": "4776",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1579",
        "ok": "1579",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5447",
        "ok": "5447",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5490",
        "ok": "5490",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5582",
        "ok": "5582",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5602",
        "ok": "5602",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 43,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "8.333",
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
        "total": "748",
        "ok": "748",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "5620",
        "ok": "5620",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "4776",
        "ok": "4776",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1579",
        "ok": "1579",
        "ko": "-"
    },
    "percentiles1": {
        "total": "5447",
        "ok": "5447",
        "ko": "-"
    },
    "percentiles2": {
        "total": "5490",
        "ok": "5490",
        "ko": "-"
    },
    "percentiles3": {
        "total": "5582",
        "ok": "5582",
        "ko": "-"
    },
    "percentiles4": {
        "total": "5602",
        "ok": "5602",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 8
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 3,
    "percentage": 6
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 43,
    "percentage": 86
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.333",
        "ok": "8.333",
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
