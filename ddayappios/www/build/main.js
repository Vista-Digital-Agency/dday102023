webpackJsonp([0],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_info_modal_general_info_modal__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_modal_welcome_modal__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bedford_boys_modal_bedford_boys_modal__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dday_today_modal_dday_today_modal__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__at_memorial_modal_at_memorial_modal__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__support_modal_support_modal__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfoPage = /** @class */ (function () {
    function InfoPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.genInfoModal = __WEBPACK_IMPORTED_MODULE_2__general_info_modal_general_info_modal__["a" /* GeneralInfoModalPage */];
        this.welcomeModal = __WEBPACK_IMPORTED_MODULE_3__welcome_modal_welcome_modal__["a" /* WelcomeModalPage */];
        this.bedfordBoysModal = __WEBPACK_IMPORTED_MODULE_4__bedford_boys_modal_bedford_boys_modal__["a" /* BedfordBoysModalPage */];
        this.ddayTodayModal = __WEBPACK_IMPORTED_MODULE_5__dday_today_modal_dday_today_modal__["a" /* DdayTodayModalPage */];
        this.atMemorialModal = __WEBPACK_IMPORTED_MODULE_6__at_memorial_modal_at_memorial_modal__["a" /* AtMemorialModalPage */];
        this.supportModal = __WEBPACK_IMPORTED_MODULE_7__support_modal_support_modal__["a" /* SupportModalPage */];
    }
    InfoPage.prototype.openModal = function (modal) {
        var myModal = this.modalCtrl.create(modal, { 'modal': 'modal' });
        myModal.present();
    };
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/info/info.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-grid>\n        <ion-row>\n          <ion-col id="genInfo" (click)="openModal(genInfoModal)">\n            <div>\n                <h2><span>General Information</span></h2>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col id="welcome" (click)="openModal(welcomeModal)">\n            <div>\n              <h2><span>Welcome To D-Day</span></h2>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col id="bedfordBoys" (click)="openModal(bedfordBoysModal)">\n            <div>\n              <h2><span>The "Bedford Boys"</span></h2>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col id="ddayToday" (click)="openModal(ddayTodayModal)">\n            <div>\n              <h2><span>From D-Day To Today</span></h2>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col id="whileAtMemorial" (click)="openModal(atMemorialModal)">\n            <div>\n              <h2><span>While At The National D-Day Memorial</span></h2>\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col id="support" (click)="openModal(supportModal)">\n            <div>\n              <h2><span>Give</span></h2>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/info/info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SupportModalPage = /** @class */ (function () {
    function SupportModalPage(viewCtrl, browser, navParams) {
        this.viewCtrl = viewCtrl;
        this.browser = browser;
        this.navParams = navParams;
        this.options = {
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            closebuttoncaption: 'Close',
            toolbar: 'yes'
        };
        if (this.navParams.get('modal')) {
            this.modal = true;
        }
        else {
            this.modal = false;
        }
    }
    SupportModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SupportModalPage.prototype.website = function (link) {
        this.browser.create("" + link, "_system", this.options);
    };
    SupportModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-support-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/support-modal/support-modal.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <button ion-button menuToggle  *ngIf="!modal">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Give\n    </ion-title>\n    <ion-buttons end *ngIf="modal">\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="modal" padding>\n\n  <div class="con">\n    <img src="./assets/imgs/support.jpg">\n\n    <div>\n        The Memorial does not receive federal or state funding and relies on donations to operate. All proceeds from Gift Shop sales support the Memorial. \n        You are invited to contribute toward the establishment of facilities that will enable the National D-Day Memorial Foundation to continue to expand \n        upon the educational initiatives that have been central in the memorialization effort. By supporting the Foundation in telling the D-Day story today \n        you ensure its retelling tomorrow.\n    </div>\n\n    <div>\n        <h4>National D-Day Memorial Foundation</h4>\n\n        <div>\n          <button color="ddayBlue" full ion-button (click)="website(\'https://www.dday.org/make-a-donation-online/\')">Give</button>\n        </div>\n\n      <p text-center>\n        P.O. Box 77, Bedford, Virginia 24523\n      </p>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/support-modal/support-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SupportModalPage);
    return SupportModalPage;
}());

//# sourceMappingURL=support-modal.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_markers_markers__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapPage = /** @class */ (function () {
    function MapPage(platform, menu, markersProvider, geolocation) {
        this.menu = menu;
        this.markersProvider = markersProvider;
        this.geolocation = geolocation;
        this.allMarkers = [];
        this.allLabels = [];
        this.infoWindows = [];
        this.platform = platform;
        this.mapMarkers = this.markersProvider.getMarkers();
        this.labels = this.markersProvider.getLabels();
        this.menu.swipeEnable(false);
    }
    MapPage.prototype.ionViewDidEnter = function () {
        this.initializeMap();
        //this.myLat = 37.330026;
        //this.myLon = -79.535972;
        this.myLat = 37.329873;
        this.myLon = -79.536128;
    };
    MapPage.prototype.closeAllInfoWindows = function () {
        for (var _i = 0, _a = this.infoWindows; _i < _a.length; _i++) {
            var window_1 = _a[_i];
            window_1.close();
        }
    };
    MapPage.prototype.addInfoWindowToMarker = function (marker, content) {
        var _this = this;
        var infoWindowContent = '<div id="content"><div id="infoBody"><p>' + content + '</p></div></div>';
        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', function () {
            _this.closeAllInfoWindows();
            infoWindow.open(_this.map, marker);
        });
        this.infoWindows.push(infoWindow);
    };
    MapPage.prototype.initializeMap = function () {
        var _this = this;
        this.platform.ready().then(function () {
            //var minZoomLevel = 17;
            var minZoomLevel = 17.5;
            _this.map = new google.maps.Map(document.getElementById('map'), {
                zoom: minZoomLevel,
                center: new google.maps.LatLng(_this.myLat, _this.myLon),
                mapTypeId: google.maps.MapTypeId.SATELLITE,
                streetViewControl: false,
                fullscreenControl: false,
                mapTypeControl: false
            });
            var image;
            for (var x = 0; x < _this.labels.length; x++) {
                image = './assets/labels/' + _this.labels[x]['image'] + '.png';
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(_this.labels[x]['lat'], _this.labels[x]['lng']),
                    icon: image
                });
                _this.allLabels.push(marker);
                marker.setMap(_this.map);
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
            for (var i = 0; i < _this.mapMarkers.length; i++) {
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
                var circleColor = void 0;
                var labelColor = void 0;
                if (_this.mapMarkers[i]['section'] == "Estes Plaza") {
                    circleColor = '#008b3a';
                    labelColor = 'white';
                }
                else if (_this.mapMarkers[i]['section'] == "Gray Plaza") {
                    circleColor = '#214281';
                    labelColor = 'white';
                }
                else if (_this.mapMarkers[i]['section'] == "Stettinius Parade") {
                    circleColor = '#f49200';
                    labelColor = 'white';
                }
                else if (_this.mapMarkers[i]['section'] == "Reynolds Garden") {
                    circleColor = '#d32324';
                    labelColor = 'white';
                }
                else if (_this.mapMarkers[i]['section'] == "Other" || _this.mapMarkers[i]['section'] == "OtherIcon") {
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
                if (_this.mapMarkers[i]['section'] == "OtherIcon") {
                    if (_this.mapMarkers[i]['info'] == "Smoking Section") {
                        var smokingIcon = {
                            url: "./assets/labels/symbols/smoking.png",
                            anchor: new google.maps.Point(16, 16),
                            origin: new google.maps.Point(0, 0),
                            scale: 14,
                            size: new google.maps.Size(36, 36),
                            scaledSize: new google.maps.Size(30, 30),
                        };
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(_this.mapMarkers[i]['lat'], _this.mapMarkers[i]['lng']),
                            icon: smokingIcon,
                        });
                        _this.allMarkers.push(marker);
                        marker.setMap(_this.map);
                        _this.addInfoWindowToMarker(marker, _this.mapMarkers[i]['info']);
                    }
                    else if (_this.mapMarkers[i]['info'] == "Bobbie & Peggy Johnson Quonset Hut Gift Shop") {
                        var shoppingIcon = {
                            url: "./assets/labels/symbols/shoppingBag.png",
                            anchor: new google.maps.Point(16, 16),
                            origin: new google.maps.Point(0, 0),
                            scale: 14,
                            size: new google.maps.Size(36, 36),
                            scaledSize: new google.maps.Size(30, 30),
                        };
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(_this.mapMarkers[i]['lat'], _this.mapMarkers[i]['lng']),
                            icon: shoppingIcon,
                        });
                        _this.allMarkers.push(marker);
                        marker.setMap(_this.map);
                        _this.addInfoWindowToMarker(marker, _this.mapMarkers[i]['info']);
                    }
                    else {
                        var thisIconFontSize = "18px";
                        if (_this.mapMarkers[i]['info'] == "Men's Restroom" || _this.mapMarkers[i]['info'] == "Women's Restroom") {
                            thisIconFontSize = '22px';
                        }
                        var marker = new google.maps.Marker({
                            position: new google.maps.LatLng(_this.mapMarkers[i]['lat'], _this.mapMarkers[i]['lng']),
                            icon: icon,
                            //map: this.map,
                            label: {
                                //text: String.fromCharCode(this.mapMarkers[i]['number']),
                                text: "" + String.fromCharCode(_this.mapMarkers[i]['number']),
                                fontFamily: 'Ionicons',
                                fontSize: thisIconFontSize,
                                //fontWeight: '300',
                                color: "black"
                            }
                        });
                        _this.allMarkers.push(marker);
                        marker.setMap(_this.map);
                        _this.addInfoWindowToMarker(marker, _this.mapMarkers[i]['info']);
                    }
                }
                else {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(_this.mapMarkers[i]['lat'], _this.mapMarkers[i]['lng']),
                        icon: icon,
                        //map: this.map,
                        label: {
                            text: "" + _this.mapMarkers[i]['number'],
                            color: labelColor
                        }
                    });
                    _this.allMarkers.push(marker);
                    marker.setMap(_this.map);
                    _this.addInfoWindowToMarker(marker, _this.mapMarkers[i]['info']);
                }
            }
            _this.setPosition = 0;
            var options = {
                enableHighAccuracy: true
            };
            var watch = _this.geolocation.watchPosition(options);
            watch.subscribe(function (data) {
                var updatelocation = new google.maps.LatLng(data.coords.latitude, data.coords.longitude);
                if (_this.setPosition == 0) {
                    _this.myMarker = new google.maps.Marker({
                        position: updatelocation,
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            fillColor: '#0E77E9',
                            fillOpacity: 1,
                            strokeColor: '#FFFFFF',
                            strokeWeight: 1,
                            scale: 10
                        },
                        map: _this.map
                    });
                    _this.myLoc = updatelocation;
                    _this.setPosition = 1;
                }
                else {
                    _this.myLoc = updatelocation;
                    _this.myMarker.setPosition(updatelocation);
                }
            });
        });
    };
    MapPage.prototype.showMarkers = function () {
        for (var m = 0; m < this.allMarkers.length; m++) {
            this.allMarkers[m].setVisible(true);
        }
        for (var l = 0; l < this.allLabels.length; l++) {
            this.allLabels[l].setVisible(false);
        }
    };
    MapPage.prototype.showLabels = function () {
        for (var m = 0; m < this.allMarkers.length; m++) {
            this.allMarkers[m].setVisible(false);
        }
        for (var l = 0; l < this.allLabels.length; l++) {
            this.allLabels[l].setVisible(true);
        }
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/map/map.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Map</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div #map id="map"></div>\n</ion-content>\n\n<!--<ion-footer>\n  <ion-toolbar>\n    <ion-buttons>\n      <button ion-button (click)="showMarkers()">Markers</button>\n      <button ion-button (click)="showLabels()">Labels</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>-->'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/map/map.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_markers_markers__["a" /* MarkersProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets_modal_tickets_modal__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__group_modal_group_modal__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hours_modal_hours_modal__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__special_openings_modal_special_openings_modal__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VisitingPage = /** @class */ (function () {
    function VisitingPage(modalCtrl, browser) {
        this.modalCtrl = modalCtrl;
        this.browser = browser;
        this.ticketsModal = __WEBPACK_IMPORTED_MODULE_2__tickets_modal_tickets_modal__["a" /* TicketsModalPage */];
        this.groupModal = __WEBPACK_IMPORTED_MODULE_3__group_modal_group_modal__["a" /* GroupModalPage */];
        this.hoursModal = __WEBPACK_IMPORTED_MODULE_4__hours_modal_hours_modal__["a" /* HoursModalPage */];
        this.specialOpeningModal = __WEBPACK_IMPORTED_MODULE_5__special_openings_modal_special_openings_modal__["a" /* SpecialOpeningsModalPage */];
        this.options = {
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            closebuttoncaption: 'Close',
            toolbar: 'yes'
        };
    }
    VisitingPage.prototype.openModal = function (modal) {
        var myModal = this.modalCtrl.create(modal);
        myModal.present();
    };
    VisitingPage.prototype.openFieldTrips = function () {
        this.browser.create("https://www.dday.org/field-trips/", "_system", this.options);
    };
    VisitingPage.prototype.openMembership = function () {
        this.browser.create("https://www.dday.org/overlord-society/", "_system", this.options);
    };
    VisitingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-visiting',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/visiting/visiting.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Visiting</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col id="purchaseTickets" (click)="openModal(ticketsModal)">\n        <div>\n            <h2><span>Purchase Tickets</span></h2>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col id="hours" (click)="openModal(hoursModal)">\n        <div>\n          <h2><span>Memorial Hours</span></h2>\n        </div>\n      </ion-col>\n    </ion-row>\n    <!-- <ion-row>\n      <ion-col id="group" (click)="openModal(groupModal)">\n        <div>\n          <h2><span>Group Tours</span></h2>\n        </div>\n      </ion-col>\n    </ion-row> -->\n    <ion-row>\n      <ion-col id="fieldTrips" (click)="openFieldTrips()">\n        <div>\n          <h2><span>Field Trips</span></h2>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col id="membership" (click)="openMembership()">\n        <div>\n          <h2><span>Membership</span></h2>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/visiting/visiting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], VisitingPage);
    return VisitingPage;
}());

//# sourceMappingURL=visiting.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		248
	],
	"../pages/at-memorial-modal/at-memorial-modal.module": [
		246
	],
	"../pages/bedford-boys-modal/bedford-boys-modal.module": [
		250
	],
	"../pages/brick-search-modal/brick-search-modal.module": [
		252
	],
	"../pages/brick/brick.module": [
		254
	],
	"../pages/cherry-trees-search-modal/cherry-trees-search-modal.module": [
		261
	],
	"../pages/cherry-trees/cherry-trees.module": [
		258
	],
	"../pages/dday-today-modal/dday-today-modal.module": [
		267
	],
	"../pages/event-modal/event-modal.module": [
		262
	],
	"../pages/events/events.module": [
		324
	],
	"../pages/faq/faq.module": [
		269
	],
	"../pages/general-info-modal/general-info-modal.module": [
		416
	],
	"../pages/group-modal/group-modal.module": [
		418
	],
	"../pages/homefront-tour-slides/homefront-tour-slides.module": [
		420
	],
	"../pages/homefront-tour/homefront-tour.module": [
		426
	],
	"../pages/hours-modal/hours-modal.module": [
		422
	],
	"../pages/info/info.module": [
		424
	],
	"../pages/map/map.module": [
		428
	],
	"../pages/memorial-search-modal/memorial-search-modal.module": [
		431
	],
	"../pages/partners/partners.module": [
		435
	],
	"../pages/special-openings-modal/special-openings-modal.module": [
		433
	],
	"../pages/support-modal/support-modal.module": [
		437
	],
	"../pages/tickets-modal/tickets-modal.module": [
		438
	],
	"../pages/visiting/visiting.module": [
		442
	],
	"../pages/wall/wall.module": [
		440
	],
	"../pages/welcome-modal/welcome-modal.module": [
		443
	],
	"../pages/welcome/welcome.module": [
		444
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtMemorialModalPageModule", function() { return AtMemorialModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__at_memorial_modal__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AtMemorialModalPageModule = /** @class */ (function () {
    function AtMemorialModalPageModule() {
    }
    AtMemorialModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__at_memorial_modal__["a" /* AtMemorialModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__at_memorial_modal__["a" /* AtMemorialModalPage */]),
            ],
        })
    ], AtMemorialModalPageModule);
    return AtMemorialModalPageModule;
}());

//# sourceMappingURL=at-memorial-modal.module.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AtMemorialModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AtMemorialModalPage = /** @class */ (function () {
    function AtMemorialModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    AtMemorialModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AtMemorialModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-at-memorial-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/at-memorial-modal/at-memorial-modal.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>\n      While At The Memorial\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="modal" padding>\n  <div class="con">\n    <img src="./assets/imgs/memorial.jpg">\n    <div>\n        This national memorial stands upon earth consecrated in solemn tribute to the Allied Forces who participated in D-Day, 6 June 1944.\n        The Memorial site is a sacred precinct and visitors are expected to conduct themselves accordingly.\n    </div>\n    <div>\n        Running, climbing, and yelling are inappropriate. Please supervise children.\n    </div>\n    <div>\n        Do not play, throw things, or enter the water.\n    </div>\n    <div>\n        Picnicking is permitted in designated areas only. Please refrain from eating within the monument’s perimeter. Alcoholic beverages are prohibited.\n    </div>\n    <div>\n        Vaping and the use of tobacco products is prohibited, except in the designated smoking area. Dispose of trash and tobacco products in the designated containers located outside the monument’s perimeter.\n    </div>\n    <div>\n        Pets are not permitted with the exception of service animals. If traveling with pets, please inquire about our free kennel service.\n    </div>\n    <div>\n        Firearms are prohibited. Drone aircraft are prohibited.\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/at-memorial-modal/at-memorial-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], AtMemorialModalPage);
    return AtMemorialModalPage;
}());

