import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { sliderData } from 'src/app/api/api-slider';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  slider:Slide[] = sliderData
  /* take the first element by default */
  currentSlide : Slide | undefined = this.slider[0]
  currentIndex : number = 0

  indexObs: Observable<number> = interval(3000)
  indexObsSub: Subscription | undefined

  constructor() {}

  ngOnInit(): void {
    this.indexObsSub = this.indexObs.subscribe({
      next: (value : number) => this.handleChangeImage(1)
    })
  }

  ngOnDestroy(): void {
    this.indexObsSub?.unsubscribe()
  }


  handleChangeImage(index: number) {
    console.log(index)
    console.log(this.currentIndex, "ici")
    let newIndex

    if (index === -1) {
      const newIndex = this.currentIndex - 1
      if(newIndex >= 0)
      {
        this.currentIndex = newIndex
      }else
      {
        this.currentIndex = this.slider.length - 1
      }
    }
    else{
     newIndex = this.currentIndex + 1

      if(newIndex > (this.slider.length-1)){
        this.currentIndex = 0

      }else{
        this.currentIndex = newIndex
      }
    }
  }



}
