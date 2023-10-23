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

    //this.myLat = 37.330026;
    //this.myLon = -79.535972;
    this.myLat = 37.329873;
    this.myLon = -79.536128;
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
      //var minZoomLevel = 17;
      var minZoomLevel = 17.5;

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

      /*var myMarker = new MarkerWithLabel({
        position: new google.maps.LatLng(37.330169, -79.537296),
        map: this.map,
        labelContent: "1",
        labelAnchor: new google.maps.Point(15, 65),
        labelInBackground: false,
        icon: './assets/labels/symbols/blue.png'
      });*/

      /*console.log(google.maps.SymbolPath.CIRCLE);
      var icon = {
        path: "M -1,0 A 1,1 0 0 0 1,0 1,1 0 0 0 -1,0 z",
        fillOpacity: 1,
        fillColor: '#214281',
        strokeColor: "#214281",
        strokeWeight: 1.0,
        scale: 11
      };

      var testMarker = new google.maps.Marker({
        position: new google.maps.LatLng(37.330169, -79.537296),
        icon: icon,
        //map: this.map,
        label: {
          text: "1",
          color: "white"
        }
      });

      testMarker.setMap(this.map);*/

      for (var i = 0; i < this.mapMarkers.length; i++) {

        /*image = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=' + this.mapMarkers[i]['number'] + '|FF0000|000000';
        var imageIcon = {
          url: image,
          size: new google.maps.Size(42, 68),
          orgin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(21, 34)
        };*/

        /*let marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.mapMarkers[i]['lat'], this.mapMarkers[i]['lng']),
            label: "" + this.mapMarkers[i]['number']
        });

        this.allMarkers.push(marker);

        marker.setMap(this.map);
        this.addInfoWindowToMarker(marker, this.mapMarkers[i]['info']);*/
        let circleColor;
        let labelColor;

        if (this.mapMarkers[i]['section'] == "Estes Plaza") {
          circleColor = '#008b3a';
          labelColor = 'white';
        } else if (this.mapMarkers[i]['section'] == "Gray Plaza") {
          circleColor = '#214281';
          labelColor = 'white';
        } else if (this.mapMarkers[i]['section'] == "Stettinius Parade") {
          circleColor = '#f49200';
          labelColor = 'white';
        } else if (this.mapMarkers[i]['section'] == "Reynolds Garden") {
          circleColor = '#d32324';
          labelColor = 'white';
        } else if (this.mapMarkers[i]['section'] == "Other" || this.mapMarkers[i]['section'] == "OtherIcon") {
          circleColor = '#FFF';
          labelColor = 'black';
        }

        
        var icon = {
          path: "M -1,0 A 1,1 0 0 0 1,0 1,1 0 0 0 -1,0 z",
          fillOpacity: 1,
          fillColor: circleColor,
          strokeColor: "#FFF",
          strokeWeight: 1,
          scale: 14,
          size: new google.maps.Size(40, 40),
          scaledSize: new google.maps.Size(32, 32),
        };
        if (this.mapMarkers[i]['section'] == "OtherIcon") {

          if (this.mapMarkers[i]['info'] == "Smoking Section") {

            var smokingIcon = {
              url: "./assets/labels/symbols/smoking.png",
              anchor: new google.maps.Point(16, 16),
              origin: new google.maps.Point(0, 0),
              scale: 14,
              size: new google.maps.Size(36, 36),
              scaledSize: new google.maps.Size(30, 30),
            };

            let marker = new google.maps.Marker({
              position: new google.maps.LatLng(this.mapMarkers[i]['lat'], this.mapMarkers[i]['lng']),
              icon: smokingIcon,

            });

            this.allMarkers.push(marker);

            marker.setMap(this.map);
            this.addInfoWindowToMarker(marker, this.mapMarkers[i]['info']);

          } else if (this.mapMarkers[i]['info'] == "Bobbie & Peggy Johnson Quonset Hut Gift Shop") {
            
            var shoppingIcon = {
              url: "./assets/labels/symbols/shoppingBag.png",
              anchor: new google.maps.Point(16, 16),
              origin: new google.maps.Point(0, 0),
              scale: 14,
              size: new google.maps.Size(36, 36),
              scaledSize: new google.maps.Size(30, 30),
            };

            let marker = new google.maps.Marker({
              position: new google.maps.LatLng(this.mapMarkers[i]['lat'], this.mapMarkers[i]['lng']),
              icon: shoppingIcon,

            });

            this.allMarkers.push(marker);

            marker.setMap(this.map);
            this.addInfoWindowToMarker(marker, this.mapMarkers[i]['info']);
          
          }  else {

            let thisIconFontSize = "18px";

            if(this.mapMarkers[i]['info'] == "Men's Restroom" || this.mapMarkers[i]['info'] == "Women's Restroom") { thisIconFontSize = '22px' }

            let marker = new google.maps.Marker({
              position: new google.maps.LatLng(this.mapMarkers[i]['lat'], this.mapMarkers[i]['lng']),
              icon: icon,
              //map: this.map,
              label: {
                //text: String.fromCharCode(this.mapMarkers[i]['number']),
                text: "" + String.fromCharCode(this.mapMarkers[i]['number']),
                fontFamily: 'Ionicons',
                fontSize: thisIconFontSize,
                //fontWeight: '300',
                color: "black"
              }
            });

            this.allMarkers.push(marker);

            marker.setMap(this.map);
            this.addInfoWindowToMarker(marker, this.mapMarkers[i]['info']);

          }

        } else {
  
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(this.mapMarkers[i]['lat'], this.mapMarkers[i]['lng']),
            icon: icon,
            //map: this.map,
            label: {
              text: "" + this.mapMarkers[i]['number'],
              color: labelColor
            }
          });

          this.allMarkers.push(marker);

          marker.setMap(this.map);
          this.addInfoWindowToMarker(marker, this.mapMarkers[i]['info']);

        }

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
