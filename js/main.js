jQuery(function($){//функции при загрузке страницы
    $(document).ready(function(){
        $(".services__item__content").toggle();//скрытие всего контента в сервисах

        let nums_comms = document.getElementsByClassName("feedback__item").length;//скрытие всех лишних комментов
        for(let i=3;i<=nums_comms;i++){
            $("#comm"+i).toggle();
        }

        let team_id = 2;
        for(let i = 1;i<=3;i++){
            if(i==team_id){
                $("#photo"+i).addClass("active_teammate");
            }
            else{
                $("#text"+i).toggle();
                $("#photo"+i).addClass("inactive_teammate");
            }
        }
    });
});

jQuery(function($){//Открытие контента в сервисах
    $(".services__item__head").click(function(){
        $(".services__item__content", this.parentElement).toggle(200);
        $("#down_arrow", this).toggleClass("rotate");
    });
});

jQuery(function($){//Прокрутка слайдера с комментариями
    $("#comm_down").click(function(){
        let now_item = document.getElementsByClassName("feedback__item_top")[0];
        let now_id = Number.parseInt(now_item.id.replace("comm", ""));

        let nums_comms = document.getElementsByClassName("feedback__item").length;
        if(now_id>nums_comms-2){
            return false;
        }

        $("#comm"+now_id).toggleClass("feedback__item_top");
        $("#comm"+now_id).toggle(1000);

        $("#comm"+(now_id+1)).toggleClass("feedback__item_top");
        $("#comm"+(now_id+2)).toggle(1000);
    });

    $("#comm_up").click(function(){
        let now_item = document.getElementsByClassName("feedback__item_top")[0];
        let now_id = Number.parseInt(now_item.id.replace("comm", ""));

        let nums_comms = document.getElementsByClassName("feedback__item").length;
        if(now_id<2){
            return false;
        }

        $("#comm"+now_id).toggleClass("feedback__item_top");
        $("#comm"+(now_id+1)).toggle(1000);
        console.log("#comm"+now_id+1);

        $("#comm"+(now_id-1)).toggleClass("feedback__item_top");
        $("#comm"+(now_id-1)).toggle(1000);
    });
});

jQuery(function($){//переключение команды
    $(".team_ph").click(function(){
        let now_id=Number.parseInt(this.id.replace("photo", ""));
        let old_tm_id = Number.parseInt(document.getElementsByClassName("active_teammate")[0].id.replace("photo",""));

        let old_tm_ph = document.getElementById("photo"+old_tm_id);
        old_tm_ph.classList.remove("active_teammate");
        old_tm_ph.classList.add("inactive_teammate");
        let old_tm_txt = document.getElementById("text"+old_tm_id);

        $("#text"+old_tm_id).toggle();

        let new_tm_ph = document.getElementById("photo"+now_id);
        new_tm_ph.classList.remove("inactive_teammate");
        new_tm_ph.classList.add("active_teammate");
        $("#text"+now_id).toggle();
    });
});

jQuery(function($){
    $("#burger").click(function(){
        $("#main_menu").addClass("open_menu");
    });
    $("#close_burg").click(function(){
        $("#main_menu").removeClass("open_menu");
    });
});