//# sourceMappingURL=at-memorial-modal.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__about__["a" /* AboutPage */]),
            ],
        })
    ], AboutPageModule);
    return AboutPageModule;
}());

//# sourceMappingURL=about.module.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="aboutCon">\n    <div>\n      Located in Bedford, Virginia, the community suffering the highest per capita D-Day losses in the nation, the National D-Day Memorial \n      honors all Allied forces that participated in the invasion of Normandy on 6 June 1944 during WWII. With its stylized English Garden, \n      haunting beach tableau, and striking Victory Plaza, the Memorial stands as a powerful permanent tribute to the valor, fidelity, and sacrifice of D-Day participants.\n    </div>\n      \n    <div>\n      Visiting the Memorial is an educational as well as an emotional experience. As the largest amphibious landing in history, D-Day required unprecedented levels of men and material. \n      More than 5,000 ships and 11,000 aircraft supported the landing of 150,000 Allied troops along a 50 - mile stretch of beach in Nazi-held Normandy, France. Weather, \n      combined with strong Nazi resistance, made the invasion’s outcome anything but certain. Yet by day’s end, the Allies had gained a foot- hold in occupied Europe. The human cost, \n      however, was also unprecedented; more than 9,000 Allied soldiers were killed or wounded on D-Day alone.\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/about/about.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BedfordBoysModalPageModule", function() { return BedfordBoysModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bedford_boys_modal__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BedfordBoysModalPageModule = /** @class */ (function () {
    function BedfordBoysModalPageModule() {
    }
    BedfordBoysModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bedford_boys_modal__["a" /* BedfordBoysModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bedford_boys_modal__["a" /* BedfordBoysModalPage */]),
            ],
        })
    ], BedfordBoysModalPageModule);
    return BedfordBoysModalPageModule;
}());

//# sourceMappingURL=bedford-boys-modal.module.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BedfordBoysModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BedfordBoysModalPage = /** @class */ (function () {
    function BedfordBoysModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    BedfordBoysModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BedfordBoysModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bedford-boys-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/bedford-boys-modal/bedford-boys-modal.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>\n      The "Bedford Boys"\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <img src="./assets/imgs/bedfordBoys.png">\n      <ion-card-title>\n          Co. A, 116th Infantry Regiment, 29th Division\n      </ion-card-title>\n\n      <div class="con">\n        <div>\n            Among the hundreds of thousands massed off the shores of Normandy on the morning of 6 June 1944 were 44 soldiers, sailors, and airmen from the town and county of Bedford, Virginia. \n            Thirty-seven of these young men belonged to Company A of the 116th Infantry Regiment, 29th Division. For almost all of them, this would be their baptism of fire.\n        </div>\n        <div>\n            Of the 37 assigned to Company A, 31 loaded into landing craft and headed for Omaha Beach in the first wave; the remainder belonged to supply details and would arrive later. En route, \n            a landing craft struck an obstacle and sank, stranding dozens far from shore, including five of Bedford’s boys. The remaining 26 successfully reached Omaha Beach, where 16 were killed \n            and four wounded within a matter of minutes. Three others were unaccounted for and later presumed killed in action. Another Bedford boy was killed in action elsewhere on Omaha Beach \n            with Company F, bringing Bedford’s D-Day fatalities to a total of 20. In comparison with its 1940s population, Bedford suffered the nation’s severest per capita D-Day loss, a somber \n            distinction for the rural Virginia community.\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/bedford-boys-modal/bedford-boys-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], BedfordBoysModalPage);
    return BedfordBoysModalPage;
}());

//# sourceMappingURL=bedford-boys-modal.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickSearchModalPageModule", function() { return BrickSearchModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brick_search_modal__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BrickSearchModalPageModule = /** @class */ (function () {
    function BrickSearchModalPageModule() {
    }
    BrickSearchModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__brick_search_modal__["a" /* BrickSearchModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__brick_search_modal__["a" /* BrickSearchModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__["a" /* PinchZoomModule */]
            ],
        })
    ], BrickSearchModalPageModule);
    return BrickSearchModalPageModule;
}());

//# sourceMappingURL=brick-search-modal.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrickSearchModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrickSearchModalPage = /** @class */ (function () {
    function BrickSearchModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.map = "";
        this.soldier = this.navParams.get("soldier");
    }
    BrickSearchModalPage.prototype.ionViewDidEnter = function () {
        if (this.soldier['section'] == "Gold Star Garden") {
            this.map = "assets/imgs/goldStarBricks.png";
        }
        else if (this.soldier['section'] == "Stettinius Parade One") {
            this.map = "assets/imgs/stettiniusSection1.png";
        }
        else if (this.soldier['section'] == "Stettinius Parade Two") {
            this.map = "assets/imgs/stettiniusSection2.png";
        }
        else if (this.soldier['section'] == "Blue Star Garden") {
            this.map = "assets/imgs/blueStarGarden.png";
        }
    };
    BrickSearchModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BrickSearchModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brick-search-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/brick-search-modal/brick-search-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div id="brickModalCon">\n    <div class="soldierCon">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="nameCol">\n            <h2 class="soldierName">{{ soldier.name }}</h2>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>\n            <div><span class="fieldTitle">Row:</span> {{ soldier.row }}</div>\n          </ion-col>\n          <ion-col col-6>\n            <div><span class="fieldTitle">Brick:</span> {{ soldier.brick }}</div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </div>\n\n    <pinch-zoom>\n        <img [src]="map" />\n    </pinch-zoom>\n\n  </div>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/brick-search-modal/brick-search-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BrickSearchModalPage);
    return BrickSearchModalPage;
}());

//# sourceMappingURL=brick-search-modal.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrickPageModule", function() { return BrickPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brick__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BrickPageModule = /** @class */ (function () {
    function BrickPageModule() {
    }
    BrickPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__brick__["a" /* BrickPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__brick__["a" /* BrickPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], BrickPageModule);
    return BrickPageModule;
}());

//# sourceMappingURL=brick.module.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrickPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_memorial_search_memorial_search__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brick_search_modal_brick_search_modal__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BrickPage = /** @class */ (function () {
    function BrickPage(searchProvider, alertCtrl, loadingCtrl, modalCtrl) {
        this.searchProvider = searchProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.brickData = [];
        this.showResults = false;
        this.searchTerm = '';
        this.searching = false;
        this.allData = []; //Store all data from provider
        this.filterData = []; //Store filtered data
    }
    BrickPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._subscription = this.searchProvider.getBrickJSON().subscribe(function (result) {
            _this.allData = result;
            //console.log(this.allData);
        });
        this.filterData = this.allData;
        var fixedContainer = this.fixedContentContainer.nativeElement;
        // Get the height of the fixed item
        var itemHeight = fixedContainer.offsetHeight;
        var scroll = this.content.getScrollElement();
        //add preexisting scroll margin to fixed container size
        itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
        scroll.style.marginTop = itemHeight + 'px';
    };
    BrickPage.prototype.ionViewDidLeave = function () {
        this._subscription.unsubscribe();
    };
    BrickPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please enter a valid name to search',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    BrickPage.prototype.getItems = function (event) {
        var _this = this;
        if (this.searchTerm == "") {
            this.presentAlert();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: "\n          <ion-spinner></ion-spinner>"
            });
            loading_1.present().then(function () {
                _this.filterData = _this.allData.filter(function (item) {
                    if (_this.searchTerm.indexOf(' ') > -1) {
                        var firstName = _this.searchTerm.substring(0, _this.searchTerm.indexOf(' '));
                        var lastName = _this.searchTerm.substring(_this.searchTerm.indexOf(' ') + 1);
                        console.log(item.name.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && item.name.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1);
                        return item.name.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && item.name.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1;
                    }
                    else {
                        return item.name.toLowerCase().indexOf(_this.searchTerm.toLocaleLowerCase()) > -1;
                    }
                });
                loading_1.dismiss();
                _this.showResults = true;
            });
        }
    };
    BrickPage.prototype.soldierClicked = function (item) {
        //console.log(item);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__brick_search_modal_brick_search_modal__["a" /* BrickSearchModalPage */], { soldier: item });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fixedContentContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BrickPage.prototype, "fixedContentContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], BrickPage.prototype, "content", void 0);
    BrickPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brick',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/brick/brick.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Brick Finder</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n      <ion-searchbar [(ngModel)]="searchTerm" (search)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n\n        <div ion-fixed class="fixed-header" #fixedContentContainer>\n            <ion-row id="brickHeader" align-items-center>\n                <ion-col col-6>\n                    Name\n                </ion-col>\n                <ion-col col-6>\n                    Section\n                </ion-col>\n            </ion-row>\n        </div>\n\n    <ion-grid *ngIf="filterData && filterData.length > 0">\n        <ion-row class="outerRow">\n            <ion-col class="outerCol">\n                <ion-row *ngFor="let item of filterData | orderNames" (click)="soldierClicked(item)">\n                    <ion-col col-6>\n                        {{ item.name }}\n                    </ion-col>\n        \n                    <ion-col col-6>\n                        {{ item.section }}\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/brick/brick.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_memorial_search_memorial_search__["a" /* MemorialSearchProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], BrickPage);
    return BrickPage;
}());

//# sourceMappingURL=brick.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CherryTreesPageModule", function() { return CherryTreesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cherry_trees__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CherryTreesPageModule = /** @class */ (function () {
    function CherryTreesPageModule() {
    }
    CherryTreesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cherry_trees__["a" /* CherryTreesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cherry_trees__["a" /* CherryTreesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], CherryTreesPageModule);
    return CherryTreesPageModule;
}());

//# sourceMappingURL=cherry-trees.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CherryTreesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_memorial_search_memorial_search__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cherry_trees_search_modal_cherry_trees_search_modal__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CherryTreesPage = /** @class */ (function () {
    function CherryTreesPage(searchProvider, alertCtrl, loadingCtrl, modalCtrl) {
        this.searchProvider = searchProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.cherryTreesData = [];
        this.showResults = false;
        this.searchTerm = '';
        this.searching = false;
        this.allData = []; //Store all data from provider
        this.filterData = []; //Store filtered data
    }
    CherryTreesPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._subscription = this.searchProvider.getCherryTreesJSON().subscribe(function (result) {
            _this.allData = result;
            //console.log(this.allData);
        });
        this.filterData = this.allData;
        var fixedContainer = this.fixedContentContainer.nativeElement;
        // Get the height of the fixed item
        var itemHeight = fixedContainer.offsetHeight;
        var scroll = this.content.getScrollElement();
        //add preexisting scroll margin to fixed container size
        itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px", "")) + itemHeight;
        scroll.style.marginTop = itemHeight + 'px';
    };
    CherryTreesPage.prototype.ionViewDidLeave = function () {
        this._subscription.unsubscribe();
    };
    CherryTreesPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please enter a valid name to search',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    CherryTreesPage.prototype.getItems = function (event) {
        var _this = this;
        if (this.searchTerm == "") {
            this.presentAlert();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: "\n          <ion-spinner></ion-spinner>"
            });
            loading_1.present().then(function () {
                _this.filterData = _this.allData.filter(function (item) {
                    if (_this.searchTerm.indexOf(' ') > -1) {
                        var firstName = _this.searchTerm.substring(0, _this.searchTerm.indexOf(' '));
                        var lastName = _this.searchTerm.substring(_this.searchTerm.indexOf(' ') + 1);
                        console.log(item.name.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && item.name.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1);
                        return item.name.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && item.name.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1;
                    }
                    else {
                        return item.name.toLowerCase().indexOf(_this.searchTerm.toLocaleLowerCase()) > -1;
                    }
                });
                loading_1.dismiss();
                _this.showResults = true;
            });
        }
    };
    CherryTreesPage.prototype.treeClicked = function (item) {
        //console.log(item);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cherry_trees_search_modal_cherry_trees_search_modal__["a" /* CherryTreesSearchModalPage */], { soldier: item });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fixedContentContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CherryTreesPage.prototype, "fixedContentContainer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], CherryTreesPage.prototype, "content", void 0);
    CherryTreesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cherry-trees',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/cherry-trees/cherry-trees.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cherry Tree Finder</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n      <ion-searchbar [(ngModel)]="searchTerm" (search)="getItems($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n\n        <div ion-fixed class="fixed-header" #fixedContentContainer>\n            <ion-row id="brickHeader" >\n                <ion-col col-6>\n                  Name\n                </ion-col>\n                <ion-col class="breaker" col-2>\n                </ion-col>\n                <ion-col col-4>\n                  Tree\n                </ion-col>\n            </ion-row>\n        </div>\n\n    <ion-grid *ngIf="filterData && filterData.length > 0">\n        <ion-row class="outerRow">\n            <ion-col class="outerCol">\n                <ion-row *ngFor="let item of filterData | orderNames" (click)="treeClicked(item)">\n                    <ion-col col-6>\n                      {{ item.name }}\n                    </ion-col>\n                    <ion-col class="breaker" col-2>\n                    </ion-col>\n                    <ion-col col-4>\n                      {{ item.tree_id }}\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n        \n    </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/cherry-trees/cherry-trees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_memorial_search_memorial_search__["a" /* MemorialSearchProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], CherryTreesPage);
    return CherryTreesPage;
}());

//# sourceMappingURL=cherry-trees.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CherryTreesSearchModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CherryTreesSearchModalPage = /** @class */ (function () {
    function CherryTreesSearchModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.map = "";
        this.soldier = this.navParams.get("soldier");
    }
    CherryTreesSearchModalPage.prototype.ionViewDidEnter = function () {
        this.map = "assets/imgs/cherryTreeMap.png";
    };
    CherryTreesSearchModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CherryTreesSearchModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cherry-trees-search-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/cherry-trees-search-modal/cherry-trees-search-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div id="brickModalCon">\n    <div class="soldierCon">\n      <ion-grid>\n        <ion-row>\n          <ion-col class="nameCol">\n            <h2 class="soldierName">{{ soldier.name }}</h2>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div><span class="fieldTitle">Tree ID:</span> {{ soldier.tree_id }}</div>\n          </ion-col>\n        </ion-row>\n\n      </ion-grid>\n    </div>\n\n    <pinch-zoom>\n        <img [src]="map" />\n    </pinch-zoom>\n\n  </div>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/cherry-trees-search-modal/cherry-trees-search-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CherryTreesSearchModalPage);
    return CherryTreesSearchModalPage;
}());

//# sourceMappingURL=cherry-trees-search-modal.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CherryTreesSearchModalPageModule", function() { return CherryTreesSearchModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cherry_trees_search_modal__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CherryTreesSearchModalPageModule = /** @class */ (function () {
    function CherryTreesSearchModalPageModule() {
    }
    CherryTreesSearchModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cherry_trees_search_modal__["a" /* CherryTreesSearchModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cherry_trees_search_modal__["a" /* CherryTreesSearchModalPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__["a" /* PinchZoomModule */]
            ],
        })
    ], CherryTreesSearchModalPageModule);
    return CherryTreesSearchModalPageModule;
}());

//# sourceMappingURL=cherry-trees-search-modal.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(263);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = /** @class */ (function () {
    function EventModalPageModule() {
    }
    EventModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
            ],
        })
    ], EventModalPageModule);
    return EventModalPageModule;
}());

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(264);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventModalPage = /** @class */ (function () {
    function EventModalPage(viewCtrl, navParams, calendar) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.calendar = calendar;
        this.event = navParams.get('event');
        console.log(this.event);
    }
    EventModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.ionViewDidLoad = function () {
        this.content.resize();
    };
    EventModalPage.prototype.decodeHTMLEntities = function (text) {
        var entities = [
            ['amp', '&'],
            ['apos', '\''],
            ['#x27', '\''],
            ['#x2F', '/'],
            ['#39', '\''],
            ['#47', '/'],
            ['lt', '<'],
            ['gt', '>'],
            ['nbsp', ' '],
            ['quot', '"']
        ];
        for (var i = 0, max = entities.length; i < max; ++i)
            text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);
        return text;
    };
    EventModalPage.prototype.addToCal = function (event) {
        var title = event.title.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
        var location = event.location.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
        });
        this.calendar.createEventInteractively(title, location, '', event.startTime, event.endTime)
            .then(function (msg) { console.log(msg); }, function (err) { console.log(err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], EventModalPage.prototype, "content", void 0);
    EventModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/event-modal/event-modal.html"*/'<ion-header>\n  \n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n  \n  \n  <ion-content>\n    <ion-grid>\n      <ion-row class="titleRow">\n        <ion-col class="titleCon">\n          <h2 [innerHtml]="event.title"></h2>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col id="eventDescription">\n            <div *ngIf="event.description !== \'undefined\'" [innerHtml]="event.description">\n\n            </div>\n          \n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <div text-center class="calBtn">\n              <button color="ddayBlue" ion-button icon-start (click)="addToCal(event)">\n                <ion-icon name="add-circle"></ion-icon>\n                Add To Calendar\n              </button>\n            </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n   \n  </ion-content>'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/event-modal/event-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
    ], EventModalPage);
    return EventModalPage;
}());

