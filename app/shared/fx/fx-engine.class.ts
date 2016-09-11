export class FxEngine {

  public static HIT_1 = 0;
  public static MISS_1 = 1;

  private _shaiVoices: any = [
    'audio/oh-no-panic-01.mp3',
    'audio/oh-no-panic-02.mp3',
    'audio/oh-no-panic-03.mp3',
    'audio/oh-no-panic-04.mp3',
    'audio/oh-no-panic-05.mp3',
    'audio/oh-no-panic-06.mp3',
    'audio/oh-no-panic-07.mp3',
    'audio/oh-no-panic-08.mp3',
    'audio/oh-no-panic-09.mp3',
    'audio/oh-no-panic-10.mp3',
    'audio/oh-no-panic-11.mp3'
  ];

  private _fx: any = [
    'audio/fx1.mp3',
    'audio/fx2.mp3'
  ];

  private _audioEaster: any;
  private _audioBackground: any;

  constructor(audioContext: any) {

    let context: any = audioContext;
    this._initializeShai(context);
    this._initializeFx(context);
    let source1 = this._initializeEaster(context, 0.5,'audio/ng-show.mp3',0,0,0);
    source1.connect(context.destination);

    let source2 = this._initializeBackground(context, 0.2,'audio/preview-happy-place.mp3',0,1,1);
    source2.connect(context.destination);

  }

  fxEaster() {
    this._play(this._audioEaster);
  }

  fx(fxIndex = 0) {
    this._play(this._fx[ fxIndex ]);
  }

  bg() {
    this._play(this._audioBackground);
  }

  hit() {
    let voiceIndex = (Math.random() * this._shaiVoices.length) | 0;
    let audio = this._shaiVoices[ voiceIndex ];
    this._play(audio);
  }

  private _initializeShai(context: any) {
    this._shaiVoices = this._shaiVoices.map( (src: any) => {
      let {source, audio} = this._initializeAudio(context, 0.3, src, 0, 0, 0);
      source.connect(context.destination);
      return audio;
    })
  }

  private _initializeFx(context: any) {
    this._fx = this._fx.map( (src: any) => {
      let {source, audio} = this._initializeAudio(context, 0.1, src, 0, 0, 0);
      source.connect(context.destination);
      return audio;
    })
  }

  private _initializeEaster(context: any, gain = 1, src: string, controls = 0, autoplay = 0, loop = 0) {
    let {source, audio} = this._initializeAudio(context, gain, src, controls, autoplay, loop);
    this._audioEaster = audio;
    return source;
  }

  private _initializeBackground(context: any, gain = 1, src: string, controls = 0, autoplay = 0, loop = 0) {
    let {source, audio} = this._initializeAudio(context, gain, src, controls, autoplay, loop);
    this._audioBackground = audio;
    return source;
  }

  private _initializeAudio(context: any, gain = 1, src: string, controls = 0, autoplay = 0, loop = 0) {
    let volume = context.createGain();
    volume.gain.value = gain;
    let audio = this._createAudio(src, controls, autoplay, loop);

    // let source = context.createMediaElementSource(audio);
    let source = context.createBufferSource(audio);
    source.buffer

    source.connect(volume);
    return {source:volume,audio};
  }

  private _createAudio(src: string, controls = 0, autoplay = 0, loop = 0) {
    let audio = new Audio();
    audio.src = src;
    audio.controls = !!controls;
    audio.autoplay = !!autoplay;
    audio.loop = !!loop;
    return audio;
  }

  private _play(audio: any) {
    audio.pause();
    audio.currentTime = 0;
    audio.play();
  }

  private _vibrate(){
    if(window.navigator.vibrate) {
      window.navigator.vibrate([50, 50]);
    }
  }
}
