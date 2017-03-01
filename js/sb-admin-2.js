$(function() {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }

    // Login action
    $("#login-button").click(() => {
        let login = $("[name='login']").val();
        let password = $("[name='password']").val();
        
        let loginOk = (page) => window.location.href = `${page}.html`;
        let loginKo = () => alert("Echec de tentative de fraude");

        if(login === 'admin-gen'){
            loginOk('index');
        }
        else if(login === 'collaborateur'){
            loginKo();
        }else{
            loginKo();
        }
    });

    $("#secteursSelector > li > a").click((event) => {
        let buttonChange = (value) => $("#sectorSelector").text(value);
        switch (event.target.id){
            case "vehicule":
                morris.datas.secteurChange(morris.datas.deplacement, "Véhicule");
                buttonChange("Véhicule");
                break;
            case "deplacement":
                morris.datas.secteurChange(morris.datas.deplacement, "Déplacement");
                buttonChange("Déplacement");
                break;
            case "fourniture":
                morris.datas.secteurChange(morris.datas.fournituresData, "Fourniture");
                buttonChange("Fourniture");
                break;
            case "restaurant":
                morris.datas.secteurChange(morris.datas.fournituresData, "Restaurant");
                buttonChange("Véhicule");
                break;
            case "hebergement":
                buttonChange("Véhicule");
                break;
            case "divers":
                buttonChange("Véhicule");
                break;
        }
    });
});
