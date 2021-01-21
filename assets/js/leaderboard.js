let entries = 0;
let entriesAdded = 0;
let json;
let expConversion = {"0": 0, "1": 100, "2": 255, "3": 475, "4": 770, "5": 1150, "6": 1625, "7": 2205, "8": 2900, "9": 3720, "10": 4675, "11": 5775, "12": 7030, "13": 8450, "14": 10045, "15": 11825, "16": 13800, "17": 15980, "18": 18375, "19": 20995, "20": 23850, "21": 26950, "22": 30305, "23": 33925, "24": 37820, "25": 42000, "26": 46475, "27": 51255, "28": 56350, "29": 61770, "30": 67525, "31": 73625, "32": 80080, "33": 86900, "34": 94095, "35": 101675, "36": 109650, "37": 118030, "38": 126825, "39": 136045, "40": 145700, "41": 155800, "42": 166355, "43": 177375, "44": 188870, "45": 200850, "46": 213325, "47": 226305, "48": 239800, "49": 253820, "50": 268375, "51": 283475, "52": 299130, "53": 315350, "54": 332145, "55": 349525, "56": 367500, "57": 386080, "58": 405275, "59": 425095, "60": 445550, "61": 466650, "62": 488405, "63": 510825, "64": 533920, "65": 557700, "66": 582175, "67": 607355, "68": 633250, "69": 659870, "70": 687225, "71": 715325, "72": 744180, "73": 773800, "74": 804195, "75": 835375, "76": 867350, "77": 900130, "78": 933725, "79": 968145, "80": 1003400, "81": 1039500, "82": 1076455, "83": 1114275, "84": 1152970, "85": 1192550, "86": 1233025, "87": 1274405, "88": 1316700, "89": 1359920, "90": 1404075, "91": 1449175, "92": 1495230, "93": 1542250, "94": 1590245, "95": 1639225, "96": 1689200, "97": 1740180, "98": 1792175, "99": 1845195, "100": 1899250, "101": 1954350, "102": 2010505, "103": 2067725, "104": 2126020, "105": 2185400, "106": 2245875, "107": 2307455, "108": 2370150, "109": 2433970, "110": 2498925, "111": 2565025, "112": 2632280, "113": 2700700, "114": 2770295, "115": 2841075, "116": 2913050, "117": 2986230, "118": 3060625, "119": 3136245, "120": 3213100, "121": 3291200, "122": 3370555, "123": 3451175, "124": 3533070, "125": 3616250, "126": 3700725, "127": 3786505, "128": 3873600, "129": 3962020, "130": 4051775, "131": 4142875, "132": 4235330, "133": 4329150, "134": 4424345, "135": 4520925, "136": 4618900, "137": 4718280, "138": 4819075, "139": 4921295, "140": 5024950, "141": 5130050, "142": 5236605, "143": 5344625, "144": 5454120, "145": 5565100, "146": 5677575, "147": 5791555, "148": 5907050, "149": 6024070, "150": 6142625, "151": 6262725, "152": 6384380, "153": 6507600, "154": 6632395, "155": 6758775, "156": 6886750, "157": 7016330, "158": 7147525, "159": 7280345, "160": 7414800, "161": 7550900, "162": 7688655, "163": 7828075, "164": 7969170, "165": 8111950, "166": 8256425, "167": 8402605, "168": 8550500, "169": 8700120, "170": 8851475, "171": 9004575, "172": 9159430, "173": 9316050, "174": 9474445, "175": 9634625, "176": 9796600, "177": 9960380, "178": 10125975, "179": 10293395, "180": 10462650, "181": 10633750, "182": 10806705, "183": 10981525, "184": 11158220, "185": 11336800, "186": 11517275, "187": 11699655, "188": 11883950, "189": 12070170, "190": 12258325, "191": 12448425, "192": 12640480, "193": 12834500, "194": 13030495, "195": 13228475, "196": 13428450, "197": 13630430, "198": 13834425, "199": 14040445, "200": 14248500, "201": 14458600, "202": 14670755, "203": 14884975, "204": 15101270, "205": 15319650, "206": 15540125, "207": 15762705, "208": 15987400, "209": 16214220, "210": 16443175, "211": 16674275, "212": 16907530, "213": 17142950, "214": 17380545, "215": 17620325, "216": 17862300, "217": 18106480, "218": 18352875, "219": 18601495, "220": 18852350, "221": 19105450, "222": 19360805, "223": 19618425, "224": 19878320, "225": 20140500, "226": 20404975, "227": 20671755, "228": 20940850, "229": 21212270, "230": 21486025, "231": 21762125, "232": 22040580, "233": 22321400, "234": 22604595, "235": 22890175, "236": 23178150, "237": 23468530, "238": 23761325, "239": 24056545, "240": 24354200, "241": 24654300, "242": 24956855, "243": 25261875, "244": 25569370, "245": 25879350, "246": 26191825, "247": 26506805, "248": 26824300, "249": 27144320, "250": 27466875}
let mobile;
let mobileLoadInterval;

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
            barWidth = ((198 / 100) * (100 - percentage));
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
                        <div id="progress_percentage">${Math.floor(100 - percentage)}%</div>
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
        let ToFind = window.location.href.match(/\?(user(_id)?|place)=\d+/);
        if (ToFind) {
            let entryID = ToFind[0].match(/\d+/);
            try {
                findAndHighlightEntry(entryID);
            } catch(err)  {
                $(document.body).append(`
                    <div id="error_message">
                        <span id="error_message__header">Error</span>
                        <span id="error_message__message">No entry with ID ${entryID} found</span>
                    </div>
                `);
                let message = $("#error_message");
                let opacity = 1;
                setTimeout( function() {
                    setInterval(
                        function () {
                            opacity -= 0.01;
                            message.css("opacity", opacity.toString());
                            if (opacity <= 0) {
                                message.remove();
                            }
                        },
                        25)
                },
        5000);
            }
        }
        mobile = isMobile();
        if (mobile)
            mobileLoadInterval = setInterval(addEntries, 1000);
    });
});

$(window).scroll(function() {
    if (mobile)
        return;
    if ($(window).scrollTop() + $(window).height() >= $(document).height()){
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
        window.scrollTo(0, entry.position().top - window.innerHeight / 2 - 100);
    }
}

function addEntries() {
    if (entries <= entriesAdded) {
        if (mobileLoadInterval) {
            clearInterval(mobileLoadInterval);
        }
        return;
    }
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
        barWidth = ((198 / 100) * (100 - percentage));
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
                         <div id="progress_percentage">${Math.floor(100 - percentage)}%</div>
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

function isMobile() {
  let check = false;
  (function(a){
    if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
      check = true;
  })(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};