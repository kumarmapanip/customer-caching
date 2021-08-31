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
        "total": "719",
        "ok": "719",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "796",
        "ok": "796",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "percentiles1": {
        "total": "721",
        "ok": "721",
        "ko": "-"
    },
    "percentiles2": {
        "total": "881",
        "ok": "881",
        "ko": "-"
    },
    "percentiles3": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "percentiles4": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 47
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
        "total": "15",
        "ok": "15",
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
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "719",
        "ok": "719",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "796",
        "ok": "796",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "82",
        "ok": "82",
        "ko": "-"
    },
    "percentiles1": {
        "total": "721",
        "ok": "721",
        "ko": "-"
    },
    "percentiles2": {
        "total": "881",
        "ok": "881",
        "ko": "-"
    },
    "percentiles3": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "percentiles4": {
        "total": "890",
        "ok": "890",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 16,
    "percentage": 53
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 14,
    "percentage": 47
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
        "total": "15",
        "ok": "15",
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
