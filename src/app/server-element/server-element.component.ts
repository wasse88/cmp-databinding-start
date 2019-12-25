import { 
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native, ShadowDom, Emulated
})
export class ServerElementComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;


  constructor() {
    console.log('constructor log');
   }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges log');
    console.log( changes);
  }

  ngOnInit() {
    console.log('ngOnInit log');
    console.log('Text Content:'+ this.header.nativeElement.textContent);
    console.log('Text Content of paragraph:'+ this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('ngDoCheck log');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit log');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked log');
    console.log('Text Content of paragraph:'+ this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit log');
    console.log('Text Content: '+ this.header.nativeElement.textContent);

  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked log');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy log');
  }
}
 