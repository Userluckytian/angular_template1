import { Component, OnInit, AfterViewInit } from '@angular/core';

// 引入地图服务需要载入的包(必须要存在的四要素+css)
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';


// OSM(天地图，作为底图)一般也是必须要引入的。arcgis不一定
import TileArcGISRest from 'ol/source/TileArcGISRest';
// 构建弹出框
import Overlay from 'ol/Overlay';
import { toStringXY } from 'ol/coordinate';
import { fromLonLat, toLonLat } from 'ol/proj';
// 平滑矢量曲线（外加控制用户点击时才执行，双击界面绘制完成。关闭绘制）
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import Draw from 'ol/interaction/Draw';
import smooth from 'chaikin-smooth';
// 鼠标点位
import MousePosition from 'ol/control/MousePosition';
import { createStringXY } from 'ol/coordinate';
import { defaults as defaultControls } from 'ol/control';
import { Coordinate } from '@antv/g2/lib/dependents';

@Component({
  selector: 'app-mid-top',
  templateUrl: './mid-top.component.html',
  styleUrls: ['./mid-top.component.scss']
})
export class MidTopComponent implements OnInit, AfterViewInit {

  constructor() {

  }

  radioValue = 'A';

  map;
  view = new View({
    Reference: 'ESPG:4326',
    center: [12588621.3142, 3281288.7502],
    zoom: 4,
  });
  layers = [];
  // tslint:disable-next-line: letiable-name
  private initlayers_num = 0;
  private url = 'http://192.168.2.43:6080/arcgis/rest/services/CS/CS_BaseMap/MapServer';

  change() {
    this.radioValue = 'B';
  }

  ngOnInit() {

    // 这里假设的是加载地图的时候是两张图：一张天地图底图OSM，一张是自己处理的数据图。
    this.layers = [
      // 底图
      new TileLayer({
        source: new OSM()
      }),
      // 切片地图
      new TileLayer({
        source: new TileArcGISRest({
          url: this.url,
        }),
      }),
    ];

    this.loadMap();

  }

  // 平滑曲线
  makeSmooth(path, numIterations) {
    numIterations = Math.min(Math.max(numIterations, 1), 10);
    while (numIterations > 0) {
      path = smooth(path);
      numIterations--;
    }
    return path;
  }

  // 绘制曲线并平滑
  drawSmooth() {
    // 矢量加入
    const vectorSource = new VectorSource({});

    // 绘图
    const draw = new Draw({
      source: vectorSource,
      type: 'LineString'
    });

    // 在map中加入矢量图，source为vectorSource
    this.map.addLayer(
      // 矢量图
      new VectorLayer({
        source: vectorSource
      }));

    // 将给定的互动添加到地图中。
    this.map.addInteraction(draw);

    // draw.on(type:string, listener):以下是，用户在draw结束的时候，执行如下事件：
    draw.on('drawend', (event) => {

      // 获取构造的要素
      const feat = event.feature;
      const geometry = feat.getGeometry();
      const coords = geometry.getCoordinates();
      const smoothened = this.makeSmooth(coords, 5);  // parseInt(numIterations.value, 10) || 5);
      geometry.setCoordinates(smoothened);
      draw.setActive(false);
    });

  }


  // 根据openlayer的写法，建议将map，view，layers三部分分开写，并在最初的时候就先定义出来，这样有利于后期方法的使用。
  reset() {
    this.view.setCenter([12588621.3142, 3281288.7502]);

    this.view.setZoom(8);
  }

  // 加载地图
  loadMap() {
    // 获取初始化图层内容数量，在移除时不能被移除
    this.initlayers_num = this.layers.length;

    // 加载坐标信息
    // tslint:disable-next-line: prefer-const
    let mousePositionControl = new MousePosition({
      coordinateFormat: createStringXY(4),
      projection: 'EPSG:4326',
      target: document.getElementById('mouse-position'),
      undefinedHTML: '&nbsp;'
    });

    // 其实可以把layer的内容放到new Map里面去写。具体看个人吧。
    this.map = new Map({
      controls: defaultControls().extend([mousePositionControl]),
      layers: this.layers,
      target: 'home_map',
      view: this.view
    });

  }

  // 清空绘制
  clear() {
    const layerss = this.map.getLayers();
    const length: number = layerss.array_.length;
    if (length > this.initlayers_num) {
      this.map.removeLayer(layerss.array_[length - 1]);
    }
    else {
      return;
    }
  }

  // 信息展示框
  ngAfterViewInit() {
    // 获取div框
    const container = document.getElementById('popup');

    let overlay = new Overlay({
      element: container
    });

    this.map.on('singleclick', function (evt) {
      let coordinate = evt.coordinate;
      let hdms = toStringXY(toLonLat(coordinate, 'EPSG:3857'), 4);
      container.innerHTML = '<code>' + hdms + '</code>';
      overlay.setPosition(coordinate);
    });
    this.map.addOverlay(overlay);
  }
}
