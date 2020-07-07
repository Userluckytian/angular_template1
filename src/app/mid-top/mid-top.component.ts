import { Component, OnInit } from '@angular/core';

// 引入地图服务需要载入的包(必须要存在的四要素+css)
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
// OSM一般也是必须要引入的。arcgis不一定
import TileArcGISRest from 'ol/source/TileArcGISRest';




@Component({
  selector: 'app-mid-top',
  templateUrl: './mid-top.component.html',
  styleUrls: ['./mid-top.component.scss']
})
export class MidTopComponent implements OnInit {

  constructor() {

   }

  radioValue = 'A';

    private url: string = 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/' +
    'Specialty/ESRI_StateCityHighway_USA/MapServer';

  change(){
    this.radioValue = 'B';
  }

  ngOnInit() {


    // 这里假设的是加载地图的时候是两张图：一张天地图底图OSM，一张是自己处理的数据图。
      const layers = [
      new TileLayer({
        source: new OSM()
      }),
      new TileLayer({
        extent: [112.73788745900004, 27.85257523000007, 113.54881780000005, 28.56324150900008],
        source: new TileArcGISRest({
          url: this.url,
        })
      })
    ];

    // 其实可以把layer的内容放到new Map里面去写。具体看个人吧。
      const map = new Map({
      layers,
      target: 'home_map',
      view: new View({
        Reference: 'ESPG:4490',
        center: [113.17420983700003, 28.176664136000056],
        zoom: 4,
      })
    });

  }

}
