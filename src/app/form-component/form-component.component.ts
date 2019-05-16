import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import ymaps from 'ymaps';//https://www.npmjs.com/package/ymaps
(window as any).global = window;
declare var ymaps:any;

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
 public map: any;
 public tasks = [];
 public multiRoute: any;
  //create form properties
  public form: FormGroup = new FormGroup({
    task: new FormControl()
  });

  constructor() { }

  ngOnInit() {
    //create a map!
    ymaps.ready().then(() => {
      this.map = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 5,
        controls:['geolocationControl', 'zoomControl']
      });
      //Creates a multi-route on the map.


      this.multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: this.tasks
      }, {
        boundsAutoApply: true,
        reverseGeocoding: true,
        viaPointDraggable: true,


      });


      this.renderRoute();
    });

  }

  //add addresses!
  addAddress(task: string) {

      this.tasks.push(this.form.value.task);
    this.form.reset();
    console.log(this.tasks);
    this.updateRoute();






  }

  //address deletion!
  deletAddress(index: number){
    this.tasks.splice(index, 1)
    this.updateRoute();
  }

  renderRoute() {
    // Add the route to the map.
    this.map.geoObjects.add(this.multiRoute);
    //Enable editing mode and configure settings
    this.multiRoute.editor.start({
      // When the addWayPoints option is enabled, users can
    // create waypoints by clicking on the map.
      addWayPoints: true,
       // When the removeWayPoints option is enabled, users can
    // delete waypoints.
    // To delete a waypoint, double-click it.
      removeWayPoints: true,

    });
  }

  updateRoute() {
    this.multiRoute.model.setReferencePoints(this.tasks);
    this.map.options.set('mapStateAutoApply', true);
  }




  }