//# sourceMappingURL=event-modal.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DdayTodayModalPageModule", function() { return DdayTodayModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dday_today_modal__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DdayTodayModalPageModule = /** @class */ (function () {
    function DdayTodayModalPageModule() {
    }
    DdayTodayModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__dday_today_modal__["a" /* DdayTodayModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__dday_today_modal__["a" /* DdayTodayModalPage */]),
            ],
        })
    ], DdayTodayModalPageModule);
    return DdayTodayModalPageModule;
}());

//# sourceMappingURL=dday-today-modal.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DdayTodayModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DdayTodayModalPage = /** @class */ (function () {
    function DdayTodayModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    DdayTodayModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DdayTodayModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dday-today-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/dday-today-modal/dday-today-modal.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>\n      From D-Day To Today\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="modal" padding>\n  <div class="con">\n      <img src="./assets/imgs/inland.jpg">\n      \n      <div>\n      Rarely has history so greatly been impacted in a single 24-hour period as on D-Day. The Allied success in Normandy not only set in\n      motion the destruction of the Nazi regime, but also positioned the forces of democracy for the struggle that would mark the second \n      half of the 20th century: the Cold War. Since then, D-Day has come to be understood as a watershed event, the first step in a long \n      campaign to replace fascism with freedom, oppression with opportunity, and injustice with equality. It is a struggle that continues \n      to this day; we all live with the legacy of D-Day.\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/dday-today-modal/dday-today-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], DdayTodayModalPage);
    return DdayTodayModalPage;
}());

//# sourceMappingURL=dday-today-modal.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__faq__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FaqPageModule = /** @class */ (function () {
    function FaqPageModule() {
    }
    FaqPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__faq__["a" /* FaqPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
        })
    ], FaqPageModule);
    return FaqPageModule;
}());

//# sourceMappingURL=faq.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FaqPage = /** @class */ (function () {
    function FaqPage() {
        this.section = 'faq';
    }
    FaqPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-faq',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/faq/faq.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>FAQ & Policies</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="section" color="light">\n      <ion-segment-button value="faq">\n        FAQ\n      </ion-segment-button>\n      <ion-segment-button value="policies">\n        POLICIES\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div [ngSwitch]="section" class="pageCon">\n      \n    <div *ngSwitchCase="\'faq\'">\n\n      <div class="faqCon" padding>\n        <ngb-accordion [closeOthers]="true">\n          <ngb-panel id="static-1" title="WHEN IS THE NATIONAL D-DAY MEMORIAL OPEN?">\n            <ng-template ngbPanelContent>\n\n                The National D-Day Memorial is open daily from 10:00 AM to 5:00 PM with the exception of Monday closings December through February. \n                The Memorial is closed on Thanksgiving Day, Christmas Eve, Christmas Day, and New Year’s Day. The Memorial closes at noon on New Year’s Eve. \n                During inclement weather, we advise you call before planning your trip. The Memorial site phone number is 540-587-3619.\n\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id="static-2" title="WHAT DOES IT COST TO GET IN?">\n            <ng-template ngbPanelContent>\n              \n              <ul>\n                <!-- <li>\n                  Fees for admission are $10.00 per adult, $8.00 per veteran or active duty military, and $6.00 per student (ages 6-18 or older with a valid college ID). Children under age 6 are admitted free.\n                </li>\n                <li>\n                  A complimentary guided walking tour is included in the cost of admission. Check with ticketing agent for next available tour time.\n                </li>\n                <li>\n                  Use of shuttle carts bears an additional fee and use is limited to those who are disabled.  Shuttle carts are not  always available, however, wheelchairs are available for free on a first-come first-serve basis.\n                </li>\n                <li>\n                  Ticket purchases and reserved group tour check-in occurs at the Bedford Area Welcome Center (located at the foot of the Memorial, 816 Burks Hill Rd., Bedford, VA 24523). Please stop here BEFORE driving up to the Memorial site.\n                </li> -->\n                <li>\n                  Adult – $12 at Memorial/$10 online\n                </li>\n                <li>\n                  Veteran/Active Duty Military – $10 at Memorial/$8 online\n                </li>\n                <li>\n                  Student – $8 at Memorial/$6 online Ages 6 – 18 or older with college ID\n                </li>\n                <li>\n                  Under 6 – FREE\n                </li>\n                <li>\n                  Thomas Jefferson’s Poplar Forest Combo Ticket – $20\n                </li>\n                <li>\n                  Includes admission and tour at both sites. $8 – $10 discount over regular price. Cannot be combined with group tour discount. Valid for one year from date of purchase. Sites may be visited on separate dates.\n                </li>\n              </ul>\n\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id="static-3" title="I AM NOT TRAVELING WITH A GROUP BUT WOULD LIKE A GUIDED TOUR OF THE MEMORIAL. WHAT DO I DO?">\n            <ng-template ngbPanelContent>\n              \n              The Memorial has guided walking tours scheduled throughout the day, between the hours of 10 AM – 4 PM.  Check with the ticketing agent for the next available tour time.<!-- when you arrive at the Welcome Center to purchase tickets.-->\n\n            </ng-template>\n          </ngb-panel>\n          <!--<ngb-panel id="static-4" title="IF I AM A MEMBER OF THE NATIONAL D-DAY MEMORIAL, DO I STILL NEED TO CHECK IN AT THE WELCOME CENTER?">\n            <ng-template ngbPanelContent>\n              \n              Yes. Please come by the Welcome Center first to receive your admission sticker and to find out about tour times if you wish to take a guided walking tour of the Memorial. By checking in at the Welcome Center first, you will also receive a site map and we can pass along important information regarding any special activities happening on site that day.\n\n            </ng-template>\n          </ngb-panel>-->\n          <ngb-panel id="static-5" title="WHEN IS THE BEST TIME TO PLAN MY VISIT?">\n            <ng-template ngbPanelContent>\n              \n              April through October is a favorable time to visit the Memorial. The temperatures are warmer, the water effects are operating, and many of the gardens are in bloom. If you visit during the winter months, please call ahead as the Memorial may be closed due to inclement weather or seasonal systems maintenance.  The site number is 540-587-3619.\n\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id="static-6" title="HOW MUCH TIME SHOULD I ALLOW FOR MY VISIT TO THE MEMORIAL?">\n            <ng-template ngbPanelContent>\n              \n              The guided walking tour of the Memorial takes approximately one hour, however, we recommend that you plan two hours for your visit. You may wish to walk around on your own, take photos, or visit the Memorial store for a souvenir.\n\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id="static-7" title="WHAT DO WE DO IF IT’S RAINING?">\n            <ng-template ngbPanelContent>\n              \n              The National D-Day Memorial is an outdoor experience, so if it is raining, please bring an umbrella, poncho, or other appropriate rain gear.  Because the Memorial is an outdoor facility, remind your guests to consult weather forecasts in deciding on warm, wet, or cool weather attire. Sunglasses, sunscreen, and hats are recommended during sunny weather.\n\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id="static-8" title="WHAT IF I AM TRAVELING WITH A PET?">\n            <ng-template ngbPanelContent>\n              \n              <div>\n                Please be advised that, in general, the central aspect of the Memorial is off limits to pets and animals of any kind. The central part of the Memorial encompasses the sidewalks and all the grounds interior to the circular parking lot. There is occasion, however, when a service animal or other authorized animal may need to be on the site with the patron. We do not limit the access of these service animals.\n              </div>\n\n              <div>\n                For those traveling with pets, we ask that you consider the welfare of your pet when you travel to our site. Some of you may opt to keep your pet in your personal vehicle in a cool place with adequate water. For your convenience, we do have a limited number of animal crates available in our shaded kennel area. Please let the ticketing attendant know about your particular circumstance so that they may be able to check on availability of the crates for your visit. All patrons who have animals on site need to have them on a leash. Please ask site staff where you may walk your pet.\n              </div>\n\n            </ng-template>\n          </ngb-panel>\n          <ngb-panel id="static-9" title="DO YOU HAVE ANY MOBILITY ASSISTANCE AVAILABLE?">\n            <ng-template ngbPanelContent>\n              \n              <div>\n                Visitors are always welcome to bring their own motorized wheelchairs.  However, should you need mobility assistance, we do have a limited number of wheelchairs available to use at no additional fee. The National D-Day Memorial is 100% wheelchair accessible.\n              </div>\n\n              <div>\n                Shuttle carts may be available for an additional fee.  Shuttle carts are generally operated by volunteer guides, and the availability of these carts is based on the number of volunteer guides on assignment daily. If our volunteer assignment roster is well-staffed, it is more likely we will have carts available. If not, then only wheelchairs may be available.\n              </div>\n\n              <!-- <div>\n                Please inquire at the D-Day ticketing kiosk located inside the Bedford Area Welcome Center about shuttle cart or wheelchair availability.\n              </div> -->\n\n            </ng-template>\n          </ngb-panel>\n        </ngb-accordion>\n      </div>\n\n    </div>\n        \n    <div *ngSwitchCase="\'policies\'" class="policiesCon">\n\n      <div class="policiesContent" padding>\n\n        <div id="policiesHeader">\n            <i>Please take into consideration the sensitive and emotional nature of the Memorial by adhering to the following site rules:</i>\n        </div>\n        \n          \n        <ul>\n          <li>\n            Please take special care to watch children. Running, climbing, and yelling are not appropriate.\n          </li>\n\n          <li>\n            Wading, playing, or throwing objects into the reflection pool is strictly prohibited.\n          </li>\n\n          <li>\n            No eating, drinking (with the exception of water), or smoking while on monument grounds. <!-- There are several tables on the deck of the Memorial’s gift store, however, these are not always available. For picnicing, the Bedford Welcome Center has a patio area with tables that are accessible 9 a.m. – 5 p.m. and for additional options, Liberty Lake Park is within 1/2 mile of the monument and Falling Creek Park is also a short driving distance away.-->\n            Tables are located inside the Memorial’s pavilion, but are sometimes unavailable due to special events.\n          </li>\n\n          <li>\n            No firearms\n          </li>\n\n          <li>\n            No drones\n          </li>\n          \n          <li>\n            No alcohol\n          </li>\n\n          <li>\n            Visitors are permitted to take pictures on the Memorial site with the understanding that they are not to be sold or used commercially without the express written permission of the National D-Day Memorial Foundation.\n          </li>\n\n          <li>\n              Animals: With the exception of licensed guide dogs, no animals are permitted within the monument’s perimeter. The Memorial has a kennel area to place pets while visiting the site. Inquire with the ticketing agent for more information.\n          </li>\n        </ul>\n\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/faq/faq.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], FaqPage);
    return FaqPage;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageModule", function() { return EventsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar_calendar_module__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EventsPageModule = /** @class */ (function () {
    function EventsPageModule() {
    }
    EventsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__events__["a" /* EventsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_calendar_calendar_module__["a" /* NgCalendarModule */]
            ],
        })
    ], EventsPageModule);
    return EventsPageModule;
}());

//# sourceMappingURL=events.module.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_events_events__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventsPage = /** @class */ (function () {
    function EventsPage(eventsProvider, loadingCtrl, modalCtrl, screenOrientation) {
        this.eventsProvider = eventsProvider;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.screenOrientation = screenOrientation;
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        }; // these are the variable used by the calendar.
        this.markDisabled = function (date) {
            var current = new Date();
            current.setHours(0, 0, 0);
            return date < current;
        };
        this.getEvents();
    }
    EventsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.screenOrientation.onChange().subscribe(function () {
            setTimeout(function () {
                _this.content.resize();
                console.log('changed');
            }, 100);
        });
    };
    EventsPage.prototype.loadEvents = function () {
        this.eventSource = this.calEvents;
    };
    ;
    EventsPage.prototype.getEvents = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: "\n      <ion-spinner></ion-spinner>"
        });
        this.calEvents = [];
        loading.present();
        this.eventsProvider.getEvents().subscribe(function (result) {
            var eventData = JSON.parse(result['data']);
            //console.log(eventData['events']);
            _this.events = eventData['events'];
            //console.log(result['events']);
        }, function (err) {
            console.error("Error : " + JSON.stringify(err));
            loading.dismiss();
        }, function () {
            loading.dismiss();
            for (var i = 0; i < _this.events.length; i++) {
                var startTime;
                var startTimeStr;
                var endTime;
                var endTimeStr;
                if (_this.events[i].status !== 'cancelled') {
                    if (_this.events[i]['all_day'] == true) {
                        startTimeStr = _this.events[i]['start_date'].replace(/-/g, "/");
                        startTimeStr = startTimeStr.substr(0, startTimeStr.indexOf(' '));
                        startTime = new Date("" + startTimeStr);
                        endTimeStr = _this.events[i]['end_date'].replace(/-/g, "/"); //this.events[i]['end_date'].replace(/-/g, "/");
                        endTimeStr = endTimeStr.substr(0, endTimeStr.indexOf(' '));
                        endTime = new Date(endTimeStr);
                        //console.log(this.events[i]);
                        console.log(endTime);
                        _this.calEvents.push({
                            title: '' + _this.events[i]['title'],
                            startTime: startTime,
                            endTime: endTime,
                            allDay: true,
                            description: '' + _this.events[i]['description'],
                            location: '' + _this.events[i]['venue']['venue'] + ', ' + _this.events[i]['venue']['city'] + ', ' + _this.events[i]['venue']['stateprovince']
                        });
                    }
                    else {
                        startTimeStr = _this.events[i]['start_date'].replace(/-/g, "/");
                        startTime = new Date("" + startTimeStr);
                        endTimeStr = _this.events[i]['end_date'].replace(/-/g, "/");
                        endTime = new Date("" + endTimeStr);
                        //console.log(endTimeStr);
                        _this.calEvents.push({
                            title: '' + _this.events[i]['title'],
                            startTime: startTime,
                            endTime: endTime,
                            allDay: false,
                            description: '' + _this.events[i]['description'],
                            location: '' + _this.events[i]['venue']['venue'] + ', ' + _this.events[i]['venue']['city'] + ', ' + _this.events[i]['venue']['stateprovince']
                        });
                    }
                }
            }
            _this.loadEvents();
        });
    };
    EventsPage.prototype.eventSelected = function (event) {
        //console.log(event);
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__event_modal_event_modal__["a" /* EventModalPage */], { 'event': event });
        myModal.present();
    };
    EventsPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    EventsPage.prototype.onEventSelected = function (event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    };
    EventsPage.prototype.today = function () {
        this.calendar.currentDate = new Date();
    };
    EventsPage.prototype.onCurrentDateChanged = function (event) {
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], EventsPage.prototype, "content", void 0);
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/events/events.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Events</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="no-scroll">\n\n  <div id="calCon">\n  \n    <div id="calMonth">\n      {{ viewTitle }}\n    </div>\n   \n     <calendar [eventSource]="eventSource"\n     [calendarMode]="calendar.mode"\n     [monthviewEventDetailTemplate]="template"\n     [currentDate]="calendar.currentDate"\n     (onCurrentDateChanged)="onCurrentDateChanged($event)"\n     (onEventSelected)="onEventSelected($event)"\n     (onTitleChanged)="onViewTitleChanged($event)"\n     step="30">\n   </calendar>\n  </div>\n  \n   <ng-template #template let-showEventDetail="showEventDetail" let-selectedDate="selectedDate" let-noEventsLabel="noEventsLabel">\n     <ion-list class="event-detail-container" has-bouncing="false" *ngIf="showEventDetail" overflow-scroll="false">\n       <ion-item text-center *ngFor="let event of selectedDate?.events" (click)="eventSelected(event)">\n                 <span *ngIf="!event.allDay" class="monthview-eventdetail-timecolumn">{{event.startTime|date: \'shortTime\'}}\n                     -\n                     {{event.endTime|date: \'shortTime\'}}\n                 </span>\n             <span *ngIf="event.allDay" class="monthview-eventdetail-timecolumn">All day</span>\n             <br>\n             <span class="event-detail" [innerHtml]="event.title"></span>\n         </ion-item>\n         <ion-item *ngIf="selectedDate?.events.length==0">\n             <div class="no-events-label">{{noEventsLabel}}</div>\n         </ion-item>\n     </ion-list>\n     </ng-template>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/events/events.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_events_events__["a" /* EventsProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_http__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsProvider = /** @class */ (function () {
    function EventsProvider(//public http: HttpClient
        http) {
        this.http = http;
    }
    EventsProvider.prototype.getEvents = function () {
        /*return this.http.get("https://dday.org/wp-json/tribe/events/v1/events?per_page=100", {}, {}).then(data => {
          return data.data;
        })*/
        this.http.setDataSerializer('json');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"]
            .fromPromise(this.http.get("https://dday.org/wp-json/tribe/events/v1/events?per_page=100", {}, {}));
    };
    EventsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_http__["a" /* HTTP */]])
    ], EventsProvider);
    return EventsProvider;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralInfoModalPageModule", function() { return GeneralInfoModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__general_info_modal__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GeneralInfoModalPageModule = /** @class */ (function () {
    function GeneralInfoModalPageModule() {
    }
    GeneralInfoModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__general_info_modal__["a" /* GeneralInfoModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__general_info_modal__["a" /* GeneralInfoModalPage */]),
            ],
        })
    ], GeneralInfoModalPageModule);
    return GeneralInfoModalPageModule;
}());

