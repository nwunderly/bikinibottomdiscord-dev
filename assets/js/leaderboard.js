let entries = 0;
let entriesAdded = 0;
let json;
let expConversion = {"0": 0, "1": 100, "2": 255, "3": 475, "4": 770, "5": 1150, "6": 1625, "7": 2205, "8": 2900, "9": 3720, "10": 4675, "11": 5775, "12": 7030, "13": 8450, "14": 10045, "15": 11825, "16": 13800, "17": 15980, "18": 18375, "19": 20995, "20": 23850, "21": 26950, "22": 30305, "23": 33925, "24": 37820, "25": 42000, "26": 46475, "27": 51255, "28": 56350, "29": 61770, "30": 67525, "31": 73625, "32": 80080, "33": 86900, "34": 94095, "35": 101675, "36": 109650, "37": 118030, "38": 126825, "39": 136045, "40": 145700, "41": 155800, "42": 166355, "43": 177375, "44": 188870, "45": 200850, "46": 213325, "47": 226305, "48": 239800, "49": 253820, "50": 268375, "51": 283475, "52": 299130, "53": 315350, "54": 332145, "55": 349525, "56": 367500, "57": 386080, "58": 405275, "59": 425095, "60": 445550, "61": 466650, "62": 488405, "63": 510825, "64": 533920, "65": 557700, "66": 582175, "67": 607355, "68": 633250, "69": 659870, "70": 687225, "71": 715325, "72": 744180, "73": 773800, "74": 804195, "75": 835375, "76": 867350, "77": 900130, "78": 933725, "79": 968145, "80": 1003400, "81": 1039500, "82": 1076455, "83": 1114275, "84": 1152970, "85": 1192550, "86": 1233025, "87": 1274405, "88": 1316700, "89": 1359920, "90": 1404075, "91": 1449175, "92": 1495230, "93": 1542250, "94": 1590245, "95": 1639225, "96": 1689200, "97": 1740180, "98": 1792175, "99": 1845195, "100": 1899250, "101": 1954350, "102": 2010505, "103": 2067725, "104": 2126020, "105": 2185400, "106": 2245875, "107": 2307455, "108": 2370150, "109": 2433970, "110": 2498925, "111": 2565025, "112": 2632280, "113": 2700700, "114": 2770295, "115": 2841075, "116": 2913050, "117": 2986230, "118": 3060625, "119": 3136245, "120": 3213100, "121": 3291200, "122": 3370555, "123": 3451175, "124": 3533070, "125": 3616250, "126": 3700725, "127": 3786505, "128": 3873600, "129": 3962020, "130": 4051775, "131": 4142875, "132": 4235330, "133": 4329150, "134": 4424345, "135": 4520925, "136": 4618900, "137": 4718280, "138": 4819075, "139": 4921295, "140": 5024950, "141": 5130050, "142": 5236605, "143": 5344625, "144": 5454120, "145": 5565100, "146": 5677575, "147": 5791555, "148": 5907050, "149": 6024070, "150": 6142625, "151": 6262725, "152": 6384380, "153": 6507600, "154": 6632395, "155": 6758775, "156": 6886750, "157": 7016330, "158": 7147525, "159": 7280345, "160": 7414800, "161": 7550900, "162": 7688655, "163": 7828075, "164": 7969170, "165": 8111950, "166": 8256425, "167": 8402605, "168": 8550500, "169": 8700120, "170": 8851475, "171": 9004575, "172": 9159430, "173": 9316050, "174": 9474445, "175": 9634625, "176": 9796600, "177": 9960380, "178": 10125975, "179": 10293395, "180": 10462650, "181": 10633750, "182": 10806705, "183": 10981525, "184": 11158220, "185": 11336800, "186": 11517275, "187": 11699655, "188": 11883950, "189": 12070170, "190": 12258325, "191": 12448425, "192": 12640480, "193": 12834500, "194": 13030495, "195": 13228475, "196": 13428450, "197": 13630430, "198": 13834425, "199": 14040445, "200": 14248500, "201": 14458600, "202": 14670755, "203": 14884975, "204": 15101270, "205": 15319650, "206": 15540125, "207": 15762705, "208": 15987400, "209": 16214220, "210": 16443175, "211": 16674275, "212": 16907530, "213": 17142950, "214": 17380545, "215": 17620325, "216": 17862300, "217": 18106480, "218": 18352875, "219": 18601495, "220": 18852350, "221": 19105450, "222": 19360805, "223": 19618425, "224": 19878320, "225": 20140500, "226": 20404975, "227": 20671755, "228": 20940850, "229": 21212270, "230": 21486025, "231": 21762125, "232": 22040580, "233": 22321400, "234": 22604595, "235": 22890175, "236": 23178150, "237": 23468530, "238": 23761325, "239": 24056545, "240": 24354200, "241": 24654300, "242": 24956855, "243": 25261875, "244": 25569370, "245": 25879350, "246": 26191825, "247": 26506805, "248": 26824300, "249": 27144320, "250": 27466875}

