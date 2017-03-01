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
    lineColors: ['#337ab7', '#5cb85c', '#f0ad4e', '#ff0000'],
    pointSize: 2,
    hideHover: 'auto',
    resize: true
});

let deplacement = [{
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

let fournituresData = [
    {
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
        montant: 10687

    }, {
        period: '2016-10',
        montant: 8432

    }];

let diversData = [{
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
    montant: 15073

}, {
    period: '2016-09',
    montant: 10687

}, {
    period: '2016-10',
    montant: 8432

}];

let secteurChange = (data, label) => {
    $('#morris-area-chart-2').empty();
    let area = {
        element: 'morris-area-chart-2',
        xkey: 'period',
        ykeys: ['montant'],
        labels: [label],
        lineColors: ['#337ab7'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        data: data
    };
    Morris.Area(area);
};
result.secteurChange = secteurChange;
result.diversData = diversData;
result.fournituresData = fournituresData;
result.deplacement = deplacement;

morris.datas = result;

secteurChange(deplacement);
