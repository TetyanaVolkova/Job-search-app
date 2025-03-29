import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FavoritesComponent } from './favorites.component';

describe('FavoritsComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      imports: [ RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', waitForAsync(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(
      'PAGES.HOME.TITLE'
    );
  }));
});
