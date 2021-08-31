var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "474",
        "ok": "474",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2354",
        "ok": "2354",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1811",
        "ok": "1811",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "569",
        "ok": "569",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2069",
        "ok": "2069",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2157",
        "ok": "2157",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2217",
        "ok": "2217",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2338",
        "ok": "2338",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 80,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
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
        "total": "100",
        "ok": "100",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "474",
        "ok": "474",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2354",
        "ok": "2354",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1811",
        "ok": "1811",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "569",
        "ok": "569",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2069",
        "ok": "2069",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2157",
        "ok": "2157",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2217",
        "ok": "2217",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2338",
        "ok": "2338",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 19
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 1
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 80,
    "percentage": 80
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "33.333",
        "ok": "33.333",
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
