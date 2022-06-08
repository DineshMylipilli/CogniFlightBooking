import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockflightComponent } from './blockflight.component';

describe('BlockflightComponent', () => {
  let component: BlockflightComponent;
  let fixture: ComponentFixture<BlockflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockflightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
