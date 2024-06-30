import { Component, ElementRef, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initFederation, loadRemoteModule } from '@softarc/native-federation-runtime';
import { initWrapperConfig } from './wrapper-config';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  elm = inject(ElementRef);

  @Input() config = initWrapperConfig;

  async ngOnInit() {
    const { exposedModule, remoteName, elementName } = this.config;
      console.log(remoteName);
      console.log(exposedModule)
      console.log('pre init')
      // initFederation(FEDERATION_MANIFEST).then(async (manifest) => {
        console.log('manifest cargado')
        // console.log(manifest);
        await loadRemoteModule(remoteName, exposedModule);
        console.log()
        const root = document.createElement(elementName);
        this.elm.nativeElement.appendChild(root);
      // });
      console.log('post init')

  }
}

export const FEDERATION_MANIFEST =
{
	mfe2: "http://localhost:4202/remoteEntry.json",
}