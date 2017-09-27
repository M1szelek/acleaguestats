module.exports = {
    loadPage: function(options){
        return new Promise(function(resolve, reject){
            http.get(options, function(http_res) {
                let data = "";

                http_res.on("data", function (chunk) {
                    data += chunk;
                });

                http_res.on("end", function () {
                    resolve(data);
                });
            }).on('error', function(e) {
                reject("Got error: " + e.message);
            });
        });
    },

    getPodium: function(data){

        let $ = cheerio.load(data);

        let first = $('.table tr:nth-child(1) td:nth-child(4)').text();
        let second = $('.table tr:nth-child(2) td:nth-child(4)').text();
        let third = $('.table tr:nth-child(3) td:nth-child(4)').text();
        console.log(first);

        return {
            first: first,
            second: second,
            third: third
        }

    },

    timeStringToMilliseconds: function(timeString){
        let tmp = timeString.split(':');
        let minutes = parseInt(tmp[0]);
        tmp = tmp[1].split('.');
        let seconds = parseInt(tmp[0]);
        let milliseconds = parseInt(tmp[1]);

        return milliseconds + seconds * 60 + minutes * 60000;
    },

    shiftZeros: function(time, zerosAmount){
        var tmpString =  (Array(zerosAmount + 1).join("0") + time);
        return tmpString.substr(tmpString.length - zerosAmount);
    },

    millisecondsToTimeString: function(milliseconds){
        let resminutes = parseInt(milliseconds / 60000);
        let resseconds = parseInt((milliseconds - resminutes * 60000)/1000);
        let resmilliseconds = parseInt(milliseconds - resseconds * 1000);
        resmilliseconds = '000' + resmilliseconds;
        resmilliseconds = resmilliseconds.substr(resmilliseconds.length - 3);


        return `${resminutes}:${resseconds}.${resmilliseconds}`;
    },

    objectToArray: function(data){
        let result = Object.keys(data).map(function(key) {
            return data[key];
        });
        return result;
    },

    computeAverage: function(data){

    }
};