//# sourceMappingURL=general-info-modal.module.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralInfoModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneralInfoModalPage = /** @class */ (function () {
    function GeneralInfoModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    GeneralInfoModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    GeneralInfoModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-general-info-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/general-info-modal/general-info-modal.html"*/'<ion-header>\n  \n  <ion-navbar>\n    <ion-title>\n      General Information\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="modal">\n    \n    <div class="con">\n      <img src="./assets/imgs/welcome/overlord.png">\n    \n      <div>\n          The National D-Day Memorial Foundation is a nonprofit educational foundation, operating under the provisions of Section 501(c)(3) \n          of the Internal Revenue Code and warranted by Congress to establish, in Bedford, Virginia, and maintain for the nation, a memorial \n          to the valor, fidelity, and sacrifice of the Allied forces that took part in the landing at Normandy, France on 6 June 1944.\n      </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/general-info-modal/general-info-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], GeneralInfoModalPage);
    return GeneralInfoModalPage;
}());

//# sourceMappingURL=general-info-modal.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModalPageModule", function() { return GroupModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__group_modal__ = __webpack_require__(419);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GroupModalPageModule = /** @class */ (function () {
    function GroupModalPageModule() {
    }
    GroupModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__group_modal__["a" /* GroupModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__group_modal__["a" /* GroupModalPage */]),
            ],
        })
    ], GroupModalPageModule);
    return GroupModalPageModule;
}());

//# sourceMappingURL=group-modal.module.js.map

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupModalPage = /** @class */ (function () {
    function GroupModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    GroupModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    GroupModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-group-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/group-modal/group-modal.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>\n      Group Tours\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="groupsCon">\n    \n    <div text-center>\n      <h5>\n        RESERVED GROUP TOURS\n      </h5>\n    </div>\n    \n    <div text-center>\n      <h4>\n        PRE-ARRANGED GROUP TOURS ARE AVAILABLE.\n      </h4>\n    </div>\n\n    <div>\n      <b>\n        Group Admission (13 or more patrons, fees are per person)\n      </b>  \n    </div>\n      \n    <div>\n        $8.00 Adult *includes FREE walking tour\n    </div> \n      \n    <div>\n        $5.00 Child *includes FREE walking tour\n    </div>\n      \n    <div>\n      <b>\n        Group Admission (Less than 13 patrons, $100 flat rate fee)\n      </b>\n    </div>\n      \n    <div>\n      <h5>\n          NOTE: RESERVATIONS ARE REQUIRED FOR PRIVATE WALKING TOURS. WE RECOMMEND A MINIMUM TWO WEEKS NOTICE. A DEPOSIT IS REQUIRED TO CONFIRM RESERVATION.  FOR MORE INFORMATION CONTACT THE TOUR COORDINATOR TO SCHEDULE A TOUR.\n      </h5>\n    </div>\n      \n    <div>\n      Telephone number: 540-587-3619\n    </div>\n\n    <div>\n        Email address: dday@dday.org\n    </div>\n      \n    <div>\n        School field trips are available at a discounted rate. Please call 540-586-3329 x114 for more information.\n    </div>\n      \n    <div text-center>\n      <h4>\n        FAQ\n      </h4>\n    </div>\n      \n    <div>\n      <b>\n        Is there any advantage to coming in a group?\n      </b>\n    </div>\n      \n    <div>\n        Yes, besides the camaraderie of sharing together in your National D-Day Memorial experience, you may be eligible for a reduced admission fee.\n    </div>\n      \n    <div>\n      <b>\n        What do I need to do if my group wants to reserve a tour at the National D-Day Memorial?\n      </b>\n    </div>\n      \n    <div>\n        First, decide on both a date and a specific hour for your planned tour. Next, make sure your group will have at \n        least 13 members on the date and time you have selected. Groups with 13 or more patrons receive a reduced admission fee, \n        provided they have made a reservation at least two weeks in advance of their anticipated arrival. Finally, call 540-587-3619 to make your reservation.\n    </div>\n      \n    <div>\n      <b>\n        What if I have fewer than 13 people in my group and still want a reserved tour?\n      </b>\n    </div>\n      \n    <div>\n        There is a flat fee of $100.00 for any group numbering less than 13 patrons. If you have less than 13 people in your group and would like to have a reserved tour, please call 540-587-3619.\n    </div>\n      \n    <div>\n      <b>\n        Do you have any mobility assistance available?\n      </b>\n    </div>\n      \n    <div>\n        Should you need mobility assistance for members of your party who are disabled, we do have a limited number of wheelchairs available at no cost, \n        or you may reserve one of our five-passenger shuttle carts for an additional $30.00 each. Reserved tours are limited to a maximum of 2 shuttle carts, \n        based on availability. Since the availability of these carts may be limited, please plan your trip well in advance.\n    </div>\n      \n    <div>\n      <b>\n        For groups that have scheduled a tour in advance:\n      </b>\n    </div>\n      \n    <div>\n        Please arrive at the Bedford Area Welcome Center 20 minutes early to check-in and use the facilities. Your group will then drive up to the Memorial Gift Store. \n        There, one designated person will be responsible for payment, and you will meet up with your tour guide. Contact us as soon as possible if you see that your \n        party will be arriving late. Groups arriving more than 15 minutes late without advance notification will forfeit their guide and any reserved shuttle carts. \n        Please call this number to notify the Memorial of a late arrival – 540-587-5681.\n    </div>\n      \n      \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/group-modal/group-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], GroupModalPage);
    return GroupModalPage;
}());

//# sourceMappingURL=group-modal.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomefrontTourSlidesPageModule", function() { return HomefrontTourSlidesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homefront_tour_slides__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomefrontTourSlidesPageModule = /** @class */ (function () {
    function HomefrontTourSlidesPageModule() {
    }
    HomefrontTourSlidesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__homefront_tour_slides__["a" /* HomefrontTourSlidesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__homefront_tour_slides__["a" /* HomefrontTourSlidesPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ngx_pinch_zoom__["a" /* PinchZoomModule */]
            ],
        })
    ], HomefrontTourSlidesPageModule);
    return HomefrontTourSlidesPageModule;
}());

//# sourceMappingURL=homefront-tour-slides.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomefrontTourSlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomefrontTourSlidesPage = /** @class */ (function () {
    function HomefrontTourSlidesPage() {
        this.slides = 'false';
    }
    HomefrontTourSlidesPage.prototype.startSlides = function () {
        this.slides = 'true';
    };
    HomefrontTourSlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homefront-tour-slides',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/homefront-tour-slides/homefront-tour-slides.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Home Front Tour Slides</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="slides == \'false\'" text-center>\n    <h1 id="pageTitle">Downtown Bedford</h1>\n    <pinch-zoom>\n      <img src="assets/imgs/slides/map.jpg" />\n    </pinch-zoom>\n\n  </div>\n\n  <div class="tourDiv">\n    <ion-card>\n      <ion-card-header>\n        1) Bedford\'s Factories: Smyth\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>\n          Like most throughout the nation, Bedford’s factories converted to wartime production during WWII. This factory, \n          formerly Piedmont Label, opened in 1919 and is Bedford’s oldest factory in continuous operation. Rubatex began making \n          insulation for aircraft and submarines and hoses for gas masks. Hampton Looms produced woolen uniforms while Belding \n          Hemingway made rayon thread for parachutes. Southern Flavoring Company also made parachute parts and the Bedford Pulp \n          and Paper Company contributed to the war effort making cardboard boxes and pallets for shipping, as well as powder for firing guns.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        2) Fishers Restaurant\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>\n            This traditional 1940’s diner serviced the community and the nearby train station. Its history dates to the 1930s as a \n            one-room hotdog stand. By the time WWII started, the current building was in place and the locals would congregate \n            here before and after shifts at nearby factories, while travelers from the passenger depot would take the two-minute walk \n            to grab a bite between trains. The Bedford Boys would have certainly known this familiar haunt and carried fond memories of it into the war.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        3) Liberty Station\n      </ion-card-header>\n      \n      <img src="assets/imgs/slides/libertyStation.jpg" />\n      \n      <ion-card-content>\n        <p>\n            As in other small towns, Bedford’s railroad station was the hub of community life. Transportation of passengers, freight, and mail, from \n            the railways’ inception through WWII, meant that such railroad stations were a vital part of both the local and national economy. \n            Built in 1881, the station remained in service until 1971. WWII found the station participating in the transportation of troops, supplies and ammunition.\n        </p>\n\n        <p>\n            The Bedford Boys left for service from this very station in February 1941, while the nation was still at peace. Little could they know the role in history they would play.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        4) Bedford High School\n      </ion-card-header>\n      \n      <img src="assets/imgs/slides/highschool.jpg" />\n      \n      <ion-card-content>\n        <p>\n            On February 17, 1941 the Bedford Boys attended a dance and farewell party where many of them had attended high school. For many, \n            it would be the last time they would walk through its halls. The class of 1944 erected a plaque outside of the school to those who attended the high school and were killed in World War II.\n        </p>\n\n        <p>\n            Visitors may continue on to Oakwood and Greenwood Cemeteries where 9 of the 20 Bedford Boys who died on D-Day are at rest.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        5) Green\'s Drug Store\n      </ion-card-header>\n\n      <ion-card-content>\n        <p>\n            Known as Green’s Drug Store during WWII, this corner was a gathering place for locals. Tucked away in the back of the drug store behind a wooden booth was a small \n            Western Union telegraph office. Twenty-one-year-old Elizabeth Teass was manning the teletype machine on July 17, 1944 when she was stunned to receive a series of \n            telegrams with the words “The Secretary of War desires me to express his deep regret....” The teletype machine continued with one message after another. The community of Bedford would be forever changed.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        6) Centertown Plaza\n      </ion-card-header>\n\n      <img src="assets/imgs/slides/centerTownPlaza.jpg" />\n      \n      <ion-card-content>\n        <p>\n            In February 1941, Co. A of the 116th Infantry Regiment, Virginia National Guard, kissed mothers and girlfriends goodbye and filed onto a waiting train at \n            Bedford’s depot. By the end of the year, America was at war, and the Bedford Boys were in it for the duration. Nineteen men from Co. A, and another Bedford \n            Boy from Co. F, perished on the beaches of Normandy. The loss of 20 young men was the highest per capita loss of any community in the United States.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        7) County Courthouse: Bedford Boys Monument\n      </ion-card-header>\n\n      <img src="assets/imgs/slides/courthouse.jpg" />\n\n      <ion-card-content>\n        <p>\n            In 1954, ten years after the Normandy Invasion, the Bedford community came together to dedicate a monument to its lost sons. The stone, located outside of Bedford’s Courthouse, reads, “Erected by the Parker-Hoback Post, 29th Division Association, in memory of the Bedford County men of the \n            116th Infantry Regiment, 29th Division, who gave their lives in preparation for and the participation in the Normandy Invasion and later battles of World War II.”\n        </p>\n        \n        <p>\n            The stone on which the monument appears was secured from Vierville-Sur-Mer on Normandy Beach and was a gift of the Republic of France.\n        </p>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        8) Bedford Museum & Genealogical Society\n      </ion-card-header>\n      \n      <img src="assets/imgs/slides/museum.jpg" />\n      \n      <ion-card-content>\n        <p>\n            The museum is located in a beautiful 1895 former Masonic Lodge in downtown Bedford. The three floors of displays give a glimpse into the rich history of Bedford County, \n            dating back prior to the American Revolution. On the second floor, one can find an exhibit devoted specifically to the Bedford Boys, as well as exhibits related to \n            World War II history in Bedford County. The Museum is open Monday through Friday 10AM to 5PM; Saturday 10AM to 3PM; closed on Sundays and national holidays.\n        </p>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/homefront-tour-slides/homefront-tour-slides.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], HomefrontTourSlidesPage);
    return HomefrontTourSlidesPage;
}());

//# sourceMappingURL=homefront-tour-slides.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoursModalPageModule", function() { return HoursModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hours_modal__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HoursModalPageModule = /** @class */ (function () {
    function HoursModalPageModule() {
    }
    HoursModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__hours_modal__["a" /* HoursModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__hours_modal__["a" /* HoursModalPage */]),
            ],
        })
    ], HoursModalPageModule);
    return HoursModalPageModule;
}());

//# sourceMappingURL=hours-modal.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HoursModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HoursModalPage = /** @class */ (function () {
    function HoursModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    HoursModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HoursModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hours-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/hours-modal/hours-modal.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>\n        Memorial Hours\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="hoursCon">\n    <div>\n      Open daily from 10:00 AM to 5:00 PM (ticket sales end at 4:30 PM). Closed Mondays December through February. \n      Closed Thanksgiving Day, Christmas Eve, Christmas Day, and New Year’s Day. The Memorial closes at noon on New Year’s Eve. \n      Openings before or after normal operating hours by special arrangement for an additional fee.\n    </div>\n    \n    <div text-center>\n      <h4>\n        Water Effects Hours of Operation\n      </h4>  \n    </div>\n      \n    <div>\n        During cold weather the Memorial’s invasion tableau is drained for seasonal system maintenance. \n        If you wish to see the invasion pool with water, it is recommended you visit late March thru November. \n        Call 540-587-3619 to inquire about pool operation.\n    </div>\n      \n    <div text-center>\n      <h3>\n        MEMORIAL STORE\n      </h3>\n    </div>\n      \n    <div>\n        Open daily from 10:00 AM to 5:00 PM with the exception of Monday closings December through February. \n        Closed on Thanksgiving Day, Christmas Eve, Christmas Day, and New Year’s Day. The Memorial store closes at noon on New Year’s Eve.\n    </div>\n      \n    <div>\n        * Please allow one to two hours for your visit to the Memorial.\n    </div>  \n      \n    <div text-center>\n      <h3>\n        FOUNDATION OFFICE HOURS\n      </h3>\n    </div>\n      \n    <div>\n        Open Monday through Friday from 9:00 AM to 5:00 PM, with occasional daily closings. Closed on Thanksgiving Day, Christmas Eve, \n        Christmas Day, and New Year’s Day. Other holiday closings may occur. When in doubt, telephone to confirm opening before visiting the Foundation Office at 540-586-3329.\n    </div>\n      \n    <div>\n        THE FOUNDATION OFFICE IS LOCATED AT 133 WEST MAIN STREET IN BEDFORD.\n    </div>\n      \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/hours-modal/hours-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], HoursModalPage);
    return HoursModalPage;
}());

//# sourceMappingURL=hours-modal.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__info__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InfoPageModule = /** @class */ (function () {
    function InfoPageModule() {
    }
    InfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__info__["a" /* InfoPage */]),
            ],
        })
    ], InfoPageModule);
    return InfoPageModule;
}());

//# sourceMappingURL=info.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeModalPage = /** @class */ (function () {
    function WelcomeModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    WelcomeModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    WelcomeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/welcome-modal/welcome-modal.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>\n      Welcome To D-Day\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="no-scroll">\n\n  <div id="welcomeModalCon">\n    <ion-slides loop="true" autoplay="5000" pager="true" effect="flip" centeredSlides="true" speed="2000" zoom="false">\n      <ion-slide>\n        <ion-card>\n            <ion-card-content>\n              <img src="./assets/imgs/welcome/homage.png">\n              <ion-card-title>\n                Homage\n              </ion-card-title>\n              <p>\n                The sculpture Homage is a symbolic piece, emblematic of those communities across the country that nurtured those who went away to war and grieved for those who never returned.\n              </p>\n            </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n          <ion-card-content>\n            <img src="./assets/imgs/welcome/garden.png">\n            <ion-card-title>\n              Richard S. Reynolds Sr. Garden\n            </ion-card-title>\n            <p>\n                The Richard S. Reynolds, Sr. Garden features a full-figure bronze statue of General Dwight D. Eisenhower \n                and a mosaic tile replica of the battle map used for the invasion located on the ceiling of the English folly.\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n            <ion-card-content>\n              <img src="./assets/imgs/welcome/memorial.png">\n              <ion-card-title>\n                Memorial Wall\n              </ion-card-title>\n              <p>\n                  The names of the 2,502 United States service members killed on D-Day are found on the wall on \n                  the western side of the plaza. Names of the fallen 1,913 Allies appear on the eastern wall.\n              </p>\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n          <ion-card-content>\n            <img src="./assets/imgs/welcome/gray.png">\n            <ion-card-title>\n              Gray Plaza\n            </ion-card-title>\n            <p>\n                While visiting Gray Plaza, one finds statuary representative of the beach landing and fighting. \n                This includes two obstacles in the reflecting pool, a landing craft representation, and several figural pieces.\n            </p>\n          </ion-card-content>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n            <ion-card-content>\n              <img src="./assets/imgs/welcome/overlord.png">\n              <ion-card-title>\n                Overlord Arch\n              </ion-card-title>\n              <p>\n                  The Overlord Arch in Estes Plaza stands forty-four and one-half feet high (representative of the date of D-Day, 6 June 1944). \n                  The Plaza celebrates the breaching of Fortress Europe, the foothold in France.\n              </p>\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card>\n            <ion-card-content>\n              <img src="./assets/imgs/welcome/goldStar.png">\n              <ion-card-title>\n                Gold Star Families Memorial Monument\n              </ion-card-title>\n              <p>\n                  In both World Wars, a family which had lost a loved one in uniform hung a banner with a vivid Gold Star in their window—hence the term Gold Star Families. \n                  This monument—Virginia’s first—recognizes the sacrifices of the families left behind when heroes pay the ultimate sacrifice.\n              </p>\n            </ion-card-content>\n          </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/welcome-modal/welcome-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], WelcomeModalPage);
    return WelcomeModalPage;
}());

