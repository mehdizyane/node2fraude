$(function() {

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
        lineColors : ['#337ab7', '#5cb85c', '#f0ad4e','#ff0000'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Area({
        element: 'morris-area-chart-2',
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
        lineColors : ['#337ab7', '#5cb85c', '#f0ad4e','#ff0000'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        behaveLikeLine: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });
    
});
