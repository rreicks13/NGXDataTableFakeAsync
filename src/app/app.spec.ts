import { TestBed, fakeAsync, tick, ComponentFixture, flush } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

describe('a datatable test', () => {
	let fixture: ComponentFixture<AppComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [BrowserModule, NgxDatatableModule]
		});

		fixture = TestBed.createComponent(AppComponent);
	});

	it('should display a row', fakeAsync(() => {
		fixture.detectChanges();
		tick();
		fixture.detectChanges();
		expect(fixture.componentInstance.Things.length).toBe(1);
		expect(fixture.debugElement.query(By.css('.message-content')).nativeElement.textContent).toMatch(/Hello/);
	}));
});