//# sourceMappingURL=welcome-modal.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomefrontTourPageModule", function() { return HomefrontTourPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homefront_tour__ = __webpack_require__(427);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomefrontTourPageModule = /** @class */ (function () {
    function HomefrontTourPageModule() {
    }
    HomefrontTourPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__homefront_tour__["a" /* HomefrontTourPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__homefront_tour__["a" /* HomefrontTourPage */]),
            ],
        })
    ], HomefrontTourPageModule);
    return HomefrontTourPageModule;
}());

//# sourceMappingURL=homefront-tour.module.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomefrontTourPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__homefront_tour_slides_homefront_tour_slides__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

var HomefrontTourPage = /** @class */ (function () {
    function HomefrontTourPage() {
        /*options : InAppBrowserOptions = {
          hardwareback : 'yes',
          mediaPlaybackRequiresUserAction : 'yes',
          closebuttoncaption : 'Close',
          toolbar : 'yes'
        };*/
        this.homefrontTourSlides = __WEBPACK_IMPORTED_MODULE_1__homefront_tour_slides_homefront_tour_slides__["a" /* HomefrontTourSlidesPage */];
    }
    HomefrontTourPage.prototype.openTour = function () {
        /*this.browser.create("", "_system", this.options);*/
        //window.open("https://www.theclio.com/web/tour/summary?id=660",'_system', 'location=yes');
        window.open("https://theclio.com/tour/660", '_system', 'location=yes');
    };
    HomefrontTourPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-homefront-tour',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/homefront-tour/homefront-tour.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Homefront Tour</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-grid id="homefrontGrid">\n    <ion-row>\n      <ion-col>\n        <img src="./assets/imgs/homefrontTitle.jpg" />\n        <img src="./assets/imgs/homefront.jpg" />\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <button full ion-button (click)="openTour()">Homefront Tour Site: with GPS</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n          <button full ion-button [navPush]="homefrontTourSlides">Homefront Tour: slides in app</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/homefront-tour/homefront-tour.html"*/,
        }),
        __metadata("design:paramtypes", [])
    ], HomefrontTourPage);
    return HomefrontTourPage;
}());

//# sourceMappingURL=homefront-tour.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__map__["a" /* MapPage */]),
            ],
        })
    ], MapPageModule);
    return MapPageModule;
}());

//# sourceMappingURL=map.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarkersProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MarkersProvider = /** @class */ (function () {
    function MarkersProvider() {
    }
    /*  Under Construction
        {
          lat: 37.330858,
          lng: -79.537261,
          image: "learningCenter"
        },
    */
    /*colors
    Green: #008b3a
    Blue: #214281
    Orange: #f49200
    Red: #d32324*/
    MarkersProvider.prototype.getLabels = function () {
        var labels = [
            {
                lat: 37.331231,
                lng: -79.536121,
                image: "reynoldsGarden"
            },
            {
                lat: 37.331101,
                lng: -79.537031,
                image: "victoryGarden"
            },
            {
                lat: 37.330755,
                lng: -79.535956,
                image: "grayPlaza"
            },
            {
                lat: 37.330724,
                lng: -79.536563,
                image: "homage"
            },
            {
                lat: 37.330762,
                lng: -79.537273,
                image: "giftShop"
            },
            {
                lat: 37.330514,
                lng: -79.537297,
                image: "pavilion"
            },
            {
                lat: 37.330169,
                lng: -79.537296,
                image: "smokingArea"
            },
            {
                lat: 37.330058,
                lng: -79.535798,
                image: "estesPlaza"
            },
            {
                lat: 37.329470,
                lng: -79.536309,
                image: "parade"
            }
        ];
        return labels;
    };
    MarkersProvider.prototype.getMarkers = function () {
        var markers = [
            {
                number: 1,
                name: 'Homage',
                section: 'Reynolds Garden',
                lat: 37.331222,
                lng: -79.535837,
                info: "Centered within the garden folly stands The Supreme Commander, a sculpture of General Dwight D. Eisenhower, Supreme Commander for Operation Overlord. Overhead, a tile mosaic map depicts the plan for the coming invasion. Eisenhower is surrounded by portrait busts of his principal subordinates: Air Chief Marshal Sir Arthur William Tedder, Deputy Supreme Commander; Admiral Sir Bertram H. Ramsay, Allied Naval Commander; Air Chief Marshal Sir Trafford L. Leigh-Mallory, Allied Air Forces Commander; Field Marshal Sir Bernard L. Montgomery, D-Day Assault Commander; Lt. Gen. Omar N. Bradley, U.S. 1st Army Commander; and Lt. Gen. Walter Bedell Smith, Chief of Staff."
            },
            {
                number: 2,
                name: '',
                section: 'Reynolds Garden',
                lat: 37.331123,
                lng: -79.535338,
                info: "Portrait bust of Winston Churchill at the northeast entryway. Churchill was prime minister of the United Kingdom for most of the war, from 1940 to 1945. His tenacity, leadership, and eloquence were crucial to England’s fighting spirit and key ingredients to victory."
            },
            {
                number: 3,
                name: '',
                section: 'Reynolds Garden',
                lat: 37.331200,
                lng: -79.536494,
                info: "Portrait bust of Franklin Delano Roosevelt at the northwest entryway. Roosevelt, United States president from 1933 to 1945, presided over the American war effort with unshakable determination. He envisioned not only victory, but a workable peace afterward. Sadly, he didn’t live to see his dream become reality, dying of a stroke in April 1945."
            },
            {
                number: 4,
                name: '',
                section: 'Reynolds Garden',
                lat: 37.330932,
                lng: -79.535814,
                info: "The patterned central area of the garden echoes the design of the SHAEF (Supreme Headquarters Allied Expeditionary Force) shoulder patch, worn by those tasked with planning the invasion. An example can be found on the southern wall above the text of Eisenhower’s Order of the Day for 6 June 1944. Arranged on either side of the Order are plaques honoring various Allied forces participating on D-Day."
            },
            {
                number: 5,
                name: '',
                section: 'Reynolds Garden',
                lat: 37.330787,
                lng: -79.535780,
                info: "Plaques along the eastern and western garden walls mark the transition from preparing for the invasion to initiating it. Monuments along the eastern wall recognize academies, colleges, and universities that prepared many of the Allied leaders for their wartime service. Along the western wall, plaques honor infantry regiments that took part in the Normandy invasion."
            },
            {
                number: 5,
                name: '',
                section: 'Reynolds Garden',
                lat: 37.330812,
                lng: -79.536115,
                info: "Plaques along the eastern and western garden walls mark the transition from preparing for the invasion to initiating it. Monuments along the eastern wall recognize academies, colleges, and universities that prepared many of the Allied leaders for their wartime service. Along the western wall, plaques honor infantry regiments that took part in the Normandy invasion."
            },
            {
                number: 6,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330760,
                lng: -79.535953,
                info: "The plaza floor is divided into five segments, alluding to the five D-Day landing beaches: Utah, Omaha, Gold, Juno, and Sword."
            },
            {
                number: 7,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330645,
                lng: -79.536273,
                info: "Enclosing the plaza are bronze plaques bearing the names of the 4,415 Allied service members killed in action on D-Day. The names of American service members are on the western wall; the names of the other Allied Expeditionary Force members are on the eastern wall. Guests can search names using the Memorial app or view an alphabetical register inside the Gift Shop."
            },
            {
                number: 7,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330611,
                lng: -79.535655,
                info: "Enclosing the plaza are bronze plaques bearing the names of the 4,415 Allied service members killed in action on D-Day. The names of American service members are on the western wall; the names of the other Allied Expeditionary Force members are on the eastern wall. Guests can search names using the Memorial app or view an alphabetical register inside the Gift Shop."
            },
            {
                number: 8,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330418,
                lng: -79.536146,
                info: "The beach tableau depicts the fierce struggle Allied soldiers waged up and down the landing beaches. A stylized bunker serves as a backdrop for the scene."
            },
            {
                number: 9,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330406,
                lng: -79.535958,
                info: "A granite “Higgins Boat” represents the thousands of various landing craft that transported troops from ships to shore on the morning of D-Day. For its versatility, the “Higgins Boat” was later credited by Eisenhower with winning the war for the Allies."
            },
            {
                number: 10,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330360,
                lng: -79.535772,
                info: "Nearby, two “hedgehogs” typify the range of obstacles the Germans set in the tidal flats to scuttle landing craft making their way to shore."
            },
            {
                number: 11,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330315,
                lng: -79.535974,
                info: "The beach sculptures Through the Surf, Death on Shore, Across the Beach, and Scaling the Wall capture troops in various poses of battle, honoring the valor, fidelity, and sacrifice that were the hallmarks of Operation Overlord."
            },
            {
                number: 12,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330329,
                lng: -79.536464,
                info: "West of the beach tableau, George “Jimmy” Green Circle pays homage to the service and achievements of the naval forces of Operation Neptune, the seagoing component of D-Day. Green Circle’s monuments emphasize major vessels, exceptional leadership, and the U.S. Coast Guard’s role."
            },
            {
                number: 13,
                name: '',
                section: 'Gray Plaza',
                lat: 37.330183,
                lng: -79.535441,
                info: "East of the beach tableau, Maurice T. Lawhorne Circle pays tribute to the roles and contributions of the AEF’s air forces on D-Day. More than 11,000 aircraft flew in support of the D-Day operations. Lawhorne Circle includes a series of narrative monuments to distinguished units and leaders."
            },
            {
                number: 14,
                name: '',
                section: 'Estes Plaza',
                lat: 37.330185,
                lng: -79.535963,
                info: "Final Tribute is a sober tribute to the more than 4,400 members of the Allied Expeditionary Force who were killed on D-Day. Emblematic of death in battle, the inverted rifle and helmet powerfully address the ultimate sacrifice of the fallen."
            },
            {
                number: 15,
                name: '',
                section: 'Estes Plaza',
                lat: 37.330053,
                lng: -79.535900,
                info: "A triumphal arch rises forty-four and a half feet above Estes Plaza – a pointed allusion to D-Day’s occurrence on the sixth day of the sixth month of 1944. The word OVERLORD inscribed on its facade is the official name of the operation now known simply as D-Day. The black and white stripes emblazoned on the arch recall the alternating stripes that made Allied aircraft readily identifiable."
            },
            {
                number: 16,
                name: '',
                section: 'Estes Plaza',
                lat: 37.330092,
                lng: -79.536063,
                info: 'The National D-Day Memorial Seal is inscribed on the floor of Estes Plaza directly beneath the Overlord Arch. Rendered in Latin, the motto Ad commemorandum fortitudinem, fidelitatem, sacrificiumeorum translates to “Remembering their valor, fidelity, and sacrifice.”'
            },
            {
                number: 17,
                name: '',
                section: 'Estes Plaza',
                lat: 37.329919,
                lng: -79.535776,
                info: "The flags of the twelve nations of the AEF fly in an arc along the exterior of Estes Plaza (weather permitting). Beginning with the flag of the United States, the flags of the eleven other nations fly alphabetically: Australia, Belgium, Canada, Czechoslovakia, France, Greece, the Netherlands, New Zealand, Norway, Poland, and the United Kingdom. Nearby, the allegorical sculpture Valor, Fidelity, Sacrifice honors these qualities in all members of the Allied Expeditionary Force at D-Day."
            },
            {
                number: 17,
                name: '',
                section: 'Estes Plaza',
                lat: 37.329958,
                lng: -79.536303,
                info: "The flags of the twelve nations of the AEF fly in an arc along the exterior of Estes Plaza (weather permitting). Beginning with the flag of the United States, the flags of the eleven other nations fly alphabetically: Australia, Belgium, Canada, Czechoslovakia, France, Greece, the Netherlands, New Zealand, Norway, Poland, and the United Kingdom. Nearby, the allegorical sculpture Valor, Fidelity, Sacrifice honors these qualities in all members of the Allied Expeditionary Force at D-Day."
            },
            {
                number: 18,
                name: '',
                section: 'Stettinius Parade',
                lat: 37.329104,
                lng: -79.536090,
                info: "Le Monument aux Morts was created by French sculptor Edmond de Laheudrie in memory of the forty-four men of Trévières, France, who died in World War I. In the days following D-Day, shrapnel or a round struck the head of the statue, disfiguring it. This recasting of de Laheudrie’s sculpture preserves the World War II damage that still mars the World War I original, a reminder that despite the hard-won success at Normandy, D-Day was but the beginning of the end of the war in Europe. The damaged statue serves as a silent lesson on the fragility of peace and the transience of victory."
            },
            {
                number: 19,
                name: '',
                section: 'Stettinius Parade',
                lat: 37.328718,
                lng: -79.536137,
                info: "The Purple Heart Monument stands in the shadow of the garrison flag. Emplaced by the Military Order of the Purple Heart and National D-Day Memorial Foundation, it is dedicated in particular tribute to those who received the Purple Heart for their service on D-Day."
            },
            {
                number: 20,
                name: '',
                section: 'Stettinius Parade',
                lat: 37.328867,
                lng: -79.536033,
                info: "Beyond D-Day: Set in the eastern quadrant of the smaller circle around the flagstaff in Stettinius Parade stands a portrait bust of Clement R. Atlee, the successor of Churchill."
            },
            {
                number: 21,
                name: '',
                section: 'Stettinius Parade',
                lat: 37.328884,
                lng: -79.536217,
                info: "Set in the western quadrant stands a portrait bust of Harry S. Truman, the successor of Roosevelt."
            },
            {
                number: 'A',
                name: 'John Robert “Bob” Slaughter Portrait Bust',
                section: 'Other',
                lat: 37.330381,
                lng: -79.536927,
                info: "Bob Slaughter, who served with Company D of the 116th Infantry Regiment of the 29th Division, landed on Omaha Beach on 6 June 1944. He was wounded twice while in France. Slaughter’s vision for a national memorial to the Normandy invasion led to the creation of the National D-Day Memorial, which was officially dedicated in 2001."
            },
            {
                number: 'B',
                name: 'Homage Sculpture',
                section: 'Other',
                lat: 37.330726,
                lng: -79.536487,
                info: "Homage Sculpture"
            },
            {
                number: 'C',
                name: 'Gold Star Families Memorial Monument',
                section: 'Other',
                lat: 37.330621,
                lng: -79.535444,
                info: "Gold Star Families Memorial Monument"
            },
            {
                number: 'D',
                name: 'Fleda A. Ring Education Quonset Hut',
                section: 'Other',
                lat: 37.330893,
                lng: -79.537169,
                info: "Fleda A. Ring Education Quonset Hut"
            },
            {
                number: 'E',
                name: 'W.E. Stevens Family Victory Garden',
                section: 'Other',
                lat: 37.331074,
                lng: -79.537034,
                info: "W.E. Stevens Family Victory Garden"
            },
            {
                //number: '0xf1bb',
                number: '0xf324',
                name: '',
                section: 'OtherIcon',
                lat: 37.330231,
                lng: -79.536271,
                info: "Men's Restroom"
            },
            {
                //number: '0xf271',
                number: '0xf3aa',
                name: '',
                section: 'OtherIcon',
                lat: 37.330207,
                lng: -79.535765,
                info: "Women's Restroom"
            },
            {
                number: '0xf201',
                name: '',
                section: 'OtherIcon',
                lat: 37.330320,
                lng: -79.537264,
                info: "Bobbie G. Johnson Pavilion"
            },
            {
                number: '0xf11f',
                //number: '0xf3f8',
                name: '',
                section: 'OtherIcon',
                lat: 37.330683,
                lng: -79.537259,
                info: "Bobbie & Peggy Johnson Quonset Hut Gift Shop"
            },
            {
                number: '',
                name: '',
                section: 'OtherIcon',
                lat: 37.330125,
                lng: -79.537246,
                info: "Smoking Section"
            }
            // women f271
            // food f201
            // shop f11f
            /*{
              number: 1,
              name: 'Homage',
              lat: 37.330728,
              lng: -79.536537,
              info: "As you proceed from the John Robert “Bob” Slaughter portrait bust north towards Reynolds Garden, you will pass by Homage. This monument is a fitting tribute to those sons of Bedford who served and sacrificed for our freedom but is also emblematic of those communities across our country that nurtured those who went away to war and grieved for those who never returned"
            },
            {
              number: 2,
              name: "Sculpture of General Dwight D. Eisenhower",
              lat: 37.331163,
              lng: -79.535834,
              info: "Centered within the garden folly stands The Supreme Commander, a sculpture of General Dwight D. Eisenhower, Supreme Commander for Operation Overlord. Overhead, a tile mosaic map depicts the plan for the coming invasion. Eisenhower is surrounded by portrait busts of his principal subordinates: Air Chief Marshal Sir Arthur William Tedder, Deputy Supreme Commander; Admiral Sir Bertram H. Ramsay, Allied Naval Commander; Air Chief Marshal Sir Trafford L. Leigh-Mallory, Allied Air Forces Commander; Field Marshal Sir Bernard L. Montgomery, D-Day Assault Commander; Lt. Gen. Omar N. Bradley, US 1st Army Commander; and Lt. Gen. Walter Bedell Smith, Chief of Staff."
            },
            {
              number: 3,
              name: "",
              lat: 37.330939,
              lng: -79.535787,
              info: "The patterned central area of the garden echoes the design of the SHAEF (Supreme Headquarters Allied Expeditionary Force) shoulder patch, worn by those tasked with planning the invasion. An example can be found on the southern wall above the text of the Supreme Commander’s Order of the Day for 6 June 1944. Arranged on either side of the Order are monuments honoring the major ground forces participating in D-Day."
            },
            {
              number: 4,
              name: "",
              lat: 37.330757,
              lng: -79.535728,
              info: "Plaques along the eastern and western garden walls mark the transition from preparing the invasion to initiating it. Monuments along the eastern wall recognize academies, colleges, and universities that prepared many of the Allied leaders for their wartime service. Along the western wall, plaques honor the infantry regiments that took part in the Normandy invasion."
            },
            {
              number: 4,
              name: "",
              lat: 37.330776,
              lng: -79.536183,
              info: "Plaques along the eastern and western garden walls mark the transition from preparing the invasion to initiating it. Monuments along the eastern wall recognize academies, colleges, and universities that prepared many of the Allied leaders for their wartime service. Along the western wall, plaques honor the infantry regiments that took part in the Normandy invasion."
            },
            {
              number: 5,
              name: "",
              lat: 37.330648,
              lng: -79.535361,
              info: "For every American who has died in battle, there are grieving family members left behind, who also have made heroic sacrifices. Virginia’s first Gold Star Families Memorial Monument pays tribute to parents, children, spouses, and siblings of those who died in service to their nation at any point in our nation’s history. The stirring “missing man” in the center is a reminder of the profound absence felt by the survivors."
            },
            {
              number: 6,
              name: "",
              lat: 37.330619,
              lng: -79.535966,
              info: "The plaza floor is divided into five segments, alluding to the five D-Day landing beaches: Utah, Omaha, Gold, Juno, and Sword."
            },
            {
              number: 7,
              name: "",
              lat: 37.330646,
              lng: -79.536268,
              info: "Enclosing the plaza are bronze plaques bearing the names of the 4,413 Allied service members killed in action on D-Day. The names of United States service members are on the western wall; the names of the other Allied Expeditionary Force members are on the eastern wall. There is an alphabetical register of names inside the Gift Shop."
            },
            {
              number: 7,
              name: "",
              lat: 37.330608,
              lng: -79.535647,
              info: "Enclosing the plaza are bronze plaques bearing the names of the 4,413 Allied service members killed in action on D-Day. The names of United States service members are on the western wall; the names of the other Allied Expeditionary Force members are on the eastern wall. There is an alphabetical register of names inside the Gift Shop."
            },
            {
              number: 8,
              name: "",
              lat: 37.330453,
              lng: -79.536165,
              info: "The beach tableau depicts the fierce struggle Allied soldiers waged up and down the landing beaches. A stylized bunker serves as a backdrop for the scene."
            },
            {
              number: 9,
              name: "",
              lat: 37.330465,
              lng: -79.535916,
              info: "A granite “Higgins Boat” represents the thousands of various landing craft that transported troops from ships to shore on the morning of D-Day. For its versatility, the “Higgins Boat” was later credited by Eisenhower with winning the war for the Allies."
            },
            {
              number: 10,
              name: "",
              lat: 37.330404,
              lng: -79.535759,
              info: "Nearby, two “hedgehogs” typify the range of obstacles the Germans set in the tidal flats to scuttle landing craft making their way to shore."
            },
            {
              number: 11,
              name: "",
              lat: 37.330353,
              lng: -79.535949,
              info: "The beach sculptures Through the Surf, Death on Shore, Across the Beach, and Scaling the Wall capture troops in various poses of battle; honoring the valor, fidelity, and sacrifice that was the hallmark of Operation Overlord."
            },
            {
              number: 12,
              name: "",
              lat: 37.330288,
              lng: -79.536434,
              info: "West of the beach tableau, George “Jimmy” Green Circle gives homage to the service and achievements of the naval forces of Operation Neptune, the seagoing component of D-Day. Green Circle’s monuments emphasize major vessels and exceptional leadership. More than 5,000 ships participated in the D-Day invasion."
            },
            {
              number: 13,
              name: "",
              lat: 37.330245,
              lng: -79.535551,
              info: "East of the beach tableau, Maurice T. Lawhorne Circle pays tribute to the roles and contributions of the AEF’s air forces on D-Day. More than 11,000 aircraft flew in support of the D-Day operations. Lawhorne Circle includes a series of narrative monuments to distinguished units and leaders."
            },
            {
              number: 14,
              name: "",
              lat: 37.330158,
              lng: -79.536030,
              info: "Final Tribute is a sober tribute to the more than 4,400 members of the Allied Expeditionary Force who were killed on D-Day. Emblematic of death in battle, the inverted rifle and helmet powerfully address the ultimate sacrifice of the fallen."
            },
            {
              number: 15,
              name: "",
              lat: 37.330091,
              lng: -79.535887,
              info: "A triumphal arch rises forty-four-and-a-half feet above Estes Plaza – a pointed allusion to D-Day’s occurrence on the sixth day of the sixth month of 1944. The word OVERLORD inscribed on its facade is the official name of the operation now known simply as D-Day. The black and white stripes emblazoned on the arch recalls the alternating black-and- white stripes that made Allied aircraft readily identifiable."
            },
            {
              number: 16,
              name: "",
              lat: 37.330134,
              lng: -79.536143,
              info: 'The National D-Day Memorial Seal is inscribed on the floor of Estes Plaza directly beneath Overlord Arch. Rendered in Latin, the motto Ad commemorandum fortitudinem, fidelitatem, sacrificiumeorum translates to “Remembering their valor, fidelity, and sacrifice.”'
            },
            {
              number: 17,
              name: "",
              lat: 37.329978,
              lng: -79.536268,
              info: "The flags of the twelve nations of the AEF fly in an arc along the exterior of Estes Plaza. Beginning with the flag of the United States, the flags of the eleven other nations fly alphabetically; Australia, Belgium, Canada, Czechoslovakia, France, Greece, Netherlands, New Zealand, Norway, Poland, and the United Kingdom. Nearby, the allegorical sculpture Valor, Fidelity, Sacrifice honors these qualities in all members of the Allied Expeditionary Force at D-Day."
            },
            {
              number: 18,
              name: "",
              lat: 37.329475,
              lng: -79.536075,
              info: "Le Monument aux Morts was created by French sculptor Edmond de Laheudrie in memory of the forty-four men of Trévières, France, who died in World War I. In the days following D-Day, shrapnel or a round struck the head of the statue, disfiguring it. This recasting of Laheudrie’s sculpture preserves the World War II damage that still mars the World War I original, a reminder that despite the hard-won success at Normandy, D-Day was but the beginning of the end of the war in Europe. The damaged statue serves as a silent lesson on the fragility of peace and the transience of victory."
            },
            {
              number: 19,
              name: "",
              lat: 37.328798,
              lng: -79.536139,
              info: "The Purple Heart Monument stands in the shadow of the garrison flag. Emplaced by the Military Order of the Purple Heart and National D-Day Memorial Foundation, it is dedicated in particular tribute to those who received the Purple Heart for their service on D-Day."
            },
            {
              number: 20,
              name: "",
              lat: 37.329083,
              lng: -79.535927,
              info: "Beyond D-Day: Set in the eastern and western quadrants of the smaller circle around the flag staff in Stettinius Parade stand Clement R. Atlee and Harry S. Truman, the respective successors of Churchill and Roosevelt."
            },
            {
              number: 20,
              name: "",
              lat: 37.329093,
              lng: -79.536303,
              info: "Beyond D-Day: Set in the eastern and western quadrants of the smaller circle around the flag staff in Stettinius Parade stand Clement R. Atlee and Harry S. Truman, the respective successors of Churchill and Roosevelt."
            }*/
        ];
        return markers;
    };
    MarkersProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MarkersProvider);
    return MarkersProvider;
}());

