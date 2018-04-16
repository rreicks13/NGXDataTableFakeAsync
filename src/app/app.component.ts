import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
		<ngx-datatable
			[rows]="Things">
			<ngx-datatable-column [flexGrow]="1">
				<ng-template let-row="row" ngx-datatable-cell-template>
					<p class="message-content">{{ row.Message }}</p>
				</ng-template>
			</ngx-datatable-column>
		</ngx-datatable>
  `,
  styles: []
})
export class AppComponent {
	Things = [];

	constructor() {}

	ngOnInit(): void {
		Promise.resolve().then(() => {
			this.Things = [{Message: 'Hello'}];
		});
	}
}

