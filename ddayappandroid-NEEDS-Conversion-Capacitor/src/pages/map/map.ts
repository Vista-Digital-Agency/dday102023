import { Component } from '@angular/core';
import { IonicPage, MenuController, Platform } from 'ionic-angular';
import { MarkersProvider } from '../../providers/markers/markers';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  platform: any;
  map: any;
  myLat;
  myLon;
  mapMarkers;
  labels;

  setPosition: any;
  myLoc: any;
  myMarker: any;

  allMarkers = [];
  allLabels = [];
  infoWindows = [];

  constructor(platform: Platform,
              public menu: MenuController,
              private markersProvider: MarkersProvider, 
              private geolocation: Geolocation) {
    this.platform = platform;
    this.mapMarkers = this.markersProvider.getMarkers();
    this.labels = this.markersProvider.getLabels();
    this.menu.swipeEnable(false);
  }

  ionViewDidEnter() {
    this.initializeMap();

    this.myLat = 37.330026;
    this.myLon = -79.535972;
  }

  closeAllInfoWindows() {
    for(let window of this.infoWindows) {
      window.close();
    }
  }

  addInfoWindowToMarker(marker, content) {
    var infoWindowContent = '<div id="content"><div id="infoBody"><p>' + content + '</p></div></div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }

  initializeMap() {
    this.platform.ready().then(() => {
      var minZoomLevel = 17;

      this.map = new google.maps.Map(document.getElementById('map'), {
          zoom: minZoomLevel,
          center: new google.maps.LatLng(this.myLat, this.myLon),
          mapTypeId: google.maps.MapTypeId.SATELLITE,
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false
      });

      var image;  

      

      for (var x = 0; x < this.labels.length; x++) {
  
        image = './assets/labels/' + this.labels[x]['image'] + '.png';
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.labels[x]['lat'], this.labels[x]['lng']),
            icon: image
        });

        this.allLabels.push(marker);

        marker.setMap(this.map);

        marker.setVisible(false);

      }

      for (var i = 0; i < this.mapMarkers.length; i++) {

        /*image = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + this.mapMarkers[i]['number'] + '|FF0000|000000';
        var imageIcon = {
          url: image,
          size: new google.maps.Size(42, 68),
          orgin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(21, 34)
        };*/

        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.mapMarkers[i]['lat'], this.mapMarkers[i]['lng']),
            label: "" + this.mapMarkers[i]['number']
        });

        this.allMarkers.push(marker);

        marker.setMap(this.map);
        this.addInfoWindowToMarker(marker, this.mapMarkers[i]['info']);

      } 

        this.setPosition = 0;
        
          let options = {
            enableHighAccuracy: true
          };
    
          let watch = this.geolocation.watchPosition(options);
    
          watch.subscribe((data) => {
            
            let updatelocation = new google.maps.LatLng(data.coords.latitude,data.coords.longitude);
    
            if (this.setPosition == 0) {
              this.myMarker = new google.maps.Marker({
                position: updatelocation,
                icon: {
                  path: google.maps.SymbolPath.CIRCLE,
                  fillColor: '#0E77E9',
                  fillOpacity: 1,
                  strokeColor: '#FFFFFF',
                  strokeWeight: 1,
                  scale: 10
                },
                map: this.map
              });
              this.myLoc = updatelocation;
    
              this.setPosition = 1;
            } else {
              this.myLoc = updatelocation;
              this.myMarker.setPosition(updatelocation);
            }
            
          });
      
    });
  }

  showMarkers() {
    for (var m = 0; m < this.allMarkers.length; m++) {
      this.allMarkers[m].setVisible(true);
    }

    for (var l = 0; l < this.allLabels.length; l++) {
      this.allLabels[l].setVisible(false);
    }
  }

  showLabels() {
    for (var m = 0; m < this.allMarkers.length; m++) {
      this.allMarkers[m].setVisible(false);
    }

    for (var l = 0; l < this.allLabels.length; l++) {
      this.allLabels[l].setVisible(true);
    }
  }
  
}
