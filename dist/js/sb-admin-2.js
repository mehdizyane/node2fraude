'use strict';

/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
$(function () {
    $('#side-menu').metisMenu();
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function () {

    $(window).bind("load resize", function () {
        var topOffset = 50;
        var width = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            $('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
        }

        var height = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", height + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function () {
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
    $("#login-button").click(function () {
        var login = $("[name='login']").val();
        var password = $("[name='password']").val();

        var loginOk = function loginOk(page) {
            return window.location.href = page + '.html';
        };
        var loginKo = function loginKo() {
            return alert("Echec de tentative de fraude");
        };

        if (login === 'admin-gen') {
            loginOk('index');
        } else if (login === 'collaborateur') {
            loginKo();
        } else {
            loginKo();
        }
    });

    $("#secteursSelector > li > a").click(function (event) {
        var buttonChange = function buttonChange(value) {
            return $("#sectorSelector").text(value);
        };
        switch (event.target.id) {
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

    var ndfHtml = function ndfHtml(header) {
        return '<div class="row">\n        <div class="col-lg-12">\n            <h1 class="page-header">Liste note de frais</h1>\n        </div>\n    </div>\n    <div class="row">\n        <button id="back-home" type="button" class="btn btn-success btn-circle btn-lg">\n            <i class="fa fa-arrow-left"></i>\n        </button>\n    </div>\n    <div class="row">\n        <div class="col-lg-6">\n            <div class="panel panel-default">\n                <div class="panel-heading">\n                    ' + header + '\n                </div>\n                <div class="panel-body"></div>\n            </div>\n        </div>\n    </div>';
    };

    var updateListStyle = function updateListStyle(style, texts) {
        texts.forEach(function (text, index) {
            $('#ndf-content > .row > div > .panel > .panel-body').append('\n            <div class="row" id="' + text + '+' + index + '">\n            <div class="alert ' + style + '">\n                ' + text + '\n                <div class="col-lg-10"></div>\n                <div class="col-lg-1">\n                    <button type="button" class="btn btn-info btn-circle"><i class="fa fa-check"></i>\n                        </button>\n                </div>\n                <div class="col-lg-1">\n                    <button type="button" class="btn btn-warning btn-circle"><i class="fa fa-times"></i>\n                        </button>\n                </div>\n            </div>\n            </div>');
        });
    };

    var toNdfList = function toNdfList(style, header, data) {
        $("#content").hide();
        $("#ndf-content").empty().append(ndfHtml(header));
        updateListStyle(style, data);
    };

    $("#back-home").click(function () {
        $("#content").show();
        $("#ndf-content").hide();
    });

    $("#toValidateList").click(function () {
        toNdfList('alert-info', 'Notes de frais à valider', ['NDF - C.PIGNON', 'NDF - C.PIGNON']);
    });

    $("#toProcessingList").click(function () {
        toNdfList('alert-warning', 'Notes de frais en cours', ['NDF - P.SAINSTEBAN', 'NDF - P.SAINSTEBAN']);
    });
});