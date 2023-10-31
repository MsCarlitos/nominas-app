import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../interfaces/nomina.interface';
import { NominasService } from '../../services/nominas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {
  public empleado?: Empleado;

  constructor(
    private nominasService: NominasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // delay(1500),
        switchMap(({ id }) => this.nominasService.getEmpleadoById(id))
      )
      .subscribe(empleado => {
        if (!empleado) return this.router.navigate(['/nominas/listado'])
        this.empleado = empleado;
        console.log(this.empleado);
        return;
      })
  }

  goBack():void {
    this.router.navigateByUrl('/nominas/listado')
  }
}
