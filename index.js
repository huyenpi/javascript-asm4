$(document).ready(function () {
    const xttp = new XMLHttpRequest();
    xttp.open('GET', 'https://gnews.io/api/v4/top-headlines?&token=3714651edd1b5894872302b193879ca8', true);
    xttp.send();
    xttp.onload = function () {
        const json = JSON.parse(xttp.responseText);
        let html = "";
        const ararticles = json.articles;
        ararticles.forEach(function (val) {
            html += "<div class = 'box'>" + "<div class = 'box1'>" + "<img src='" + val.image + "'>" + "</div>" + "<div class = 'box2'>" + "<a href = '" + val.url + "' " + "target = '_blank'>" + val.title + "</a>" + "<p class='time'>" + val.publishedAt + "</p>" + "<p class='textshort'>" + val.description + "</p>" + "</div>" + "</div>";
        });
        $(".pbox").html(html);

    };
    // Hiển thị search box
    $(".fa-search").click(function () {
        $(".searchbox,.backdrop").css("display", "block");
        $(".close").click(function () {
            $(".searchbox,.backdrop").css("display", "none");
        });
        $("#btn").click(function () {
            let input = $("#key").val();
            $("#key").val("");

            if (!input) {
                $("#key").addClass("error");
            } else {
                $("#key").removeClass("error");
                event.preventDefault();
                $(".pbox").hide();

                $(".loader").show();
                input = '"' + input + '"';
                $(".searchbox,.backdrop").css("display", "none");
                const xttps = new XMLHttpRequest();
                xttps.open('GET', 'https://gnews.io/api/v4/search?q=' + input + '&token=3714651edd1b5894872302b193879ca8', true);
                xttps.send();
                xttps.onload = function () {
                    const jsons = JSON.parse(xttps.responseText);
                    console.log(jsons);
                    let htmls = "";
                    const ararticless = jsons.articles;
                    ararticless.forEach(function (val) {
                        htmls += "<div class = 'box'>" + "<div class = 'box1'>" + "<img src='" + val.image + "'>" + "</div>" + "<div class = 'box2'>" + "<a href = '" + val.url + "' " + "target = '_blank'>" + val.title + "</a>" + "<p class='time'>" + val.publishedAt + "</p>" + "<p class='textshort'>" + val.description + "</p>" + "</div>" + "</div>";
                    });
                    //ẩn icon load
                    $(".loader").hide();
                    // set nội dung trong html thành searchpoint
                    $(".pbox").html(htmls);
                    //hiển thị nội dung trong box
                    $(".pbox").show();

                };
            };



        });
    });
});
