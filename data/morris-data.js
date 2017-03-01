morris = {
    datas: {}
};


let result = {};

Morris.Area({
    element: 'morris-area-chart-1',
    data: [{
        period: '2016-01',
        encours: 2666,
        valide: null,
        refuse: 2647,
        rembourse: 1000
    }, {
        period: '2016-02',
        encours: 2778,
        valide: 2294,
        refuse: 2441,
        rembourse: 1000
    }, {
        period: '2016-03',
        encours: 4912,
        valide: 1969,
        refuse: 2501,
        rembourse: 1000
    }, {
        period: '2016-04',
        encours: 3767,
        valide: 3597,
        refuse: 5689,
        rembourse: 1000
    }, {
        period: '2016-05',
        encours: 6810,
        valide: 1914,
        refuse: 2293,
        rembourse: 1000
    }, {
        period: '2016-06',
        encours: 5670,
        valide: 4293,
        refuse: 1881,
        rembourse: 1000
    }, {
        period: '2016-07',
        encours: 4820,
        valide: 3795,
        refuse: 1588,
        rembourse: 1000
    }, {
        period: '2016-08',
        encours: 15073,
        valide: 5967,
        refuse: 5175,
        rembourse: 1000
    }, {
        period: '2016-09',
        encours: 10687,
        valide: 4460,
        refuse: 2028,
        rembourse: 1000
    }, {
        period: '2016-10',
        encours: 8432,
        valide: 5713,
        refuse: 1791,
        rembourse: 1000
    }],
    xkey: 'period',
    ykeys: ['encours', 'valide', 'rembourse', 'refuse'],
    labels: ['A Valider', 'En traitement compta', 'Remboursées', 'Refusées'],
    lineColors: ['#337ab7', '#f0ad4e', '#5cb85c', '#ff0000'],
    pointSize: 2,
    hideHover: 'auto',
    resize: true
});

let total = [{
    period: '2016-01',
    montant: 4466
}, {
    period: '2016-02',
    montant: 4372

}, {
    period: '2016-03',
    montant: 6952

}, {
    period: '2016-04',
    montant: 5867

}, {
    period: '2016-05',
    montant: 9185

}, {
    period: '2016-06',
    montant: 8180

}, {
    period: '2016-07',
    montant: 6497

}, {
    period: '2016-08',
    montant: 2203

}, {
    period: '2016-09',
    montant: 4487

}, {
    period: '2016-10',
    montant: 9830

}];

let vehicule = [{
    period: '2016-01',
    montant: 100
}, {
    period: '2016-02',
    montant: 452

}, {
    period: '2016-03',
    montant: 365

}, {
    period: '2016-04',
    montant: 767

}, {
    period: '2016-05',
    montant: 110

}, {
    period: '2016-06',
    montant: 10

}, {
    period: '2016-07',
    montant: 25

}, {
    period: '2016-08',
    montant: 180

}, {
    period: '2016-09',
    montant: 584

}, {
    period: '2016-10',
    montant: 102

}];

let deplacement = [
    {
        period: '2016-01',
        montant: 500

    }, {
        period: '2016-02',
        montant: 300

    }, {
        period: '2016-03',
        montant: 125

    }, {
        period: '2016-04',
        montant: 987

    }, {
        period: '2016-05',
        montant: 365

    }, {
        period: '2016-06',
        montant: 300

    }, {
        period: '2016-07',
        montant: 102

    }, {
        period: '2016-08',
        montant: 450

    }, {
        period: '2016-09',
        montant: 180

    }, {
        period: '2016-10',
        montant: 1000

    }];

let fournitures = [{
    period: '2016-01',
    montant: 400

}, {
    period: '2016-02',
    montant: 360

}, {
    period: '2016-03',
    montant: 400

}, {
    period: '2016-04',
    montant: 148

}, {
    period: '2016-05',
    montant: 900

}, {
    period: '2016-06',
    montant: 800

}, {
    period: '2016-07',
    montant: 600

}, {
    period: '2016-08',
    montant: 200

}, {
    period: '2016-09',
    montant: 1068

}, {
    period: '2016-10',
    montant: 1432

}];

let restauration = [{
    period: '2016-01',
    montant: 2666

}, {
    period: '2016-02',
    montant: 2778

}, {
    period: '2016-03',
    montant: 4912

}, {
    period: '2016-04',
    montant: 3767

}, {
    period: '2016-05',
    montant: 6810

}, {
    period: '2016-06',
    montant: 5670

}, {
    period: '2016-07',
    montant: 4820

}, {
    period: '2016-08',
    montant: 1073

}, {
    period: '2016-09',
    montant: 1087

}, {
    period: '2016-10',
    montant: 3432

}];

let hebergement = [{
    period: '2016-01',
    montant: 400

}, {
    period: '2016-02',
    montant: 360

}, {
    period: '2016-03',
    montant: 400

}, {
    period: '2016-04',
    montant: 148

}, {
    period: '2016-05',
    montant: 900

}, {
    period: '2016-06',
    montant: 800

}, {
    period: '2016-07',
    montant: 600

}, {
    period: '2016-08',
    montant: 200

}, {
    period: '2016-09',
    montant: 1068

}, {
    period: '2016-10',
    montant: 3432

}];

let divers = [{
    period: '2016-01',
    montant: 400

}, {
    period: '2016-02',
    montant: 122

}, {
    period: '2016-03',
    montant: 750

}, {
    period: '2016-04',
    montant: 50

}, {
    period: '2016-05',
    montant: 100

}, {
    period: '2016-06',
    montant: 600

}, {
    period: '2016-07',
    montant: 350

}, {
    period: '2016-08',
    montant: 100

}, {
    period: '2016-09',
    montant: 500

}, {
    period: '2016-10',
    montant: 432
}];

let secteurChange = (data, label) => {
    $('#morris-area-chart-2').empty();
    let area = {
        element: 'morris-area-chart-2',
        xkey: 'period',
        ykeys: ['montant'],
        labels: [label],
        lineColors: ['#5cb85c'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        data: data
    };
    Morris.Area(area);
    sectorTableUpdate(data);
};

let sectorTableUpdate = (data) => {
    $("#sectorTable > tbody").empty();
    data.forEach((element) => {
        $("#sectorTable > tbody").append(`<tr><td>${element.period}</td><td>${element.montant} €</td></tr>`);
    });
};

result.secteurChange = secteurChange;
result.diversData = divers;
result.fournituresData = fournitures;
result.deplacementData = deplacement;
result.vehiculeData = vehicule;
result.restaurationData = restauration;
result.hebergementData = hebergement;
result.totalData = total;

morris.datas = result;

secteurChange(total, "Tous les secteurs");
