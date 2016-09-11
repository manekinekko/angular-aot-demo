import { Injectable, Inject } from '@angular/core';
import { FxEngine } from './fx-engine.class';

@Injectable()
export class FxService {

  // private _audioContext: AudioContext
  // is not working on ios 9.3.4

  private _engine: FxEngine;

  constructor(
    @Inject('AudioContext') audioContext: any
  ) {
    this._engine = new FxEngine(audioContext);
    this._engine.bg();
  }

  bg() {
    this._engine.bg();
  }

  hit() {
    this._engine.hit();
  }

  easter() {
    this._engine.fxEaster();
  }

  flip() {
    this._engine.fx(FxEngine.HIT_1);
  }

  miss() {
    this._engine.fx(FxEngine.MISS_1);
  }

}
