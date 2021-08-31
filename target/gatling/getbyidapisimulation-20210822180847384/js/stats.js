var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "582",
        "ok": "582",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "373",
        "ok": "373",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles1": {
        "total": "338",
        "ok": "338",
        "ko": "-"
    },
    "percentiles2": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "percentiles3": {
        "total": "507",
        "ok": "507",
        "ko": "-"
    },
    "percentiles4": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30",
        "ok": "30",
        "ko": "-"
    }
},
contents: {
"req_get-by-id-8dbd1": {
        type: "REQUEST",
        name: "get by id",
path: "get by id",
pathFormatted: "req_get-by-id-8dbd1",
stats: {
    "name": "get by id",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "162",
        "ok": "162",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "582",
        "ok": "582",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "373",
        "ok": "373",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "84",
        "ok": "84",
        "ko": "-"
    },
    "percentiles1": {
        "total": "338",
        "ok": "338",
        "ko": "-"
    },
    "percentiles2": {
        "total": "416",
        "ok": "416",
        "ko": "-"
    },
    "percentiles3": {
        "total": "507",
        "ok": "507",
        "ko": "-"
    },
    "percentiles4": {
        "total": "581",
        "ok": "581",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 30,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "30",
        "ok": "30",
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
