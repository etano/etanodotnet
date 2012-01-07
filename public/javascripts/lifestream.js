(function() {
    var a = 0, b = [ {
        service: "github",
        user: "etano"
    }, {
        service: "googlereader",
        user: "12090471747753652738"
    }, {
        service: "twitter",
        user: "ethanwbrown"
    }, {
        service: "lastfm",
        user: "etano"
    }, {
        service: "tumblr",
        user: "ethanwbrown"
    }, {
        service: "zotero",
        user: "820015"
    } ];
    Date.prototype.toISO8601 = function(a) {
        var b = function(a, b) {
            var c = "";
            while (c.length < b - 1 && a < Math.pow(10, b - c.length - 1)) c += "0";
            return c + a.toString();
        };
        a = a ? a : new Date;
        var c = a.getTimezoneOffset();
        return b(a.getFullYear(), 4) + "-" + b(a.getMonth() + 1, 2) + "-" + b(a.getDate(), 2) + "T" + b(a.getHours(), 2) + ":" + b(a.getMinutes(), 2) + ":" + b(a.getUTCSeconds(), 2) + (c > 0 ? "-" : "+") + b(Math.floor(Math.abs(c) / 60), 2) + ":" + b(Math.abs(c) % 60, 2);
    }, $("#lifestream").lifestream({
        limit: 10,
        list: b,
        feedloaded: function() {
            a++, a === b.length && ($("#lifestream li").each(function() {
                var a = $(this);
                date = new Date(a.data("time")), url = a.data("url"), name = a.data("name"), a.append('<span class="via"><a href="' + url + '">' + name + "</a></span>" + '<span class="date timeago" title="' + date.toISO8601(date) + '">' + date + "</span>");
            }), $("#lifestream .timeago").timeago());
        }
    });
})();
