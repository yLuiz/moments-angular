import { Component, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Moment } from 'src/app/Moment';
import { Router, ActivatedRoute } from '@angular/router'
import { environment } from 'src/environments/environment';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {

  baseApiUrl: string = environment.baseApiUrl
  moment?: Moment;

  faTimes = faTimes;
  faEdit = faEdit;

  constructor(
      private momentService: MomentService,
      private router: Router,
      private route: ActivatedRoute,
      private messageService: MessagesService
    ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.momentService
      .getMoment(id)
      .subscribe((item) => this.moment = item.data)
  }

  async removeMoment(id: number) {
    
    await this.momentService.removeMoment(id).subscribe()
    this.messageService.add(`Momento ${id} foi excluído com sucesso!`)

    this.router.navigate(['/'])
  }

}
