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
                morris.datas.secteurChange(morris.datas.vehiculeData, "Véhicule");
                buttonChange("Véhicule");
                break;
            case "deplacement":
                morris.datas.secteurChange(morris.datas.deplacementData, "Déplacement");
                buttonChange("Déplacement");
                break;
            case "fourniture":
                morris.datas.secteurChange(morris.datas.fournituresData, "Fourniture");
                buttonChange("Fourniture");
                break;
            case "restaurant":
                morris.datas.secteurChange(morris.datas.restaurationData, "Restaurant");
                buttonChange("Restaurant");
                break;
            case "hebergement":
                morris.datas.secteurChange(morris.datas.hebergementData, "Hébergement");
                buttonChange("Hebergement");
                break;
            case "divers":
                morris.datas.secteurChange(morris.datas.diversData, "Divers");
                buttonChange("Divers");
                break;
            case "total":
                morris.datas.secteurChange(morris.datas.totalData, "Tous les secteurs");
                buttonChange("Tous les secteurs");
                break;
        }
    });

    let ndfHtml = (header) => {
        return `<div class="row">
        <div class="col-lg-12">
            <h1 class="page-header">Liste note de frais</h1>
        </div>
    </div>
    <div class="row">
        <button id="back-home" type="button" class="btn btn-success btn-circle btn-lg">
            <i class="fa fa-arrow-left"></i>
        </button>
    </div>
    <div class="row">
        <div class="col-lg-6">
            <div class="panel panel-default">
                <div class="panel-heading">
                    ${header}
                </div>
                <div class="panel-body"></div>
            </div>
        </div>
    </div>`
    };

    let updateListStyle = (style, texts) => {
        texts.forEach((text, index) => {
            $('#ndf-content > .row > div > .panel > .panel-body').append(`
            <div class="row" id="${text}+${index}">
            <div class="alert ${style}">
                ${text}
                <div class="col-lg-10"></div>
                <div class="col-lg-1">
                    <button type="button" class="btn btn-info btn-circle"><i class="fa fa-check"></i>
                        </button>
                </div>
                <div class="col-lg-1">
                    <button type="button" class="btn btn-warning btn-circle"><i class="fa fa-times"></i>
                        </button>
                </div>
            </div>
            </div>`);
        });
    };

    let toNdfList = (style, header, data) => {
        $("#content").hide();
        $("#ndf-content")
            .empty()
            .append(ndfHtml(header));
        updateListStyle(style, data);
    };

    $("#back-home").click(() => {
        $("#content").show();
        $("#ndf-content").hide();
    });

    $("#toValidateList").click(() => {
        toNdfList('alert-info', 'Notes de frais à valider', ['NDF - C.PIGNON', 'NDF - C.PIGNON']);
    });

    $("#toProcessingList").click(() => {
        toNdfList('alert-warning', 'Notes de frais en cours', ['NDF - P.SAINSTEBAN', 'NDF - P.SAINSTEBAN']);
    });
});
