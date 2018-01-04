# jVectorMapKibanaCountry

An Offline country code map visualizer for Kibana 6.1.
Prototype only. JVectorMap crashes from time to time with this version of kibana.
Same functionality exists natively as of version 5.5 of Kibana. See (https://mannekentech.com/2017/09/05/kibana-5-5-region-map/) for further instructions.

Version for 5 available here: https://github.com/snuids/Elastic-5.0-Country-Map-Visualizer
Version for 4.4 available here: https://github.com/snuids/jVectorMapKibanaCountry

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

Simply unzip the content in the plugin folder of Kibana. The aggregation key must match the country code as defined in jVectorMap. (US=United States, GB=Great Britain e.t.c.)

The "Normalize Input To UpperCase" simply aggregates lower and upper case values together. For example a record set with "us":2 and "US":1 becomes "US":3.

Maps provided by: http://jvectormap.com/ are not free of charge for commercial products.

Screenshots here: https://github.com/snuids/jVectorMapKibanaCountry/wiki

More info on docker and kibana here: http://pi2s.wordpress.com

Copyright 2016 Arnaud Marchand
