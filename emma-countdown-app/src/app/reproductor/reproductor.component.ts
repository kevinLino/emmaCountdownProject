import { Component  } from '@angular/core';

declare global {
  interface Window {
    onSpotifyIframeApiReady: (IFrameAPI: any) => void;
  }
}

@Component({
  selector: 'app-reproductor',
  standalone: true,
  imports: [],
  templateUrl: './reproductor.component.html',
  styleUrl: './reproductor.component.css'
})
export class ReproductorComponent   {
  
}