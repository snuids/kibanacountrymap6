import './jquery-jvectormap-2.0.3.css';


import mainTemplate from './countrymapvis.html';
import optionsTemplate from './countrymapvisparams.html';
import './countrymapviscontroller.js';

import './jquery-jvectormap-2.0.3.min.js';
import './jquery-jvectormap-world-mill.js';
import './jquery-jvectormap-europe-mill.js';


import {CATEGORY} from 'ui/vis/vis_category';
import {VisFactoryProvider} from 'ui/vis/vis_factory';
import {VisTypesRegistryProvider} from 'ui/registry/vis_types';
import {VisSchemasProvider} from 'ui/vis/editors/default/schemas';

function TestVisProvider(Private) {
  const VisFactory = Private(VisFactoryProvider);
  const Schemas = Private(VisSchemasProvider);

  return VisFactory.createAngularVisualization({
    name: 'countrymap',
    title: 'Offline Country Map',
    icon: 'fa fa-map',
    description: 'Offline Country Map Visualizer using jVectormap.',
    category: CATEGORY.OTHER,
    //visualization: VisController,

    visConfig: {
      defaults: {
        mapBackgroundColor:"#C0C0FF",countryColorMin:"#00FF00",countryColorMax:"#FF0000"
				,selectedMap:'world',maps:['world','europe'],normalizeInput:false
      },
      template: mainTemplate
    },
    editorConfig: {
      optionsTemplate: optionsTemplate,
      schemas: new Schemas([
				{
					group: 'metrics',
					name: 'countryvalue',
					title: 'Country Value',
					min: 1,
					max: 1,
					aggFilter: ['count', 'avg', 'sum', 'min', 'max', 'cardinality', 'std_dev']
				},
				{
					group: 'buckets',
					name: 'countries',
					title: 'Countries',
					min: 1,
					max: 1,
					aggFilter: '!geohash_grid'
				}
			]),
    }
  });
}
VisTypesRegistryProvider.register(TestVisProvider);