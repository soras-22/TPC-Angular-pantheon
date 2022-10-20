import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  public data:any = []
  constructor(public http: HttpClient) {}

  getData() {
    const url = 'http://testing.ddev.site/rest/events'
    this.http.get(url).subscribe((res) => {
      this.data = res
      console.log(this.data)
    })
  }

  ngOnInit() {
    this.getData()
  }
}


