import { SafehtmlPipe } from './safehtml.pipe';
import { DomSanitizer } from '@angular/platform-browser';

class ContentSanitizer extends DomSanitizer {
  bypassSecurityTrustHtml(value) {
    return 'html';
  }
  bypassSecurityTrustResourceUrl(value) {
    return 'url';
  }
  bypassSecurityTrustStyle(value) {
    return 'css';
  }
  bypassSecurityTrustScript(value) {
    return 'js';
  }
  bypassSecurityTrustUrl(value) {
    return 'simpleurl';
  }
  sanitize(value) {
    return 'sanatize';
  }
}
describe('SafehtmlPipe', () => {
  const domSanObj = new ContentSanitizer;

  let pipe: SafehtmlPipe;
  const value = null;
  beforeEach(() => {
    pipe = new SafehtmlPipe(domSanObj);
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('exptect all switch case method to be called', () => {
    expect(pipe.transform('<p>I am a html value</p>', 'html')).toMatch('html');

    expect(pipe.transform('<p>I am a url value</p>', 'resourceUrl')).toMatch('url');

    expect(pipe.transform('<p>I am a css value</p>', 'style')).toMatch('css');

    expect(pipe.transform('<p>I am a js value</p>', 'script')).toMatch('js');

    expect(pipe.transform('<p>I am a simpleurl value</p>', 'url')).toMatch('simpleurl');
  try {
    expect(pipe.transform('<p>I am a sanatize value</p>', 'unkown')).toThrowError();
  } catch (e) {

  }
  });
});
