import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from '../Trainer';
import {TrainerService} from '../../trainer/trainer.service';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trainer-detail',
  templateUrl: './trainer-detail.component.html',
  styleUrls: ['./trainer-detail.component.css'],
})
export class TrainerDetailComponent implements OnInit {
  @Input() trainerDetail!: Trainer;
  constructor(
    private route: ActivatedRoute,
    private trainerService: TrainerService
  ) {}

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.trainerService.getTrainerDetail(id).subscribe((data: Trainer) => {
      this.trainerDetail = data;
    });
  }
}