$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010 Q1',
            encours: 2666,
            valide: null,
            refuse: 2647
        }, {
            period: '2010 Q2',
            encours: 2778,
            valide: 2294,
            refuse: 2441
        }, {
            period: '2010 Q3',
            encours: 4912,
            valide: 1969,
            refuse: 2501
        }, {
            period: '2010 Q4',
            encours: 3767,
            valide: 3597,
            refuse: 5689
        }, {
            period: '2011 Q1',
            encours: 6810,
            valide: 1914,
            refuse: 2293
        }, {
            period: '2011 Q2',
            encours: 5670,
            valide: 4293,
            refuse: 1881
        }, {
            period: '2011 Q3',
            encours: 4820,
            valide: 3795,
            refuse: 1588
        }, {
            period: '2011 Q4',
            encours: 15073,
            valide: 5967,
            refuse: 5175
        }, {
            period: '2012 Q1',
            encours: 10687,
            valide: 4460,
            refuse: 2028
        }, {
            period: '2012 Q2',
            encours: 8432,
            valide: 5713,
            refuse: 1791
        }],
        xkey: 'period',
        ykeys: ['encours', 'valide', 'refuse'],
        labels: ['En cours', 'Validées', 'Refusées'],
        lineColors : ['#0066ff', '#00b300', '#ff0000'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
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
