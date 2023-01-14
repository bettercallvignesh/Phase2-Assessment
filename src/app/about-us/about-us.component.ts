import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { VegetableService } from '../shared/vegetable.service';
import { VegetableaddService } from '../shared/vegetableadd.service';
import { State } from '../state/vegetable/vegetable.state';
import { IVegetable } from '../veges-list/veges';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent{


}
