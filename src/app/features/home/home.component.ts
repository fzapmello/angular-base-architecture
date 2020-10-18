import { HelloWorldApiService } from './../../shared/services/hello-world-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public title = 'Home';

  constructor(private helloWorldService: HelloWorldApiService) {}

  ngOnInit(): void {}


  public onHelloWorld() {
    this.helloWorldService.getHelloWorld().subscribe((value: any) => {
      this.title = value;
    });
  }
}
