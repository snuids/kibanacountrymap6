import {
    uiModules
} from 'ui/modules';
const module = uiModules.get('kibana/transform_vis', ['kibana']);

module.controller('CountryMapVisController', function ($scope, Private) {


    $scope.$watch('esResponse', function (resp) {
        if (!resp) {
            $scope.locations = null;
            return;
        }

        var rows = resp.tables[0].rows;
        var metrics = [];

        for (var r in rows) {
            var row = rows[r];

            if (row.length > 1) {
                metrics.push({
                    "label": row[0],
                    "value": row[1]
                });
            }
        }
        $scope.locations = metrics;

        if ($scope.vis.params.normalizeInput) {
            //console.log("TOTO:"+JSON.stringify($scope.locations));
            var locshm = {};
            var locs = $scope.locations;
            for (var i = 0; i < locs.length; i++) {
                locs[i].label = locs[i].label.toUpperCase();
                if (locshm[locs[i].label] != null)
                    locshm[locs[i].label].value += locs[i].value;
                else
                    locshm[locs[i].label] = locs[i];
            }

            var locs2 = [];

            for (var type in locshm)
                locs2.push(locshm[type]);

            $scope.locations = locs2;
        }

        var data = {};

        /*angular.forEach($scope.locations, function (value, key) {
            if ((value != undefined) && (value.label != undefined)&& (value.value != null))
                data[value.label.toUpperCase()] = value.value;

        });*/
        // Draw Map

        console.log("TTTTTTTTT");
        console.log(JSON.stringify($scope.locations));

        var data = {};

        for (var i in $scope.locations) {
            var dat = $scope.locations[i];
            if ((dat != undefined) &&(dat.value!=null)){
                data[dat.label] = dat.value;
            }
        }


        console.log("TTTTTTTTT2");
        console.log(JSON.stringify(data));
        //console.log(data);

        try {
            $('#map').vectorMap('get', 'mapObject').remove();
        } catch (err) {}



        $('#map').vectorMap({
            map: $scope.vis.params.selectedMap + '_mill',
            series: {
                regions: [{
                    values: data,
                    scale: [$scope.vis.params.countryColorMin, $scope.vis.params.countryColorMax],
                    normalizeFunction: 'polynomial'
                }]
            },
            onRegionTipShow: function (e, el, code) {


                if (data[code] == undefined)
                    $scope.hint = null
                else
                    $scope.hint = code + ":" + data[code]

                el.html(el.html() + ' (' + data[code] + ')');
            },
            backgroundColor: $scope.vis.params.mapBackgroundColor
        });
        // End of draw map
        console.log("Done");

    });
});