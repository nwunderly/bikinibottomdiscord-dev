let entries = 0;
let entriesAdded = 0;
let json;

$(document).ready(function(){
    $.getJSON("/leaderboard.json", function(data){
        json = data;
        let items = [];
        $.each(data, function(key, value){
            entries += 1;
            items.push(value);
        });
        items.sort(function(a,b){ return b.points - a.points; });
        let item;
        for (let i = 0; i < items.length && i < 100; i++) {
            item = items[i];
            entriesAdded++;
            $("#leaderboard").append(
                `<div class="entry _${entriesAdded}">
                    <div class="rank _${entriesAdded}">${entriesAdded}</div>
                    <img class="user_avatar" src="${item.avatar}" alt="${item.username}">
                    <span class="user_username">${item.username}</span>
                    <div id="user_points__block">
                        <div class="points_text">Exp Points</div>
                        <span class="user_points">${item.points}</span>
                    </div>
                    <div id="user_level__block">
                        <div class="level_text">Level</div>
                        <div class="user_level">${item.level}</div>
                    </div>
                </div>`
            );
        }
        console.log(`Loaded entries ${entriesAdded - 100} - ${entriesAdded}`);
    });
});

$(window).scroll(function(){
    if ($(window).scrollTop() + $(window).height() === $(document).height()){
        let items = [];
        $.each(json, function(key, value){ items.push(value); });
        if (entries <= entriesAdded)
            return;
        items.sort(function(a,b){ return b.points - a.points; });
        let item;
        let entriesToAdd = entriesAdded;
        for (let i = 0; i < (items.length - entriesAdded) && i < 100; i++) {
            item = items[i + entriesToAdd];
            try {
                $("#leaderboard").append(
                    `<div class="entry _${entriesAdded + 1}">
                              <div class="rank _${entriesAdded + 1}">${entriesAdded + 1}</div>
                              <img class="user_avatar" src="${item.avatar}" alt="${item.username}">
                              <span class="user_username">${item.username}</span>
                              <div id="user_points__block">
                                  <div class="points_text">Exp Points</div>
                                  <span class="user_points">${item.points}</span>
                              </div>
                              <div id="user_level__block">
                                  <div class="level_text">Level</div>
                                  <div class="user_level">${item.level}</div>
                              </div>
                          </div>`
                );
            } catch (err) {
                console.log(`Error loading entry ${i + entriesAdded + 1}`);
            }
            entriesAdded++;
        }
        console.log(`Loaded entries ${entriesAdded - 100} - ${entriesAdded}`);
        if (entriesAdded === entries) {}
            $("#loading").hide();
    }
});