$(document).ready(function(){
    $.getJSON("https://api.bikinibottomdiscord.org/leaderboard", function(data){
        json = data;
        let items = [];
        $.each(data, function(key, value){
            entries += 1;
            value.id = key;
            items.push(value);
        });
        items.sort(function(a,b){ return b.points - a.points; });
        let item;
        let expX;
        let expY;
        let percentage;
        let barWidth;
        for (let i = 0; i < items.length && i < 100; i++) {
            item = items[i];
            entriesAdded++;
            expX = expConversion[item.level.toString()];
            expY = expConversion[(item.level + 1).toString()];
            percentage = ((expY - item.points) / (expY - expX)) * 100;
            barWidth = (198 / 100) * percentage;
            $("#leaderboard").append(
                `<div class="entry _${entriesAdded} _${item.id}">
                    <div class="rank _${entriesAdded}">${entriesAdded}</div>
                    <img class="user_avatar" src="${item.avatar}" alt="${item.username}" draggable="false">
                    <span class="user_username">${item.username}</span>
                    <div id="entry-left__block">
                        <div id="progress_bar__block">
                            <div id="percentage-bar" style="width: ${Math.floor(barWidth)}px;"></div>
                            <div id="complete-bar"></div>
                        </div>
                        <div id="progress_percentage">${Math.floor(percentage)}%</div>
                        <div id="user_points__block">
                            <div class="points_text">Exp Points</div>
                            <span class="user_points">${item.points}</span>
                        </div>
                        <div id="user_level__block">
                            <div class="level_text">Level</div>
                            <div class="user_level">${item.level}</div>
                        </div>
                    </div>
                </div>`
            );
        }
        console.log(`Loaded entries ${entriesAdded - 100} - ${entriesAdded}`);
        let userToFind = window.location.href.match(/\?user(_id)?=\d+/);
        if (userToFind) {
            let userID = userToFind[0].match(/\d+/);
            findAndHighlightEntry(userID);
        }
    });
});

$(window).scroll(function() {
    if ($("#loading").position().top < $(window).scrollTop() + $(window).height())
        window.alert("a");
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 20){
        addEntries();
    }
});

function findAndHighlightEntry(id, final = false) {
    let entry = $(`._${id}`);
    if (!(entry.length) && !(final)) {
        addEntries();
        if (entriesAdded === entries)
            findAndHighlightEntry(id, true);
        findAndHighlightEntry(id);
    } else {
        entry.addClass("highlighted")
        window.scrollTo(0, entry.position().top - window.innerHeight / 2 + 100);
    }
}

function addEntries() {
    if (entries <= entriesAdded)
        return;
    let items = [];
    $.each(json, function(key, value){ items.push(value); });
    items.sort(function(a,b){ return b.points - a.points; });
    let item;
    let expX;
    let expY;
    let percentage;
    let barWidth;
    let entriesToAdd = entriesAdded;
    for (let i = 0; i < (items.length - entriesAdded) && i < 100; i++) {
        item = items[i + entriesToAdd];
        expX = expConversion[item.level.toString()];
        expY = expConversion[(item.level + 1).toString()];
        percentage = ((expY - item.points) / (expY - expX)) * 100;
        barWidth = (198 / 100) * percentage;
        try {
            $("#leaderboard").append(
                `<div class="entry _${entriesAdded + 1} _${item.id}">
                     <div class="rank _${entriesAdded + 1}">${entriesAdded + 1}</div>
                     <img class="user_avatar" src="${item.avatar}" alt="${item.username}">
                     <span class="user_username">${item.username}</span>
                     <div id="entry-left__block">
                         <div id="progress_bar__block">
                             <div id="percentage-bar" style="width: ${barWidth}px;"></div>
                             <div id="complete-bar"></div>
                         </div>
                         <div id="progress_percentage">${Math.floor(percentage)}%</div>
                         <div id="user_points__block">
                             <div class="points_text">Exp Points</div>
                             <span class="user_points">${item.points}</span>
                         </div>
                         <div id="user_level__block">
                             <div class="level_text">Level</div>
                             <div class="user_level">${item.level}</div>
                         </div>
                     </div>
                 </div>`
            );
        } catch (err) {
            console.log(`Error loading entry ${i + entriesAdded + 1}`);
        }
        entriesAdded++;
    }
    console.log(`Loaded entries ${entriesAdded - 100} - ${entriesAdded}`);
    if (entriesAdded === entries)
        $("#loading").hide();
}