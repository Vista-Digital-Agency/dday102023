import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CherryTreesSearchModalPage } from './cherry-trees-search-modal.page';

describe('CherryTreesSearchModalPage', () => {
  let component: CherryTreesSearchModalPage;
  let fixture: ComponentFixture<CherryTreesSearchModalPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryTreesSearchModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CherryTreesSearchModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