//# sourceMappingURL=markers.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorialSearchModalPageModule", function() { return MemorialSearchModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memorial_search_modal__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MemorialSearchModalPageModule = /** @class */ (function () {
    function MemorialSearchModalPageModule() {
    }
    MemorialSearchModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__memorial_search_modal__["a" /* MemorialSearchModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__memorial_search_modal__["a" /* MemorialSearchModalPage */]),
            ],
        })
    ], MemorialSearchModalPageModule);
    return MemorialSearchModalPageModule;
}());

//# sourceMappingURL=memorial-search-modal.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemorialSearchModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemorialSearchModalPage = /** @class */ (function () {
    function MemorialSearchModalPage(viewCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.flag = '';
        this.soldier = this.navParams.get('soldier');
        if (this.soldier['country'] == "USA") {
            this.flag = "usa.png";
        }
        else if (this.soldier['country'] == "United Kingdom") {
            this.flag = "uk.png";
        }
        else if (this.soldier['country'] == "France") {
            this.flag = "france.png";
        }
        else if (this.soldier['country'] == "Norway") {
            this.flag = "norway.png";
        }
        else if (this.soldier['country'] == "Belgium") {
            this.flag = "belgium.png";
        }
        else if (this.soldier['country'] == "New Zealand") {
            this.flag = "newZealand.png";
        }
        else if (this.soldier['country'] == "Australia") {
            this.flag = "australia.png";
        }
        else if (this.soldier['country'] == "Canada") {
            this.flag = "canada.png";
        }
    }
    MemorialSearchModalPage.prototype.onClose = function () {
        this.viewCtrl.dismiss();
    };
    MemorialSearchModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-memorial-search-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/memorial-search-modal/memorial-search-modal.html"*/'<ion-header no-border>\n    \n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="onClose()">\n        Close\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n <div class="soldierModalCon">\n   <div class="countryImgCon">\n      <img class="countryImg" src="assets/imgs/flags/{{flag}}" />\n   </div>\n  \n  \n  <ion-grid class="soldierGrid">\n      <ion-row class="soldierRowWrap">\n        <ion-col>\n          <ion-row>\n              <ion-col><h1 class="name">{{ soldier.first_name }} <div class="soldierName" *ngIf="soldier.middle_initial">{{ soldier.middle_initial }} </div><div class="soldierName" *ngIf="soldier.second_middle_initial">{{ soldier.second_middle_initial }} </div>{{ soldier.last_name }}<div class="soldierName" *ngIf="soldier.suffix"> {{ soldier.suffix }}</div></h1></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class="soldierRowWrap">\n        <ion-col [class.firstColWrap]="soldier.service_id">\n          <ion-row>\n            <ion-col><h1 class="fieldName">Plaque ID:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1 class="plaqueID">{{ soldier.plaque_id }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-6 *ngIf="soldier.service_id">\n          <ion-row>\n            <ion-col><h1 class="fieldName">Service ID:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col text-center><h1>{{ soldier.service_id }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row class="soldierRowWrap">\n        <ion-col>\n          <ion-row>\n            <ion-col><h1 class="fieldName">Country:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1>{{ soldier.country }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class="soldierRowWrap" *ngIf="soldier.state_province">\n        <ion-col>\n          <ion-row>\n            <ion-col><h1 class="fieldName">State / Province:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1>{{ soldier.state_province }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class="soldierRowWrap">\n        <ion-col [class.firstColWrap]="soldier.rank" *ngIf="soldier.branch">\n          <ion-row>\n            <ion-col><h1 class="fieldName">Branch:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1>{{ soldier.branch }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n        <ion-col col-6 *ngIf="soldier.rank">\n          <ion-row>\n            <ion-col><h1 class="fieldName">Rank:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1>{{ soldier.rank }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class="soldierRowWrap" *ngIf="soldier.division">\n        <ion-col>\n          <ion-row>\n            <ion-col><h1 class="fieldName">Division:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1>{{ soldier.division }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row class="soldierRowWrap">\n        <ion-col [class.firstColWrap]="soldier.beach" *ngIf="soldier.unit">\n          <ion-row>\n            <ion-col><h1 class="fieldName">Unit:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1>{{ soldier.unit }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n        \n      </ion-row>\n      <ion-row class="soldierRowWrap" *ngIf="soldier.beach">\n        <ion-col>\n          <ion-row>\n            <ion-col><h1 class="fieldName">Beach:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1>{{ soldier.beach }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="soldier.burial_place" class="soldierRowWrap">\n        <ion-col>\n          <ion-row>\n            <ion-col><h1 class="fieldName">Burial Place:</h1></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col><h1>{{ soldier.burial_place }}</h1></ion-col>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/memorial-search-modal/memorial-search-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MemorialSearchModalPage);
    return MemorialSearchModalPage;
}());

//# sourceMappingURL=memorial-search-modal.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialOpeningsModalPageModule", function() { return SpecialOpeningsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__special_openings_modal__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SpecialOpeningsModalPageModule = /** @class */ (function () {
    function SpecialOpeningsModalPageModule() {
    }
    SpecialOpeningsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__special_openings_modal__["a" /* SpecialOpeningsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__special_openings_modal__["a" /* SpecialOpeningsModalPage */]),
            ],
        })
    ], SpecialOpeningsModalPageModule);
    return SpecialOpeningsModalPageModule;
}());

//# sourceMappingURL=special-openings-modal.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialOpeningsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecialOpeningsModalPage = /** @class */ (function () {
    function SpecialOpeningsModalPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    SpecialOpeningsModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SpecialOpeningsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-special-openings-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/special-openings-modal/special-openings-modal.html"*/'<ion-header>\n    \n  <ion-navbar>\n    <ion-title>\n      Special Openings\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div class="specialCon">\n      <div>\n          On some occasions it is impossible for a group to schedule their visit during the Memorial’s normal operating hours: 10:00 AM to 5:00 PM.\n      </div>\n      \n      <div>\n          However, special arrangements can be made to have our site open before or after these hours for an additional fee.\n      </div>\n      \n      <div>\n          Regular admission fees will be charged in addition to the fees below.\n      </div>\n      \n      <div text-center>\n        <h4>\n          FOR SPECIAL OPENINGS BETWEEN THE HOURS OF:\n        </h4>  \n      </div>\n\n      <ion-grid>\n        <ion-row align-items-center>\n          <ion-col>\n              8:00 AM and<br>10:00 AM\n          </ion-col>\n          <ion-col>\n              $200\n          </ion-col>\n        </ion-row>\n        <ion-row align-items-center>\n          <ion-col>\n              5:00 PM and<br>8:00 PM\n          </ion-col>\n          <ion-col>\n              $200\n          </ion-col>\n        </ion-row>\n        <ion-row align-items-center>\n          <ion-col>\n              Before 8:00 AM\n          </ion-col>\n          <ion-col>\n              $300\n          </ion-col>\n        </ion-row>\n        <ion-row align-items-center>\n          <ion-col>\n              After 8:00 PM\n          </ion-col>\n          <ion-col>\n              $300\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      \n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/special-openings-modal/special-openings-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
    ], SpecialOpeningsModalPage);
    return SpecialOpeningsModalPage;
}());

//# sourceMappingURL=special-openings-modal.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersPageModule", function() { return PartnersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partners__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PartnersPageModule = /** @class */ (function () {
    function PartnersPageModule() {
    }
    PartnersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__partners__["a" /* PartnersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__partners__["a" /* PartnersPage */]),
            ],
        })
    ], PartnersPageModule);
    return PartnersPageModule;
}());

//# sourceMappingURL=partners.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PartnersPage = /** @class */ (function () {
    function PartnersPage(browser) {
        this.browser = browser;
        this.options = {
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            closebuttoncaption: 'Close',
            toolbar: 'yes'
        };
    }
    PartnersPage.prototype.openWeb = function (link) {
        this.browser.create(link, "_system", this.options);
    };
    PartnersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-partners',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/partners/partners.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Partners</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div id="con">\n    <ion-card>\n      <ion-card-header>\n        <h2>Virginia WWI and WWII Commemoration Commission</h2>\n      </ion-card-header>\n      <img src="./assets/imgs/ww2.png" />\n      <ion-card-content>\n        <p>\n            The Virginia World War I and World War II Commemoration Commission was created by the General Assembly to plan, develop, \n            and carry out programs and activities to commemorate the 100th anniversary of World War I and the 75th anniversary of World War II.\n        </p>\n\n        <div class="cardBtnCon" text-center>\n          <button (click)="openWeb(\'https://www.virginiawwiandwwii.org/\')" ion-button clear large icon-start>\n            <ion-icon name=\'globe\'></ion-icon>\n            Website\n          </button>\n        </div>\n        \n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <h2>Virginia Is For Lovers</h2>\n      </ion-card-header>\n      <img src="./assets/imgs/vaLovers.png" />\n      <ion-card-content>\n        <p>\n            Nearly 50 years after its creation, “Virginia is for Lovers” continues to be one of the most recognizable and iconic tourism slogans of all time.\n        </p>\n\n        <div class="cardBtnCon" text-center>\n          <button (click)="openWeb(\'https://www.virginia.org/\')" ion-button clear large icon-start>\n            <ion-icon name=\'globe\'></ion-icon>\n            Website\n          </button>\n        </div>\n        \n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/partners/partners.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], PartnersPage);
    return PartnersPage;
}());

