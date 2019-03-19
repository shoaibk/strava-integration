import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // onClickStrava() {
  //   window.open(
  //     "https://www.strava.com/oauth/authorize?client_id=33266&redirect_uri=https://stravacommutetracker.herokuapp.com/code_callback&response_type=code&approval_prompt=force&scope=activity:read",
  //     '_self'
  //     );
  // }
}
