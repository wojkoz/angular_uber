import {Component, OnInit} from '@angular/core';
import {faFacebook, faInstagram, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-links-bar',
  templateUrl: './links-bar.component.html',
  styleUrls: ['./links-bar.component.css']
})
export class LinksBarComponent implements OnInit {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faEnvelope = faEnvelope;
  faInstagram = faInstagram;

  constructor() { }

  ngOnInit(): void {
  }

}