//# sourceMappingURL=partners.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportModalPageModule", function() { return SupportModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_modal__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SupportModalPageModule = /** @class */ (function () {
    function SupportModalPageModule() {
    }
    SupportModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__support_modal__["a" /* SupportModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__support_modal__["a" /* SupportModalPage */]),
            ],
        })
    ], SupportModalPageModule);
    return SupportModalPageModule;
}());

//# sourceMappingURL=support-modal.module.js.map

/***/ }),

/***/ 438:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsModalPageModule", function() { return TicketsModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tickets_modal__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TicketsModalPageModule = /** @class */ (function () {
    function TicketsModalPageModule() {
    }
    TicketsModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tickets_modal__["a" /* TicketsModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tickets_modal__["a" /* TicketsModalPage */]),
            ],
        })
    ], TicketsModalPageModule);
    return TicketsModalPageModule;
}());

//# sourceMappingURL=tickets-modal.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicketsModalPage = /** @class */ (function () {
    function TicketsModalPage(viewCtrl, browser) {
        this.viewCtrl = viewCtrl;
        this.browser = browser;
        this.options = {
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            closebuttoncaption: 'Close',
            toolbar: 'yes'
        };
    }
    TicketsModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    TicketsModalPage.prototype.purchaseTicket = function () {
        // OLD this.browser.create("https://www.dday.org/purchase-tickets/", "_system", this.options);
        this.browser.create("https://www.dday.org/tickets/", "_system", this.options);
    };
    TicketsModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tickets-modal',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/tickets-modal/tickets-modal.html"*/'<ion-header>\n  \n  <ion-navbar>\n    <ion-title>\n      Purchase Tickets\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="dismiss()">Close</button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class="ticketsCon">\n      <div text-center>\n          <button color="ddayBlue" full ion-button (click)="purchaseTicket()">\n            Purchase Tickets\n          </button>\n      </div>\n      \n\n      <!--<div>\n        Tickets to the Memorial are sold at the Bedford Area Welcome Center (at the foot of the Memorial), 816 Burks Hill Road, Bedford, VA, from 10:00 AM – 4:30 PM daily.\n      </div>-->\n      \n      <div class="admission">\n        <h3>\n          ADMISSION FEES\n        </h3>\n        \n        <div>\n          <b>\n            Adult – $12 at Memorial/$10 online\n          </b>\n        </div>\n\n        <div>\n          <b>\n            Veteran/Active Duty Military – $10 at Memorial/$8 online\n          </b>\n        </div>\n\n        <div>\n          <b>\n            Student – $8 at Memorial/$6 online Ages 6 – 18 or older with college ID\n          </b>\n        </div>\n\n        <div>\n          <b>\n            Under 6 – FREE\n          </b>\n        </div>\n\n        <div>\n          <b>\n            Thomas Jefferson’s Poplar Forest Combo Ticket – $20\n          </b>\n        </div>\n\n        <!-- <div>\n          <i>\n              *27% discount over regular price\n          </i>\n        </div> -->\n\n        <div>\n          <b>\n            Includes admission and tour at both sites. $8 – $10 discount over regular price. Cannot be combined with group tour discount. Valid for one year from date of purchase. Sites may be visited on separate dates.\n          </b>\n        </div>\n\n        <!-- <div>\n          The National D-Day Memorial is open daily from 10 AM to 5 PM (Ticket sales end at 4:30 PM.) with the exception of Monday closings December through February.  \n          Closed on Christmas Eve, Christmas Day, New Year’s Day, and Thanksgiving Day. The Memorial closes at noon on New Year’s Eve. Other periodic closings are \n          possible due to systems maintenance and inclement weather. The site will be cleared if thunder or lightning are nearby. \n          Please call 540-587-3619 to check our operational status before traveling.\n        </div>\n\n        <h3>\n          EACH PAID ADMISSION INCLUDES A COMPLIMENTARY GUIDED WALKING TOUR.\n        </h3>\n\n        <div>\n          Walking tours are scheduled daily between 10 AM and 4 PM. Guided walking tours are approximately one hour and leave from the Gift Store Quonset hut. \n          Please ask for the next available tour time when purchasing your tickets at the Bedford Area Welcome Center\n        </div>\n\n        <div>\n          For our visitors requiring mobility assistance, wheelchairs are provided at no charge. Please request a wheelchair at the ticket counter.\n        </div>\n\n        <div>\n            Patrons are not required to take the guided walking tour. With paid admission, visitors can stroll the grounds with the provided site map. \n            The site map includes information on the architecture and the historical narrative of the Memorial.\n        </div>-->\n      </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/tickets-modal/tickets-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], TicketsModalPage);
    return TicketsModalPage;
}());

//# sourceMappingURL=tickets-modal.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WallPageModule", function() { return WallPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wall__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WallPageModule = /** @class */ (function () {
    function WallPageModule() {
    }
    WallPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wall__["a" /* WallPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wall__["a" /* WallPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]
            ],
        })
    ], WallPageModule);
    return WallPageModule;
}());

//# sourceMappingURL=wall.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_memorial_search_memorial_search__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memorial_search_modal_memorial_search_modal__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WallPage = /** @class */ (function () {
    function WallPage(searchProvider, alertCtrl, loadingCtrl, modalCtrl) {
        this.searchProvider = searchProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.memorialData = [];
        this.showResults = false;
        this.searchTerm = '';
        this.searching = false;
        this.allData = []; //Store all data from provider
        this.filterData = []; //Store filtered data
    }
    WallPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this._subscription = this.searchProvider.getJSON().subscribe(function (result) {
            _this.allData = result;
        });
        this.filterData = this.allData;
    };
    WallPage.prototype.ionViewDidLeave = function () {
        this._subscription.unsubscribe();
    };
    WallPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Please enter a valid name to search',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    WallPage.prototype.getItems = function (event) {
        var _this = this;
        if (this.searchTerm == "") {
            this.presentAlert();
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: "\n        <ion-spinner></ion-spinner>"
            });
            loading_1.present().then(function () {
                _this.filterData = _this.allData.filter(function (item) {
                    var name = item.first_name.toLocaleLowerCase();
                    name = name + " " + item.last_name.toLocaleLowerCase();
                    return name.indexOf(_this.searchTerm.toLocaleLowerCase()) > -1;
                });
                loading_1.dismiss();
                _this.showResults = true;
            });
        }
    };
    WallPage.prototype.soldierClicked = function (item) {
        //console.log(item);
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__memorial_search_modal_memorial_search_modal__["a" /* MemorialSearchModalPage */], { soldier: item });
        modal.present();
    };
    WallPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wall',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/wall/wall.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Memorial Wall Name Finder</ion-title>\n  </ion-navbar>\n  \n    <ion-toolbar>\n        <ion-searchbar [(ngModel)]="searchTerm" (search)="getItems($event)"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n\n  <div *ngIf="showResults">\n  <button ion-item *ngFor="let item of filterData | memorialSearchPipe" (click)="soldierClicked(item)">\n    <ion-avatar item-left *ngIf="item.country != \'\'">\n      <img src="assets/imgs/flags/usa.png" *ngIf="item.country == \'USA\'" onError="this.parentNode.style=\'display:none\';" />\n      <img src="assets/imgs/flags/uk.png" *ngIf="item.country == \'United Kingdom\'" onError="this.parentNode.style=\'display:none\';" />\n      <img src="assets/imgs/flags/canada.png" *ngIf="item.country == \'Canada\'" onError="this.parentNode.style=\'display:none\';" />\n      <img src="assets/imgs/flags/norway.png" *ngIf="item.country == \'Norway\'" onError="this.parentNode.style=\'display:none\';" />\n      <img src="assets/imgs/flags/newZealand.png" *ngIf="item.country == \'New Zealand\'" onError="this.parentNode.style=\'display:none\';" />\n      <img src="assets/imgs/flags/france.png" *ngIf="item.country == \'France\'" onError="this.parentNode.style=\'display:none\';" />\n      <img src="assets/imgs/flags/belgium.png" *ngIf="item.country == \'Belgium\'" onError="this.parentNode.style=\'display:none\';" />\n      <img src="assets/imgs/flags/australia.png" *ngIf="item.country == \'Australia\'" onError="this.parentNode.style=\'display:none\';" />\n    </ion-avatar>\n\n    <ion-label>{{ item.first_name }} <div class="searchBtnLbl" *ngIf="item.middle_initial">{{ item.middle_initial }} </div><div class="searchBtnLbl" *ngIf="item.second_middle_initial">{{ item.second_middle_initial }} </div>{{ item.last_name }}<div class="searchBtnLbl" *ngIf="item.suffix"> {{ item.suffix }}</div></ion-label>\n\n  </button> \n\n</div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/wall/wall.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_memorial_search_memorial_search__["a" /* MemorialSearchProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], WallPage);
    return WallPage;
}());

//# sourceMappingURL=wall.js.map

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitingPageModule", function() { return VisitingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visiting__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VisitingPageModule = /** @class */ (function () {
    function VisitingPageModule() {
    }
    VisitingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__visiting__["a" /* VisitingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__visiting__["a" /* VisitingPage */]),
            ],
        })
    ], VisitingPageModule);
    return VisitingPageModule;
}());

//# sourceMappingURL=visiting.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModalPageModule", function() { return WelcomeModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_modal__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomeModalPageModule = /** @class */ (function () {
    function WelcomeModalPageModule() {
    }
    WelcomeModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome_modal__["a" /* WelcomeModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome_modal__["a" /* WelcomeModalPage */]),
            ],
        })
    ], WelcomeModalPageModule);
    return WelcomeModalPageModule;
}());

//# sourceMappingURL=welcome-modal.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomePage = /** @class */ (function () {
    function WelcomePage(browser) {
        this.browser = browser;
        this.options = {
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            closebuttoncaption: 'Close',
            toolbar: 'yes'
        };
    }
    WelcomePage.prototype.website = function (link) {
        this.browser.create("" + link, "_system", this.options);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/welcome/welcome.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Bedford</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="welcomeWrapper">\n    <ion-card>\n      <ion-card-header>\n        Welcome to Bedford\n      </ion-card-header>\n\n      <img src="./assets/imgs/bedford/bedfordRemembers.jpg" />\n\n      <ion-card-content>\n        <p>\n          Established as the town of Liberty in 1782, Bedford quickly became well known as the county seat and as a center for the production and distribution of tabacco, \n          corn, wool, textiles and eventually synthetic rubber products. The community of Beford is located at the foot of the Blue Ridge Mountains with the picturesque Peaks \n          of Otter as a backdrop.\n        </p>\n\n        <p>\n          Many of Bedford\'s structures were built in the 1880s and 1890s, replacing the wooden buildings lost in a fire in 1884. The primary architecture reflects the Victorian era\'s \n          Italianate style with ornate window details and a wide variety of arches and decorative cornices. In contrast to the elaborate Victorian buildings, Bedford also boasts a number of \n          classical Revival buildings, elegant in the simplicity of their design.\n        </p>\n\n        <p>\n          It is in this setting that the famed "Bedford Boys" would spend their youth. Most joined up with the Virginia National Guard - Company A of the 116th Infantry Regiment of the 29th \n          Division. The primary incentive for many was the extra dollar per day and the handsome new uniforms that many of the men felt would attract the ladies. Few of them believed \n          they would be mobilized for war and embroiled in the largest invasion in history.\n        </p>\n\n        <!-- <p>\n          Trace their footsteps through what would become the most important event of the 20th century. Purchase tickets at the Bedford Area Welcome Center to begin your tour at the \n          National D-Day Memorial where you will learn the history of the Normandy Invasion and the price on community paid for freedom.\n        </p> -->\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        Bedford Area Welcome Center\n      </ion-card-header>\n\n      <img src="./assets/imgs/bedford/welcomeCenter.jpg" />\n\n      <ion-card-content>\n        <p>\n          From natural beauty to rich history, the Bedford region has much to offer and the Bedford Area Welcome Center is the place to start your visit. The building features large \n          expanses of glass orientated to absorb views of the Peaks of Otter and the National D-Day Memorial.<!-- Tickets to the Memorial are sold from here 10:00 AM - 4:30 PM daily.--> \n          There is also an orientation video about D-Day available to view.\n        </p>\n        <div>\n          <button color="ddayBlue" full ion-button (click)="website(\'https://destinationbedfordva.com\')">Welcome Center\'s Website</button>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        National D-Day Memorial\n      </ion-card-header>\n\n      <img src="./assets/imgs/bedford/overlord.jpg" />\n\n      <ion-card-content>\n        <p>\n          Among the hundreds of thousands massed off the shores of Normandy on the morning of 6 June 1944 were 44 soldiers, sailors, and airmen from the town and county of Bedford, Virginia. \n          Thirty-seven of these young men belonged to Company A of the 116th Infantry Regiment, 29th Division. Three others were assigned to other companies of the 116th, another one to a \n          different division, and one served with the Navy in support of the landings. Two more sons of Bedford were in the skies that morning as part of the pre-invasion bombardment. For \n          almost all of them, this would be their baptism by fire.\n        </p>\n\n        <p>\n          The invasion plan called for Company A to land at Dog Green sector of Omaha Beach at 0630 as part of the first wave. Unfortunately, heavy cloud cover that morning made distinguishing targets difficult. \n          Fearful of accidentally dropping ordnance on Allied landing craft waiting offshore, many planes and ships directed their fire further inland, leaving German beach fortifications in some places \n          almost untouched - with catastrophic consequences. When Company A landed on target and on time at Dog Green beach - one of only a handful of units to do so - they received the fire \n          intended for a much larger force.\n        </p>\n\n        <p>\n          For Bedford, the result was especially devastating. Of 37 assigned to Company A, 31 loaded into landing craft and headed to Omaha Beach in the first wave; the remainder belonged to supply details and \n          would arrive later. En route, a landing craft struck an obstacle and sank, stranding dozens far from shore, including five of Bedford\'s boys. The remaining 26 successfully reached Omaha Beach, where \n          16 were killed and 4 wounded in a matter of minutes. Three others were unaccounted for and later presumed killed in action. Another Bedford boy was killed in action elsewhere on Omaha Beach with Company \n          F, bringing Bedford\'s D-Day fatalities to a total number of 20. In comparison with its 1940s population, Bedford suffered the nation\'s severest per capita D-Day loss, a somber distinction for this rural \n          Virginia community. For that reason, Congress designated Bedford as the site for the National D-Day Memorial.\n        </p>\n\n        <p>\n          Illustrating the depths of Bedford\'s loss in the story of Mrs. John Hoback, a woman of grit and character. In July 1944, she recieved telegrams notifying her that both of her sons had been lost on \n          D-Day. She carried on, but she did so with a large piece of herself missing. Many years later when she was on the brink of death and lay in her bed (tired and incoherent after a series of strokes), \n          she asked over and over again, "Where are my boys?" When death closed her eyes for the last time, she finally found them.\n        </p>\n\n        <p>\n          The war changed the men who fought it and it changed the ones left behind to mourn. The war also transformed communities like Bedford who sent their young sons and daughters off to war. \n          Many of them never returned. Bedford is emblematic of all those homefront communities who served and sacrificed so we could be free.\n        </p>\n\n        <div>\n          <button color="ddayBlue" full ion-button (click)="website(\'https://dday.org\')">National D-Day Memorial\'s Webstie</button>\n        </div>\n      </ion-card-content>\n\n      <img src="./assets/imgs/bedford/statue.jpg" />\n    </ion-card>\n\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__visiting_visiting__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__info_info__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, screenOrientation) {
        this.navCtrl = navCtrl;
        this.screenOrientation = screenOrientation;
        this.visitingPage = __WEBPACK_IMPORTED_MODULE_2__visiting_visiting__["a" /* VisitingPage */];
        this.mapPage = __WEBPACK_IMPORTED_MODULE_3__map_map__["a" /* MapPage */];
        this.infoPage = __WEBPACK_IMPORTED_MODULE_4__info_info__["a" /* InfoPage */];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.screenOrientation.onChange().subscribe(function () {
            setTimeout(function () {
                _this.content.resize();
                console.log('changed');
            }, 100);
        });
        var video = this.videoPlayer.nativeElement;
        video.type = "video/mp4";
        video.src = "assets/videos/ddayVideo.mp4";
        video.load();
        video.volume = 0.05;
        video.pause();
        var playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then(function (_) {
            })
                .catch(function (error) {
                video.setAttribute("controls", "controls");
                console.log(error);
                // Auto-play was prevented
                // Show paused UI.
            });
        }
        document.addEventListener("pause", onPause, false);
        function onPause() {
            video.stop();
        }
    };
    HomePage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('video1'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "videoPlayer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title><!-- <ion-icon name="ios-cart"></ion-icon> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="no-scroll">\n\n  <ion-grid id="outerGrid">\n    <ion-row>\n      <ion-col>\n        <ion-grid>\n          <ion-row align-items-start>\n            <video #video1 webkit-playsinline=“webkit-playsinline” playsinline loop></video>\n          </ion-row>\n          <ion-row id="homeBtnsRow">\n            <ion-col col-4>\n              <button ion-button full color="ddayBlue" (click)="openPage(visitingPage)">\n                Visiting\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button full color="ddayBlue" (click)="openPage(mapPage)">\n                Map\n              </button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button full color="ddayBlue" (click)="openPage(infoPage)">\n                Information\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-col>\n    </ion-row>\n    <ion-row align-items-center>\n      <ion-col text-center>\n          <img src="assets/imgs/logo.png" />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(494);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic2_calendar__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_pinch_zoom__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_calendar__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_mobile_accessibility__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about_module__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_brick_brick_module__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_brick_search_modal_brick_search_modal_module__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_events_events_module__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_map_map_module__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_visiting_visiting_module__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_wall_wall_module__ = __webpack_require__(440);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_faq_faq_module__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_info_info_module__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_memorial_search_modal_memorial_search_modal_module__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_event_modal_event_modal_module__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_tickets_modal_tickets_modal_module__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_group_modal_group_modal_module__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_hours_modal_hours_modal_module__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_special_openings_modal_special_openings_modal_module__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_general_info_modal_general_info_modal_module__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_welcome_modal_welcome_modal_module__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_bedford_boys_modal_bedford_boys_modal_module__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_dday_today_modal_dday_today_modal_module__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_at_memorial_modal_at_memorial_modal_module__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_support_modal_support_modal_module__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_partners_partners_module__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_welcome_welcome_module__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_homefront_tour_homefront_tour_module__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_homefront_tour_slides_homefront_tour_slides_module__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_memorial_search_memorial_search__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_events_events__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_markers_markers__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_cherry_trees_cherry_trees_module__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_cherry_trees_search_modal_cherry_trees_search_modal_module__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';




































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_pinch_zoom__["a" /* PinchZoomModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic2_calendar__["a" /* NgCalendarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {
                    backButtonIcon: "ios-arrow-back",
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/at-memorial-modal/at-memorial-modal.module#AtMemorialModalPageModule', name: 'AtMemorialModalPage', segment: 'at-memorial-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bedford-boys-modal/bedford-boys-modal.module#BedfordBoysModalPageModule', name: 'BedfordBoysModalPage', segment: 'bedford-boys-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brick-search-modal/brick-search-modal.module#BrickSearchModalPageModule', name: 'BrickSearchModalPage', segment: 'brick-search-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/brick/brick.module#BrickPageModule', name: 'BrickPage', segment: 'brick', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cherry-trees/cherry-trees.module#CherryTreesPageModule', name: 'CherryTreesPage', segment: 'cherry-trees', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cherry-trees-search-modal/cherry-trees-search-modal.module#CherryTreesSearchModalPageModule', name: 'CherryTreesSearchModalPage', segment: 'cherry-trees-search-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/dday-today-modal/dday-today-modal.module#DdayTodayModalPageModule', name: 'DdayTodayModalPage', segment: 'dday-today-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/faq/faq.module#FaqPageModule', name: 'FaqPage', segment: 'faq', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/events/events.module#EventsPageModule', name: 'EventsPage', segment: 'events', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/general-info-modal/general-info-modal.module#GeneralInfoModalPageModule', name: 'GeneralInfoModalPage', segment: 'general-info-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/group-modal/group-modal.module#GroupModalPageModule', name: 'GroupModalPage', segment: 'group-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homefront-tour-slides/homefront-tour-slides.module#HomefrontTourSlidesPageModule', name: 'HomefrontTourSlidesPage', segment: 'homefront-tour-slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hours-modal/hours-modal.module#HoursModalPageModule', name: 'HoursModalPage', segment: 'hours-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/homefront-tour/homefront-tour.module#HomefrontTourPageModule', name: 'HomefrontTourPage', segment: 'homefront-tour', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/memorial-search-modal/memorial-search-modal.module#MemorialSearchModalPageModule', name: 'MemorialSearchModalPage', segment: 'memorial-search-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/special-openings-modal/special-openings-modal.module#SpecialOpeningsModalPageModule', name: 'SpecialOpeningsModalPage', segment: 'special-openings-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/partners/partners.module#PartnersPageModule', name: 'PartnersPage', segment: 'partners', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/support-modal/support-modal.module#SupportModalPageModule', name: 'SupportModalPage', segment: 'support-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tickets-modal/tickets-modal.module#TicketsModalPageModule', name: 'TicketsModalPage', segment: 'tickets-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wall/wall.module#WallPageModule', name: 'WallPage', segment: 'wall', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/visiting/visiting.module#VisitingPageModule', name: 'VisitingPage', segment: 'visiting', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome-modal/welcome-modal.module#WelcomeModalPageModule', name: 'WelcomeModalPage', segment: 'welcome-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pipes_pipes_module__["a" /* PipesModule */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about_module__["AboutPageModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_brick_brick_module__["BrickPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_brick_search_modal_brick_search_modal_module__["BrickSearchModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_events_events_module__["EventsPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_map_map_module__["MapPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_visiting_visiting_module__["VisitingPageModule"],
                __WEBPACK_IMPORTED_MODULE_22__pages_wall_wall_module__["WallPageModule"],
                __WEBPACK_IMPORTED_MODULE_23__pages_faq_faq_module__["FaqPageModule"],
                __WEBPACK_IMPORTED_MODULE_24__pages_info_info_module__["InfoPageModule"],
                __WEBPACK_IMPORTED_MODULE_25__pages_memorial_search_modal_memorial_search_modal_module__["MemorialSearchModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_26__pages_event_modal_event_modal_module__["EventModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_27__pages_tickets_modal_tickets_modal_module__["TicketsModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_28__pages_group_modal_group_modal_module__["GroupModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_29__pages_hours_modal_hours_modal_module__["HoursModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_30__pages_special_openings_modal_special_openings_modal_module__["SpecialOpeningsModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_31__pages_general_info_modal_general_info_modal_module__["GeneralInfoModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_32__pages_welcome_modal_welcome_modal_module__["WelcomeModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_33__pages_bedford_boys_modal_bedford_boys_modal_module__["BedfordBoysModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_34__pages_dday_today_modal_dday_today_modal_module__["DdayTodayModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_35__pages_at_memorial_modal_at_memorial_modal_module__["AtMemorialModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_36__pages_support_modal_support_modal_module__["SupportModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_37__pages_partners_partners_module__["PartnersPageModule"],
                __WEBPACK_IMPORTED_MODULE_38__pages_welcome_welcome_module__["WelcomePageModule"],
                __WEBPACK_IMPORTED_MODULE_39__pages_homefront_tour_homefront_tour_module__["HomefrontTourPageModule"],
                __WEBPACK_IMPORTED_MODULE_40__pages_homefront_tour_slides_homefront_tour_slides_module__["HomefrontTourSlidesPageModule"],
                __WEBPACK_IMPORTED_MODULE_44__pages_cherry_trees_cherry_trees_module__["CherryTreesPageModule"],
                __WEBPACK_IMPORTED_MODULE_45__pages_cherry_trees_search_modal_cherry_trees_search_modal_module__["CherryTreesSearchModalPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                //StatusBar,
                //SplashScreen,
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_mobile_accessibility__["a" /* MobileAccessibility */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_41__providers_memorial_search_memorial_search__["a" /* MemorialSearchProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_events_events__["a" /* EventsProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_markers_markers__["a" /* MarkersProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderNamesPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderNamesPipe = /** @class */ (function () {
    function OrderNamesPipe() {
    }
    OrderNamesPipe.prototype.transform = function (array) {
        array.sort(function (a, b) {
            if (a['name'] < b['name']) {
                return -1;
            }
            else if (a['name'] > b['name']) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    OrderNamesPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'orderNames',
        })
    ], OrderNamesPipe);
    return OrderNamesPipe;
}());

//# sourceMappingURL=order-names.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemorialSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MemorialSearchPipe = /** @class */ (function () {
    function MemorialSearchPipe() {
    }
    MemorialSearchPipe.prototype.transform = function (array) {
        array.sort(function (a, b) {
            var firstPerson, secondPerson;
            firstPerson = a['first_name'] + ' ';
            if (a['middle_initial'] && a['middle_initial'] != '') {
                firstPerson = firstPerson + a['middle_initial'] + ' ';
                if (a['second_middle_initial'] && a['second_middle_initial'] != '') {
                    firstPerson = firstPerson + a['second_middle_initial'] + ' ';
                }
            }
            firstPerson = firstPerson + a['last_name'];
            if (a['suffix'] && a['suffix'] != '') {
                firstPerson = firstPerson + ' ' + a['suffix'];
            }
            secondPerson = b['first_name'] + ' ';
            if (b['middle_initial'] && b['middle_initial'] != '') {
                secondPerson = secondPerson + b['middle_initial'] + ' ';
                if (b['second_middle_initial'] && b['second_middle_initial'] != '') {
                    secondPerson = secondPerson + b['second_middle_initial'] + ' ';
                }
            }
            secondPerson = secondPerson + b['last_name'];
            if (b['suffix'] && b['suffix'] != '') {
                secondPerson = secondPerson + ' ' + b['suffix'];
            }
            if (firstPerson < secondPerson) {
                return -1;
            }
            else if (firstPerson > secondPerson) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return array;
    };
    MemorialSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'memorialSearchPipe',
        })
    ], MemorialSearchPipe);
    return MemorialSearchPipe;
}());

//# sourceMappingURL=memorial-search.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemorialSearchProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemorialSearchProvider = /** @class */ (function () {
    function MemorialSearchProvider(http) {
        var _this = this;
        this.http = http;
        this.getJSON().subscribe(function (data) {
            //console.log(data)
            _this.memorialData = data;
        });
        this.getBrickJSON().subscribe(function (data) {
            _this.brickData = data;
        });
        this.getCherryTreesJSON().subscribe(function (data) {
            _this.cherryTreesData = data;
        });
    }
    MemorialSearchProvider.prototype.getJSON = function () {
        return this.http.get("./assets/data/ddayMemorialSearch.json");
    };
    MemorialSearchProvider.prototype.getBrickJSON = function () {
        return this.http.get("./assets/data/bricks.json");
    };
    MemorialSearchProvider.prototype.getCherryTreesJSON = function () {
        return this.http.get("./assets/data/cherryTrees.json");
    };
    MemorialSearchProvider.prototype.getMemorialData = function () {
        return this.getMemorialData;
    };
    MemorialSearchProvider.prototype.getBrickData = function () {
        return this.brickData;
    };
    MemorialSearchProvider.prototype.getCherryTreesData = function () {
        return this.cherryTreesData;
    };
    MemorialSearchProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MemorialSearchProvider);
    return MemorialSearchProvider;
}());

//# sourceMappingURL=memorial-search.js.map

/***/ }),

/***/ 822:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 829:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_mobile_accessibility__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_map_map__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_events_events__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_wall_wall__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_brick_brick__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_faq_faq__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_info_info__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_visiting_visiting__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_partners_partners__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_homefront_tour_homefront_tour__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_support_modal_support_modal__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cherry_trees_cherry_trees__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__capacitor_core__ = __webpack_require__(830);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';


















var MyApp = /** @class */ (function () {
    function MyApp(platform, 
        //public statusBar: StatusBar, 
        //public splashScreen: SplashScreen,
        mobileAccess, browser, screenOrientation) {
        this.platform = platform;
        this.mobileAccess = mobileAccess;
        this.browser = browser;
        this.screenOrientation = screenOrientation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.options = {
            hardwareback: 'yes',
            mediaPlaybackRequiresUserAction: 'yes',
            closebuttoncaption: 'Close',
            toolbar: 'yes'
        };
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
            { title: 'Visiting', component: __WEBPACK_IMPORTED_MODULE_13__pages_visiting_visiting__["a" /* VisitingPage */] },
            { title: 'Map', component: __WEBPACK_IMPORTED_MODULE_7__pages_map_map__["a" /* MapPage */] },
            //{ title: 'Virtual Guided Tour', component: "" },
            { title: 'Events', component: __WEBPACK_IMPORTED_MODULE_8__pages_events_events__["a" /* EventsPage */] },
            { title: 'Memorial Wall Name Finder', component: __WEBPACK_IMPORTED_MODULE_9__pages_wall_wall__["a" /* WallPage */] },
            { title: 'Brick Finder', component: __WEBPACK_IMPORTED_MODULE_10__pages_brick_brick__["a" /* BrickPage */] },
            { title: 'Cherry Tree Finder', component: __WEBPACK_IMPORTED_MODULE_18__pages_cherry_trees_cherry_trees__["a" /* CherryTreesPage */] },
            //{ title: 'Narrative Plaque Finder', component: PlaquePage },
            { title: 'Bedford Boys Homefront Tour', component: __WEBPACK_IMPORTED_MODULE_15__pages_homefront_tour_homefront_tour__["a" /* HomefrontTourPage */] },
            { title: 'Welcome to Bedford', component: __WEBPACK_IMPORTED_MODULE_16__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Information', component: __WEBPACK_IMPORTED_MODULE_12__pages_info_info__["a" /* InfoPage */] },
            { title: 'Give', component: __WEBPACK_IMPORTED_MODULE_17__pages_support_modal_support_modal__["a" /* SupportModalPage */] },
            { title: 'Partners', component: __WEBPACK_IMPORTED_MODULE_14__pages_partners_partners__["a" /* PartnersPage */] },
            { title: 'FAQ & Policies', component: __WEBPACK_IMPORTED_MODULE_11__pages_faq_faq__["a" /* FaqPage */] },
            { title: 'Contact', component: "" },
            { title: 'About', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */] },
            { title: "Privacy Policy", component: "" }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.mobileAccess.usePreferredTextZoom(false);
            //this.statusBar.backgroundColorByHexString('#2B4453');
            /* Android ONLY */
            __WEBPACK_IMPORTED_MODULE_19__capacitor_core__["a" /* Plugins */].StatusBar.setBackgroundColor({ color: '#2B4453' });
            //this.statusBar.styleBlackTranslucent();
            //this.statusBar.overlaysWebView(false);
            /* Android ONLY */
            __WEBPACK_IMPORTED_MODULE_19__capacitor_core__["a" /* Plugins */].StatusBar.setOverlaysWebView({ overlay: false });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //this.splashScreen.hide();
            __WEBPACK_IMPORTED_MODULE_19__capacitor_core__["a" /* Plugins */].SplashScreen.hide();
            //alert('in');
            if ((_this.platform.is('core') || _this.platform.is('mobileweb')) == false) {
                //alert('in');
                var notificationOpenedCallback = function (jsonData) {
                    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
                };
                window["plugins"].OneSignal
                    .startInit("2ecb5a90-b48c-4bef-92fc-c4aaf03e74e6", "dday-8822d")
                    .handleNotificationOpened(notificationOpenedCallback)
                    .endInit();
                window["plugins"].OneSignal.getPermissionSubscriptionState(function (status) {
                    //alert(status.subscriptionStatus.subscribed + " " + status.subscriptionStatus.userSubscriptionSetting);
                    if (status.subscriptionStatus.subscribed == true && status.subscriptionStatus.userSubscriptionSetting == true) {
                        window["plugins"].OneSignal.setSubscription(true);
                    }
                });
            }
        });
        this.screenOrientation.onChange().subscribe(function () {
            setTimeout(function () {
                _this.content.resize();
                console.log('changed');
            }, 50);
        });
    };
    MyApp.prototype.openContact = function () {
        this.browser.create("https://www.dday.org/contact-us/", "_system", this.options);
    };
    MyApp.prototype.openPrivacy = function () {
        this.browser.create("https://www.dday.org/privacy-policy/", "_system", this.options);
    };
    MyApp.prototype.openVirtualTour = function () {
        //this.browser.create("https://www.vamonde.com/adventure/link/1644", "_system", this.options);
    };
    MyApp.prototype.openPage = function (page) {
        if (page.title == "Contact") {
            this.openContact();
        }
        else if (page.title == "Privacy Policy") {
            this.openPrivacy();
        }
        else if (page.title == "Virtual Guided Tour") {
            this.openVirtualTour();
        }
        else {
            // Reset the content nav to have just this page
            // we wouldn't want the back button to show in this scenario
            this.nav.setRoot(page.component);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], MyApp.prototype, "content", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/clew/Desktop/newDDayApps/ddayappios/src/app/app.html"*/'<ion-menu persistent="true" [content]="content" type="overlay">\n  <ion-header no-border>\n    <ion-toolbar>\n      <div class="menuHeader">\n          <!-- <img src="assets/images/logo.png"> -->\n          <img src="assets/imgs/menuHeader.jpg">\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/clew/Desktop/newDDayApps/ddayappios/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_mobile_accessibility__["a" /* MobileAccessibility */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_names_order_names__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memorial_search_memorial_search__ = __webpack_require__(516);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__order_names_order_names__["a" /* OrderNamesPipe */],
                __WEBPACK_IMPORTED_MODULE_2__memorial_search_memorial_search__["a" /* MemorialSearchPipe */]],
            imports: [],
            exports: [__WEBPACK_IMPORTED_MODULE_1__order_names_order_names__["a" /* OrderNamesPipe */],
                __WEBPACK_IMPORTED_MODULE_2__memorial_search_memorial_search__["a" /* MemorialSearchPipe */]]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ })

},[489]);
//# sourceMappingURL=main.js.map